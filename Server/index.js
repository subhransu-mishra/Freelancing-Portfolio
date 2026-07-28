require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { initCertificateTable } = require("./config/db");
const certificateRoutes = require("./routes/certificateRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://www.webnexity.com",
  "https://webnexity.com",
  "https://freelancing-portfolio-1-baik.onrender.com",
];

if (process.env.CLIENT_URL) {
  process.env.CLIENT_URL.split(",").forEach((url) => {
    const trimmed = url.trim().replace(/\/$/, "");
    if (trimmed && !allowedOrigins.includes(trimmed)) {
      allowedOrigins.push(trimmed);
    }
  });
}

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      const normalizedOrigin = origin.replace(/\/$/, "");
      if (
        allowedOrigins.includes(normalizedOrigin) ||
        normalizedOrigin.endsWith(".vercel.app") ||
        normalizedOrigin.endsWith(".webnexity.com") ||
        process.env.NODE_ENV !== "production"
      ) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "x-admin-password",
      "Accept",
      "Origin",
      "X-Requested-With",
    ],
  }),
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server working well");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/certificates", certificateRoutes);
app.use("/api/admin", adminRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    message: "Something went wrong while processing the request.",
  });
});

async function startServer() {
  try {
    await initCertificateTable();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
}

startServer();
