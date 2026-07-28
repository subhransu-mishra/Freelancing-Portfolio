import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import {
  buildCertificateCode,
  lookupCertificate,
  certificatePrefix,
} from "../lib/certificateApi";

export default function VerifyCertificate() {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [certificate, setCertificate] = useState(null);

  const certificateCode = useMemo(() => {
    if (!certificateNumber.trim()) {
      return certificatePrefix;
    }

    return buildCertificateCode(certificateNumber);
  }, [certificateNumber]);

  async function handleSearch(event) {
    event.preventDefault();
    const trimmedNumber = certificateNumber.trim();

    if (!trimmedNumber) {
      setMessage("Please enter the certificate number.");
      setCertificate(null);
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await lookupCertificate(trimmedNumber);
      setCertificate(response.certificate);
      setMessage(response.message);
    } catch (error) {
      setCertificate(null);
      setMessage(
        error.response?.data?.message ||
          "Certificate not found. Please check the number and try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SEO
        title="Verify Certificate"
        description="Verify WBT internship certificates using the certificate number and view the internship details instantly."
        keywords={[
          "certificate verification",
          "WBT certificate lookup",
          "internship certificate",
          "verify certificate",
        ]}
        route="/career/verify-certificate"
      />

      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.18),_transparent_42%),linear-gradient(180deg,_#081011_0%,_#0b0b0c_58%,_#050505_100%)] text-white pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
              Internship Verification
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              Verify your <span className="text-[#14B8A6]">WBT</span>{" "}
              certificate
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 leading-8">
              Enter the certificate number only. The WBT prefix is fixed for
              every certificate, and the system will show the related internship
              record instantly.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-12 mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-4 md:p-6 shadow-2xl shadow-black/30 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
              <div className="flex items-center rounded-2xl border border-white/10 bg-black/30 px-4 py-4 md:min-w-32">
                <span className="text-sm font-semibold tracking-[0.25em] text-[#14B8A6]">
                  {certificatePrefix}
                </span>
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  inputMode="numeric"
                  value={certificateNumber}
                  onChange={(event) => setCertificateNumber(event.target.value)}
                  placeholder="Enter certificate number"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-lg text-white placeholder:text-white/35 outline-none transition focus:border-[#14B8A6]/70"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">
                  Search code preview: {certificateCode}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="rounded-2xl bg-[#14B8A6] px-8 py-4 font-semibold text-[#041212] transition hover:bg-[#0dd2bc]"
              >
                {loading ? "Searching..." : "Verify"}
              </motion.button>
            </div>
          </motion.form>

          <AnimatePresence>
            {message ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                className={`mx-auto mt-6 max-w-2xl rounded-2xl border px-5 py-4 text-sm ${
                  certificate
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-100"
                }`}
              >
                {message}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {certificate ? (
              <motion.section
                key={certificate.certificateCode}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ duration: 0.5 }}
                className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-white/10 bg-white/6 p-6 md:p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[#14B8A6]">
                      Verified Certificate
                    </p>
                    <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
                      {certificate.name}
                    </h2>
                    <p className="mt-2 text-white/60">
                      Certificate ID: {certificate.certificateCode}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white/75">
                    <p className="uppercase tracking-[0.3em] text-white/35">
                      Internship Duration
                    </p>
                    <p className="mt-2 text-lg text-white">
                      {certificate.duration}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  <InfoCard label="Domain" value={certificate.domain} />
                  <InfoCard
                    label="Issue Date"
                    value={certificate.date || "N/A"}
                  />
                  <InfoCard
                    label="Issue Month"
                    value={certificate.month || "N/A"}
                  />
                </div>

                <div className="mt-6 rounded-3xl border border-white/10 bg-black/20 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                    Internship Details
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {certificate.internshipTitle || "Internship Program"}
                  </h3>
                  <p className="mt-4 text-white/70 leading-8">
                    {certificate.internshipSummary ||
                      "No internship summary was added for this certificate yet."}
                  </p>
                </div>
              </motion.section>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-white/35">
        {label}
      </p>
      <p className="mt-3 text-lg text-white">{value}</p>
    </div>
  );
}
