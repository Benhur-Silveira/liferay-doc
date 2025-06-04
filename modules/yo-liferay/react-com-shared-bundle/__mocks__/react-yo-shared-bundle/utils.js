export const mask = ({ mask, value }) => {
  if (mask === "cep") {
    return formatarCEP(value);
  }
  return "";
};

const formatarCEP = (cep) => {
  const apenasDigitos = cep.replace(/\D/g, "");
  return apenasDigitos.replace(/(\d{5})(\d{3})/, "$1-$2");
};
