const { pool } = require("../config/db");

function buildCertificateCode(certificateNumber) {
  return `WBT${String(certificateNumber).trim()}`;
}

function normalizeRow(row) {
  return {
    certificateCode: row.certificate_code,
    certificateNumber: row.certificate_number,
    name: row.full_name,
    date: row.issue_day,
    month: row.issue_month,
    domain: row.domain,
    duration: row.duration,
    internshipTitle: row.internship_title,
    internshipSummary: row.internship_summary,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function isValidAdminPassword(password) {
  return Boolean(password) && password === process.env.ADMIN_PANEL_PASSWORD;
}

async function verifyAdminPassword(req, res) {
  const password = req.body.password || req.body.adminPassword;

  if (!isValidAdminPassword(password)) {
    return res.status(401).json({ message: "Invalid admin password." });
  }

  return res.json({ message: "Admin password verified." });
}

async function upsertCertificate(req, res) {
  const password = req.body.password || req.body.adminPassword;

  if (!isValidAdminPassword(password)) {
    return res.status(401).json({ message: "Invalid admin password." });
  }

  const certificateNumber = String(
    req.body.certificateNumber || req.body.certificateId || "",
  ).trim();
  const name = String(req.body.name || req.body.fullName || "").trim();
  const date = String(req.body.date || req.body.issueDay || "").trim();
  const month = String(req.body.month || req.body.issueMonth || "").trim();
  const domain = String(req.body.domain || "").trim();
  const duration = String(req.body.duration || "").trim();
  const internshipTitle = String(
    req.body.internshipTitle || req.body.internship || "",
  ).trim();
  const internshipSummary = String(
    req.body.internshipSummary || req.body.summary || "",
  ).trim();

  if (!certificateNumber || !name || !domain || !duration) {
    return res.status(400).json({
      message: "Certificate number, name, domain, and duration are required.",
    });
  }

  const certificateCode = buildCertificateCode(certificateNumber);
  const result = await pool.query(
    `
      INSERT INTO certificates (
        certificate_code,
        certificate_number,
        full_name,
        issue_day,
        issue_month,
        domain,
        duration,
        internship_title,
        internship_summary,
        updated_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
      ON CONFLICT (certificate_code) DO UPDATE SET
        certificate_number = EXCLUDED.certificate_number,
        full_name = EXCLUDED.full_name,
        issue_day = EXCLUDED.issue_day,
        issue_month = EXCLUDED.issue_month,
        domain = EXCLUDED.domain,
        duration = EXCLUDED.duration,
        internship_title = EXCLUDED.internship_title,
        internship_summary = EXCLUDED.internship_summary,
        updated_at = NOW()
      RETURNING *
    `,
    [
      certificateCode,
      certificateNumber,
      name,
      date,
      month,
      domain,
      duration,
      internshipTitle,
      internshipSummary,
    ],
  );

  return res.status(201).json({
    message: "Certificate saved successfully.",
    certificate: normalizeRow(result.rows[0]),
  });
}

module.exports = {
  verifyAdminPassword,
  upsertCertificate,
};
