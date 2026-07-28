const { pool } = require("../config/db");

function buildCertificateCode(certificateNumber) {
  return `WBT${String(certificateNumber).trim()}`;
}

function normalizeRow(row) {
  if (!row) {
    return null;
  }

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

async function lookupCertificate(req, res) {
  const certificateNumber =
    req.params.certificateNumber || req.query.certificateNumber;

  if (!certificateNumber) {
    return res.status(400).json({ message: "Certificate number is required." });
  }

  const certificateCode = buildCertificateCode(certificateNumber);
  const result = await pool.query(
    `SELECT * FROM certificates WHERE certificate_code = $1 LIMIT 1`,
    [certificateCode],
  );

  if (!result.rows.length) {
    return res.status(404).json({ message: "Certificate not found." });
  }

  return res.json({
    message: "Certificate found.",
    certificate: normalizeRow(result.rows[0]),
  });
}

module.exports = {
  lookupCertificate,
};
