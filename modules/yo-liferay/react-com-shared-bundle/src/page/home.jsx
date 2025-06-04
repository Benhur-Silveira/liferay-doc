import React from "react";
import { ButtonUI } from "../shared/ui/button";
import { validateEmail, validateCPFCNPJ } from "../shared/utils/validators";
import { BUTTON_SAVE_TEXT } from "../constants/texts";
import { TextMask } from "../components/TextMask";

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
        <TextMask mask={"cep"} value={"12345678"} title={"CEP"} />
        <TextMask mask={"cpf"} value={"12345678900"} title={"CPF"} />
        <TextMask mask={"cnpj"} value={"12345678000190"} title={"CNPJ"} />
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
