require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { initCertificateTable } = require("./config/db");
const certificateRoutes = require("./routes/certificateRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(",") : true,
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
