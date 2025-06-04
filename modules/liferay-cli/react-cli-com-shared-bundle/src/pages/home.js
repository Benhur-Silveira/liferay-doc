import React from "react";
import { ButtonUI } from "../shared/ui/button";
import { dayjs } from "../shared/utils/libs";
import { validateEmail, validateCPFCNPJ } from "../shared/utils/validators";
import { TextMask } from "../components/TextMask";
export const Home = () => {
  return (
    <div>
      <h1>Módulo Shared bundle - Liferay CLI</h1>
      <ButtonUI onClick={() => console.log("clicked")}>Click</ButtonUI>

      <div>
        <h2>Dayjs</h2>
        <p>Hoje: {dayjs().format("DD/MM/YYYY")}</p>
      </div>

      <div>
        <h2>VALIDATORS</h2>
        <p>Email: {validateEmail("test@gmail.com") ? "true" : "false"}</p>
        <p>Email: {validateEmail("teste.email") ? "true" : "false"}</p>
        <p>CPF:{validateCPFCNPJ("123.456.789-00") ? "true" : "false"}</p>
        <p>CPF: {validateCPFCNPJ("838.079.371-45") ? "true" : "false"}</p>
      </div>

      <div>
        <h2>Mask</h2>
        <TextMask mask={"cep"} value={"12345-678"} title={"CEP"} />
        <TextMask mask={"cpf"} value={"12345678900"} title={"CPF"} />
        <TextMask mask={"cnpj"} value={"12345678000190"} title={"CNPJ"} />
      </div>
    </div>
  );
};
