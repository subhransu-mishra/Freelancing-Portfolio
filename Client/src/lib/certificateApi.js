import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const certificatePrefix = "WBT";

export function buildCertificateCode(certificateNumber) {
  return `${certificatePrefix}${String(certificateNumber).trim()}`;
}

export async function lookupCertificate(certificateNumber) {
  const response = await axios.get(
    `${apiBaseUrl}/certificates/${encodeURIComponent(certificateNumber)}`,
  );

  return response.data;
}

export async function verifyAdminPassword(password) {
  const response = await axios.post(`${apiBaseUrl}/admin/verify`, {
    password,
  });

  return response.data;
}

export async function saveCertificate(details) {
  const response = await axios.post(
    `${apiBaseUrl}/admin/certificates`,
    details,
  );

  return response.data;
}

export async function listCertificates(password) {
  const response = await axios.post(
    `${apiBaseUrl}/admin/certificates/list`,
    { password },
  );

  return response.data;
}

export async function deleteCertificate(certificateNumber, password) {
  const response = await axios.post(
    `${apiBaseUrl}/admin/certificates/delete/${encodeURIComponent(certificateNumber)}`,
    { password },
  );

  return response.data;
}

