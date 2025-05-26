/**
 * Validates CPF and CNPJ numbers
 * @param {string} value - The CPF or CNPJ number (can contain dots, dashes, and slashes)
 * @returns {boolean} - Returns true if the CPF/CNPJ is valid, false otherwise
 */
export const validateCPFCNPJ = (value) => {
  if (!value) return false;
  // Remove all non-digit characters
  const cleanValue = value.replace(/[^\d]/g, "");
  // Check if it's a CPF (11 digits) or CNPJ (14 digits)
  if (cleanValue.length === 11) {
    return validateCPF(cleanValue);
  } else if (cleanValue.length === 14) {
    return validateCNPJ(cleanValue);
  }
  return false;
};

/**
 * Validates a CPF number
 * @param {string} cpf - CPF number (only digits)
 * @returns {boolean} - Returns true if the CPF is valid, false otherwise
 */
const validateCPF = (cpf) => {
  // Check for known invalid sequences
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let sum = 0;
  let remainder;

  // First digit validation
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  // Second digit validation
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
};

/**
 * Validates a CNPJ number
 * @param {string} cnpj - CNPJ number (only digits)
 * @returns {boolean} - Returns true if the CNPJ is valid, false otherwise
 */
const validateCNPJ = (cnpj) => {
  // Check for known invalid sequences
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  // First digit validation
  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  // Second digit validation
  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) pos = 9;
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
};
