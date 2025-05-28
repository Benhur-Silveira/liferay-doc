import React from "react";
import { ButtonUI } from "../shared/ui/button";
import { dayjs } from "../shared/utils/libs";
import { mask } from "../shared/utils/mask";
import { validateEmail, validateCPFCNPJ } from "../shared/utils/validators";
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
        <p>CEP: {mask({ mask: "cep", value: "12345-678" })}</p>
        <p>CPF: {mask({ mask: "cpf", value: "123.456.789-00" })}</p>
        <p>CNPJ: {mask({ mask: "cnpj", value: "12.345.678/0001-90" })}</p>
      </div>
    </div>
  );
};
