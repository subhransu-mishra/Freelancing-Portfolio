const { Pool } = require("pg");

function shouldUseSsl(connectionString) {
  if (process.env.DATABASE_SSL === "true") {
    return true;
  }

  if (process.env.PGSSLMODE === "require") {
    return true;
  }

  if (!connectionString) {
    return false;
  }

  try {
    const host = new URL(connectionString).hostname.toLowerCase();
    return host.includes("render.com") || host.includes("onrender.com");
  } catch (error) {
    return false;
  }
}

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: shouldUseSsl(connectionString) ? { rejectUnauthorized: false } : false,
});

pool.on("error", (error) => {
  console.error("Unexpected Postgres pool error", error);
});

async function initCertificateTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS certificates (
      id SERIAL PRIMARY KEY,
      certificate_code TEXT UNIQUE NOT NULL,
      certificate_number TEXT NOT NULL,
      full_name TEXT NOT NULL,
      issue_day TEXT,
      issue_month TEXT,
      domain TEXT NOT NULL,
      duration TEXT NOT NULL,
      internship_title TEXT,
      internship_summary TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
}

module.exports = {
  pool,
  initCertificateTable,
};
