/**
 * Validates an email address
 * @param {string} email - The email address to validate
 * @returns {boolean} - Returns true if the email is valid, false otherwise
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
