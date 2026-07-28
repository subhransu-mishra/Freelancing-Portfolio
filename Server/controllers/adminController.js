const { pool } = require("../config/db");

function buildCertificateCode(certificateNumber) {
  return `WBT${String(certificateNumber).trim()}`;
}

function normalizeRow(row) {
  if (!row) return null;
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

function getRequestPassword(req) {
  return (
    req.body?.password ||
    req.body?.adminPassword ||
    req.headers["x-admin-password"] ||
    req.query?.password
  );
}

function isValidAdminPassword(password) {
  const configuredPassword =
    process.env.ADMIN_PANEL_PASSWORD ||
    process.env.ADMIN_PASSWORD ||
    process.env.ADMIN_SECRET;
  return (
    Boolean(configuredPassword) &&
    Boolean(password) &&
    password === configuredPassword
  );
}

async function verifyAdminPassword(req, res) {
  const password = getRequestPassword(req);

  if (!isValidAdminPassword(password)) {
    return res.status(401).json({ message: "Invalid admin password." });
  }

  return res.json({ message: "Admin password verified." });
}

async function upsertCertificate(req, res) {
  const password = getRequestPassword(req);

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

  try {
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
  } catch (error) {
    console.error("Error saving certificate:", error);
    return res.status(500).json({
      message: "An error occurred while saving the certificate.",
    });
  }
}

async function listCertificates(req, res) {
  const password = getRequestPassword(req);

  if (!isValidAdminPassword(password)) {
    return res.status(401).json({ message: "Invalid admin password." });
  }

  try {
    const result = await pool.query(
      `SELECT * FROM certificates ORDER BY created_at DESC, id DESC`,
    );

    const certificates = result.rows.map(normalizeRow);

    return res.json({
      message: "Certificates retrieved successfully.",
      certificates,
    });
  } catch (error) {
    console.error("Error listing certificates:", error);
    return res.status(500).json({
      message: "An error occurred while retrieving certificates.",
    });
  }
}

async function deleteCertificate(req, res) {
  const password = getRequestPassword(req);

  if (!isValidAdminPassword(password)) {
    return res.status(401).json({ message: "Invalid admin password." });
  }

  const certificateNumber = String(
    req.params.certificateNumber ||
      req.query.certificateNumber ||
      req.body.certificateNumber ||
      "",
  ).trim();

  if (!certificateNumber) {
    return res.status(400).json({ message: "Certificate number is required." });
  }

  const certificateCode = buildCertificateCode(certificateNumber);

  try {
    const result = await pool.query(
      `DELETE FROM certificates WHERE certificate_code = $1 OR certificate_number = $2 RETURNING *`,
      [certificateCode, certificateNumber],
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "Certificate not found." });
    }

    return res.json({
      message: `Certificate ${result.rows[0].certificate_code} deleted successfully.`,
      certificate: normalizeRow(result.rows[0]),
    });
  } catch (error) {
    console.error("Error deleting certificate:", error);
    return res.status(500).json({
      message: "An error occurred while deleting the certificate.",
    });
  }
}

module.exports = {
  verifyAdminPassword,
  upsertCertificate,
  listCertificates,
  deleteCertificate,
};
