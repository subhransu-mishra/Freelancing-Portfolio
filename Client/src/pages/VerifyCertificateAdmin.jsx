import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import {
  buildCertificateCode,
  saveCertificate,
  verifyAdminPassword,
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
  const [formLoading, setFormLoading] = useState(false);

  async function handlePasswordSubmit(event) {
    event.preventDefault();
    setPasswordLoading(true);
    setPasswordMessage("");

    try {
      await verifyAdminPassword(password);
      setIsUnlocked(true);
    } catch (error) {
      setPasswordMessage(
        error.response?.data?.message || "Invalid password. Try again.",
      );
    } finally {
      setPasswordLoading(false);
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

      setForm((current) => ({
        ...current,
        certificateNumber: response.certificate.certificateNumber,
        name: response.certificate.name,
        date: response.certificate.date || "",
        month: response.certificate.month || "",
        domain: response.certificate.domain,
        duration: response.certificate.duration,
        internshipTitle: response.certificate.internshipTitle || "",
        internshipSummary: response.certificate.internshipSummary || "",
      }));

      setFormMessage(
        `Saved ${response.certificate.certificateCode} successfully.`,
      );
    } catch (error) {
      setFormMessage(
        error.response?.data?.message || "Unable to save certificate details.",
      );
    } finally {
      setFormLoading(false);
    }
  }

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  return (
    <>
      <SEO
        title="Certificate Admin"
        description="Private certificate admin panel for adding and updating WBT internship records."
        keywords={[
          "certificate admin",
          "private panel",
          "internship certificate administration",
        ]}
        route="/career/verify-certificate/admin"
        noIndex={true}
      />

      <div className="min-h-screen bg-[linear-gradient(180deg,_#040506_0%,_#0b0b0c_50%,_#050505_100%)] text-white pt-28 pb-20 px-4">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#14B8A6]">
              Private Admin Panel
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              Manage <span className="text-[#14B8A6]">WBT</span> certificates
            </h1>
            <p className="mt-4 text-white/65 max-w-2xl mx-auto leading-8">
              This route stays locked until the admin password is verified. Once
              unlocked, you can add or update certificate details for the public
              verification page.
            </p>
          </motion.div>

          {isUnlocked ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleFormSubmit}
              className="mx-auto mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <InputField
                  label="Certificate ID"
                  prefix={certificatePrefix}
                  value={form.certificateNumber}
                  onChange={(value) => updateField("certificateNumber", value)}
                  placeholder="1001"
                />
                <InputField
                  label="Name"
                  value={form.name}
                  onChange={(value) => updateField("name", value)}
                  placeholder="Student name"
                />
                <InputField
                  label="Date"
                  value={form.date}
                  onChange={(value) => updateField("date", value)}
                  placeholder="12"
                />
                <InputField
                  label="Month"
                  value={form.month}
                  onChange={(value) => updateField("month", value)}
                  placeholder="July"
                />
                <InputField
                  label="Domain"
                  value={form.domain}
                  onChange={(value) => updateField("domain", value)}
                  placeholder="Web Development"
                />
                <InputField
                  label="Duration"
                  value={form.duration}
                  onChange={(value) => updateField("duration", value)}
                  placeholder="3 Months"
                />
              </div>

              <div className="mt-5 grid gap-5">
                <InputField
                  label="Internship Title"
                  value={form.internshipTitle}
                  onChange={(value) => updateField("internshipTitle", value)}
                  placeholder="Frontend Internship"
                />
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Internship Summary
                  </label>
                  <textarea
                    value={form.internshipSummary}
                    onChange={(event) =>
                      updateField("internshipSummary", event.target.value)
                    }
                    rows={6}
                    placeholder="Describe the work completed during the internship"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-white/35 outline-none transition focus:border-[#14B8A6]/70"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-white/55">
                  Preview code:{" "}
                  {buildCertificateCode(form.certificateNumber || "")}
                </p>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="rounded-2xl bg-[#14B8A6] px-8 py-4 font-semibold text-[#041212] transition hover:bg-[#0dd2bc]"
                >
                  {formLoading ? "Saving..." : "Save Certificate"}
                </motion.button>
              </div>

              <AnimatePresence>
                {formMessage ? (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="mt-5 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white/75"
                  >
                    {formMessage}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-10 max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <form onSubmit={handlePasswordSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter admin password"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white placeholder:text-white/35 outline-none transition focus:border-[#14B8A6]/70"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-2xl bg-[#14B8A6] px-8 py-4 font-semibold text-[#041212] transition hover:bg-[#0dd2bc]"
                >
                  {passwordLoading ? "Checking..." : "Unlock Admin Panel"}
                </motion.button>
              </form>

              {passwordMessage ? (
                <p className="mt-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
                  {passwordMessage}
                </p>
              ) : null}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}

function InputField({ label, value, onChange, placeholder, prefix }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/70">{label}</label>
      <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-black/30 focus-within:border-[#14B8A6]/70">
        {prefix ? (
          <div className="flex items-center border-r border-white/10 px-4 text-sm font-semibold tracking-[0.25em] text-[#14B8A6]">
            {prefix}
          </div>
        ) : null}
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-5 py-4 text-white placeholder:text-white/35 outline-none"
        />
      </div>
    </div>
  );
}
