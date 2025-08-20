// Strict email regex
const emailRegex = /^[A-Za-z0-9._%+-]+@([A-Za-z0-9]+(-[A-Za-z0-9]+)*)(\.[A-Za-z0-9]+(-[A-Za-z0-9]+)*)+$/;

function isValidEmail(email) {
  if (!email) return false;
  const normalized = email.trim().toLowerCase();
  return emailRegex.test(normalized);
}

module.exports = { isValidEmail };