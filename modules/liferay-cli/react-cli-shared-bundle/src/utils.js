import { dayjs } from "./libs/dayjs";
import { mask } from "./libs/imask";
import { validateCPFCNPJ } from "./validations/cpf_cnpj";
import { validateEmail } from "./validations/email";

const validators = {
  validateCPFCNPJ,
  validateEmail,
};

export { dayjs, mask, validators };
