import { useEffect, useState, useMemo, useCallback } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */
import {
  Lock,
  Unlock,
  ShieldCheck,
  Search,
  Plus,
  Trash2,
  Edit3,
  RefreshCw,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Award,
  Calendar,
  User,
  Briefcase,
  FileText,
} from "lucide-react";
import SEO from "../components/SEO";
import {
  buildCertificateCode,
  saveCertificate,
  verifyAdminPassword,
  lookupCertificate,
  listCertificates,
  deleteCertificate,
  certificatePrefix,
} from "../lib/certificateApi";

const initialForm = {
  certificateNumber: "",
  name: "",
  date: "",
  month: "",
  domain: "",
  duration: "",
  internshipTitle: "",
  internshipSummary: "",
};

export default function VerifyCertificateAdmin() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordLoading, setPasswordLoading] = useState(false);

  const [form, setForm] = useState(initialForm);
  const [formMessage, setFormMessage] = useState("");
  const [formMessageType, setFormMessageType] = useState("info");
  const [formLoading, setFormLoading] = useState(false);

  const [certificates, setCertificates] = useState([]);
  const [listLoading, setListLoading] = useState(false);
  const [listError, setListError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [lookupLoading, setLookupLoading] = useState(false);
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);

  const fetchCertificatesList = useCallback(async () => {
    setListLoading(true);
    setListError("");
    try {
      const response = await listCertificates(password);
      setCertificates(response.certificates || []);
    } catch (error) {
      setListError(
        error.response?.data?.message ||
          "Failed to load certificates from database.",
      );
    } finally {
      setListLoading(false);
    }
  }, [password]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (!isUnlocked && event.key === "Escape") {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isUnlocked]);

  useEffect(() => {
    if (isUnlocked) {
      fetchCertificatesList();
    }
  }, [isUnlocked, fetchCertificatesList]);


  async function handlePasswordSubmit(event) {
    event.preventDefault();
    setPasswordLoading(true);
    setPasswordMessage("");

    try {
      await verifyAdminPassword(password);
      setIsUnlocked(true);
    } catch (error) {
      setPasswordMessage(
        error.response?.data?.message ||
          "Invalid admin password. Please try again."
      );
    } finally {
      setPasswordLoading(false);
    }
  }

  function populateForm(cert) {
    setForm({
      certificateNumber: cert.certificateNumber || "",
      name: cert.name || "",
      date: cert.date || "",
      month: cert.month || "",
      domain: cert.domain || "",
      duration: cert.duration || "",
      internshipTitle: cert.internshipTitle || "",
      internshipSummary: cert.internshipSummary || "",
    });
  }

  async function handleLookupById() {
    const trimmedId = form.certificateNumber.trim();
    if (!trimmedId) {
      setFormMessage("Please enter a Certificate ID to lookup.");
      setFormMessageType("error");
      return;
    }

    setLookupLoading(true);
    setFormMessage("");

    try {
      const response = await lookupCertificate(trimmedId);
      if (response.certificate) {
        populateForm(response.certificate);
        setFormMessage(`Loaded details for ${response.certificate.certificateCode}.`);
        setFormMessageType("success");
      }
    } catch (error) {
      setFormMessage(
        error.response?.data?.message || "No existing certificate found with this ID."
      );
      setFormMessageType("error");
    } finally {
      setLookupLoading(false);
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    setFormLoading(true);
    setFormMessage("");

    try {
      const response = await saveCertificate({
        password,
        certificateNumber: form.certificateNumber,
        name: form.name,
        date: form.date,
        month: form.month,
        domain: form.domain,
        duration: form.duration,
        internshipTitle: form.internshipTitle,
        internshipSummary: form.internshipSummary,
      });

      populateForm(response.certificate);
      setFormMessage(`Saved ${response.certificate.certificateCode} successfully!`);
      setFormMessageType("success");

      await fetchCertificatesList();
    } catch (error) {
      setFormMessage(
        error.response?.data?.message || "Unable to save certificate details."
      );
      setFormMessageType("error");
    } finally {
      setFormLoading(false);
    }
  }

  function handleEditCertificate(cert) {
    populateForm(cert);
    setFormMessage(`Editing certificate ${cert.certificateCode}`);
    setFormMessageType("info");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDeleteCertificate(cert) {
    const confirmed = window.confirm(
      `Are you sure you want to delete certificate ${cert.certificateCode} (${cert.name})? This action cannot be undone.`
    );
    if (!confirmed) return;

    setDeleteLoadingId(cert.certificateCode);
    setFormMessage("");

    try {
      await deleteCertificate(cert.certificateNumber, password);
      setCertificates((prev) =>
        prev.filter((c) => c.certificateCode !== cert.certificateCode)
      );

      if (
        buildCertificateCode(form.certificateNumber) === cert.certificateCode
      ) {
        setForm(initialForm);
      }

      setFormMessage(`Deleted ${cert.certificateCode} successfully.`);
      setFormMessageType("success");
    } catch (error) {
      setFormMessage(
        error.response?.data?.message || "Failed to delete certificate."
      );
      setFormMessageType("error");
    } finally {
      setDeleteLoadingId(null);
    }
  }

  function handleClearForm() {
    setForm(initialForm);
    setFormMessage("Form cleared. Enter new certificate details.");
    setFormMessageType("info");
  }

  function handleLockPanel() {
    setIsUnlocked(false);
    setPassword("");
    setCertificates([]);
    setForm(initialForm);
    setFormMessage("");
    setPasswordMessage("");
  }

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  const filteredCertificates = useMemo(() => {
    if (!searchQuery.trim()) return certificates;
    const q = searchQuery.toLowerCase();
    return certificates.filter(
      (c) =>
        c.certificateCode?.toLowerCase().includes(q) ||
        c.name?.toLowerCase().includes(q) ||
        c.domain?.toLowerCase().includes(q)
    );
  }, [certificates, searchQuery]);

  return (
    <>
      <SEO
        title="Certificate Admin Panel | WebNexity"
        description="Private certificate admin panel for adding and updating WBT internship records."
        keywords={[
          "certificate admin",
          "private panel",
          "internship certificate administration",
        ]}
        route="/career/verify-certificate/admin"
        noIndex={true}
      />

      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.15),_transparent_38%),linear-gradient(180deg,_#040506_0%,_#0b0b0c_55%,_#050505_100%)] text-white px-4 py-8 md:py-14 selection:bg-[#14B8A6]/30 selection:text-[#14B8A6]">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!isUnlocked ? (
              <motion.div
                key="admin-lock-modal"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-[#0b0b0c]/90 p-8 md:p-10 shadow-2xl shadow-black/60 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#14B8A6]">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold tracking-[0.3em] text-[#14B8A6]">
                      Protected Access
                    </p>
                    <h1 className="text-2xl font-bold text-white tracking-tight">
                      WBT Admin Verification
                    </h1>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/65">
                  Enter the secure admin password configured in your backend
                  environment to access the certificate administration panel. No
                  unverified access is permitted.
                </p>

                <form onSubmit={handlePasswordSubmit} className="mt-7 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/80">
                      Admin Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter backend admin password"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-white/35 outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={passwordLoading}
                    className="w-full rounded-2xl bg-gradient-to-r from-[#14B8A6] to-[#0dd2bc] px-8 py-4 font-semibold text-[#041212] transition shadow-lg shadow-[#14B8A6]/20 hover:shadow-[#14B8A6]/40 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Unlock className="h-5 w-5" />
                    <span>
                      {passwordLoading
                        ? "Verifying Password..."
                        : "Unlock Admin Panel"}
                    </span>
                  </motion.button>
                </form>

                {passwordMessage ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 flex items-center gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-3.5 text-sm text-rose-200"
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-rose-400" />
                    <span>{passwordMessage}</span>
                  </motion.div>
                ) : null}
              </motion.div>
            ) : (
              <motion.div
                key="admin-form-panel"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="w-full space-y-10"
              >
                {/* Header bar */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#14B8A6]">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#14B8A6]">
                          WBT Certificate Portal
                        </span>
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-medium text-emerald-300 border border-emerald-500/30">
                          Admin Verified
                        </span>
                      </div>
                      <h1 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">
                        Certificate Management
                      </h1>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="hidden md:inline-flex items-center rounded-2xl border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/60">
                      {certificates.length} Certificate
                      {certificates.length === 1 ? "" : "s"}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLockPanel}
                      className="inline-flex items-center gap-2 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-5 py-2.5 text-sm font-medium text-rose-300 transition hover:bg-rose-500/20"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Lock Panel</span>
                    </motion.button>
                  </div>
                </div>

                {/* Form Card */}
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {form.certificateNumber
                          ? `Editing: ${buildCertificateCode(form.certificateNumber)}`
                          : "Add New Internship Certificate"}
                      </h2>
                      <p className="mt-1 text-sm text-white/60">
                        Enter certificate details below. The WBT prefix is
                        automatically applied.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={handleClearForm}
                        className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 hover:bg-white/10 transition"
                      >
                        Reset / New
                      </motion.button>
                    </div>
                  </div>

                  <form onSubmit={handleFormSubmit} className="mt-8 space-y-7">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <Award className="h-4 w-4 text-[#14B8A6]" />
                            <span>Certificate ID (Number)</span>
                          </label>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            onClick={handleLookupById}
                            disabled={lookupLoading}
                            className="text-xs text-[#14B8A6] hover:underline flex items-center gap-1 font-medium"
                          >
                            {lookupLoading ? "Looking up..." : "Lookup existing ID"}
                          </motion.button>
                        </div>
                        <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-black/40 focus-within:border-[#14B8A6] focus-within:ring-2 focus-within:ring-[#14B8A6]/20">
                          <div className="flex items-center border-r border-white/10 px-4 text-sm font-semibold tracking-[0.25em] text-[#14B8A6]">
                            {certificatePrefix}
                          </div>
                          <input
                            type="text"
                            value={form.certificateNumber}
                            onChange={(event) =>
                              updateField("certificateNumber", event.target.value)
                            }
                            placeholder="1001"
                            required
                            className="w-full bg-transparent px-5 py-4 text-white placeholder:text-white/35 outline-none"
                          />
                        </div>
                      </div>

                      <InputField
                        label="Student Full Name"
                        icon={<User className="h-4 w-4 text-[#14B8A6]" />}
                        value={form.name}
                        onChange={(value) => updateField("name", value)}
                        placeholder="John Doe"
                        required={true}
                      />

                      <InputField
                        label="Issue Date (Day)"
                        icon={<Calendar className="h-4 w-4 text-[#14B8A6]" />}
                        value={form.date}
                        onChange={(value) => updateField("date", value)}
                        placeholder="28"
                      />

                      <InputField
                        label="Issue Month / Year"
                        icon={<Calendar className="h-4 w-4 text-[#14B8A6]" />}
                        value={form.month}
                        onChange={(value) => updateField("month", value)}
                        placeholder="July 2026"
                      />

                      <InputField
                        label="Internship Domain"
                        icon={<Briefcase className="h-4 w-4 text-[#14B8A6]" />}
                        value={form.domain}
                        onChange={(value) => updateField("domain", value)}
                        placeholder="Full Stack Web Development"
                        required={true}
                      />

                      <InputField
                        label="Duration"
                        icon={<Calendar className="h-4 w-4 text-[#14B8A6]" />}
                        value={form.duration}
                        onChange={(value) => updateField("duration", value)}
                        placeholder="3 Months"
                        required={true}
                      />
                    </div>

                    <div className="grid gap-6">
                      <InputField
                        label="Internship Title"
                        icon={<Briefcase className="h-4 w-4 text-[#14B8A6]" />}
                        value={form.internshipTitle}
                        onChange={(value) =>
                          updateField("internshipTitle", value)
                        }
                        placeholder="Full Stack Engineering Intern"
                      />

                      <div>
                        <label className="mb-2 block text-sm font-medium text-white/80 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-[#14B8A6]" />
                          <span>Internship Summary / Contributions</span>
                        </label>
                        <textarea
                          value={form.internshipSummary}
                          onChange={(event) =>
                            updateField("internshipSummary", event.target.value)
                          }
                          rows={4}
                          placeholder="Describe the projects and responsibilities completed during the internship..."
                          className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white placeholder:text-white/35 outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <span>Verification Code Preview:</span>
                        <span className="font-mono font-semibold text-[#14B8A6] rounded bg-[#14B8A6]/10 px-2 py-1 border border-[#14B8A6]/20">
                          {buildCertificateCode(
                            form.certificateNumber || "XXXX"
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={formLoading}
                          className="rounded-2xl bg-gradient-to-r from-[#14B8A6] to-[#0dd2bc] px-8 py-4 font-semibold text-[#041212] transition shadow-lg shadow-[#14B8A6]/20 hover:shadow-[#14B8A6]/40 disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          <Award className="h-5 w-5" />
                          <span>
                            {formLoading
                              ? "Saving Certificate..."
                              : "Save Certificate"}
                          </span>
                        </motion.button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {formMessage ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className={`mt-4 rounded-2xl border px-5 py-4 text-sm flex items-center gap-3 ${
                            formMessageType === "success"
                              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                              : formMessageType === "error"
                                ? "border-rose-500/30 bg-rose-500/10 text-rose-200"
                                : "border-cyan-500/30 bg-cyan-500/10 text-cyan-200"
                          }`}
                        >
                          {formMessageType === "success" ? (
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                          ) : formMessageType === "error" ? (
                            <AlertCircle className="h-5 w-5 flex-shrink-0 text-rose-400" />
                          ) : (
                            <Award className="h-5 w-5 flex-shrink-0 text-cyan-400" />
                          )}
                          <span>{formMessage}</span>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </form>
                </div>

                {/* Certificates Manager Card */}
                <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 md:p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Issued Certificates Registry
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        Manage all stored WBT certificates. Edit to modify existing records or remove invalid entries.
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search certificates..."
                          className="w-full sm:w-64 rounded-2xl border border-white/10 bg-black/40 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-[#14B8A6]"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={fetchCertificatesList}
                        disabled={listLoading}
                        title="Refresh List"
                        className="rounded-2xl border border-white/10 bg-white/5 p-2.5 text-white/80 hover:bg-white/10 transition disabled:opacity-50"
                      >
                        <RefreshCw
                          className={`h-4 w-4 ${
                            listLoading ? "animate-spin" : ""
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>

                  {listError ? (
                    <div className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-5 py-4 text-sm text-rose-200">
                      {listError}
                    </div>
                  ) : null}

                  {listLoading && certificates.length === 0 ? (
                    <div className="py-12 text-center text-white/50">
                      Loading certificates from backend database...
                    </div>
                  ) : filteredCertificates.length === 0 ? (
                    <div className="py-12 text-center text-white/50">
                      {searchQuery
                        ? "No certificates match your search query."
                        : "No certificates found in the registry. Add one above!"}
                    </div>
                  ) : (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-white/50">
                            <th className="py-3 px-4">Code</th>
                            <th className="py-3 px-4">Student Name</th>
                            <th className="py-3 px-4">Domain</th>
                            <th className="py-3 px-4">Duration</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-sm">
                          {filteredCertificates.map((cert) => (
                            <tr
                              key={cert.certificateCode}
                              className="hover:bg-white/[0.03] transition"
                            >
                              <td className="py-4 px-4 font-mono font-semibold text-[#14B8A6]">
                                {cert.certificateCode}
                              </td>
                              <td className="py-4 px-4 font-medium text-white">
                                {cert.name}
                              </td>
                              <td className="py-4 px-4 text-white/80">
                                {cert.domain}
                              </td>
                              <td className="py-4 px-4 text-white/65">
                                {cert.duration}
                              </td>
                              <td className="py-4 px-4 text-white/65">
                                {cert.date ? `${cert.date} ${cert.month}` : "-"}
                              </td>
                              <td className="py-4 px-4 text-right space-x-2">
                                <button
                                  type="button"
                                  onClick={() => handleEditCertificate(cert)}
                                  className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition"
                                >
                                  <Edit3 className="h-3.5 w-3.5" />
                                  <span>Edit</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteCertificate(cert)}
                                  disabled={
                                    deleteLoadingId === cert.certificateCode
                                  }
                                  className="inline-flex items-center gap-1 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs text-rose-300 hover:bg-rose-500/20 transition disabled:opacity-50"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                  <span>
                                    {deleteLoadingId === cert.certificateCode
                                      ? "..."
                                      : "Delete"}
                                  </span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  icon,
  required = false,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-white/80 flex items-center gap-2">
        {icon}
        <span>
          {label}
          {required && <span className="text-[#14B8A6] ml-1">*</span>}
        </span>
      </label>
      <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-black/40 focus-within:border-[#14B8A6] focus-within:ring-2 focus-within:ring-[#14B8A6]/20">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full bg-transparent px-5 py-4 text-white placeholder:text-white/35 outline-none"
        />
      </div>
    </div>
  );
}

