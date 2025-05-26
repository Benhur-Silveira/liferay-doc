import React from "react";
import { ButtonUI } from "../shared/ui/button";
import { mask } from "../shared/utils/mask";
import { validateEmail, validateCPFCNPJ } from "../shared/utils/validators";
import { BUTTON_SAVE_TEXT } from "../constants/texts";

export const Home = () => {
  return (
    <div>
      <h1>Módulo com Shared Bundle</h1>
      <p>{validateEmail("test@gmail.com") ? "true" : "false"}</p>
      <p>{validateEmail("teste.email") ? "true" : "false"}</p>
      <p>{validateCPFCNPJ("123.456.789-00") ? "true" : "false"}</p>
      <p>{validateCPFCNPJ("838.079.371-45") ? "true" : "false"}</p>
      <div>
        <h2>Mask</h2>
        <p>CEP: {mask({ mask: "cep", value: "12345-678" })}</p>
        <p>CPF: {mask({ mask: "cpf", value: "123.456.789-00" })}</p>
        <p>CNPJ: {mask({ mask: "cnpj", value: "12.345.678/0001-90" })}</p>
      </div>
      <div>
        <ButtonUI
          onClick={() => console.log("clicked")}
          className="btn btn-primary"
        >
          {BUTTON_SAVE_TEXT}
        </ButtonUI>
      </div>
    </div>
  );
};
