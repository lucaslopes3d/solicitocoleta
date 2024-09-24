import React, { ReactElement, useState } from "react";
import * as S from "./styles";
import { ButtonComponent } from "../components/buttonComponent";
import { TextInputTypes } from "./types";
import { TextInputComponent } from "@/components/textInputComponent";

export const FormComponent: React.FC = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enedereco, setEndereco] = useState("");
  const [solicitacao, setSolicitacao] = useState("");

  const handleSetNome = (text: any) => setNome(text);
  const handleSetCpf = (text: any) => setCpf(text);
  const handleSetTelefone = (text: any) => setTelefone(text);
  const handleSetEndereco = (text: any) => setEndereco(text);
  const handleSetSolicitacao = (text: any) => setSolicitacao(text);

  //Limpar os campos digitados
  const handleAfterClickSendButtonCleanForm = () => {
    setNome("");
    setCpf("");
    setTelefone("");
    setEndereco("");
    setSolicitacao("");
  };

  const handleSubmitCompleteForm = () => {
    const completeForm: TextInputTypes = {
      nomeCompleto: nome,
      cpfCompleto: cpf,
      telefoneCompleto: telefone,
      enderecoCompleto: enedereco,
      solicitacaoCompleta: solicitacao,
    };
    console.log(completeForm);

    handleAfterClickSendButtonCleanForm();
  };

  return (
    <S.StyledView>
      <TextInputComponent
        title="Nome completo:"
        value={nome}
        onChangeText={handleSetNome}
      />
      <TextInputComponent
        title="CPF:"
        value={cpf}
        onChangeText={handleSetCpf}
      />
      <TextInputComponent
        title="Telefone:"
        value={telefone}
        onChangeText={handleSetTelefone}
      />
      <TextInputComponent
        title="Endereço da coleta:"
        value={enedereco}
        onChangeText={handleSetEndereco}
      />
      <TextInputComponent
        title="Solicitação:"
        value={solicitacao}
        onChangeText={handleSetSolicitacao}
      />

      <ButtonComponent title="enviar" onPush={handleSubmitCompleteForm} />
    </S.StyledView>
  );
};
