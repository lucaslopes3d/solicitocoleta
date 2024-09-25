import React, { ReactElement, useState } from "react";
import * as S from "./styles";
import { ButtonComponent } from "../components/buttonComponent";
import { TextInputTypes } from "./types";
import { TextInputComponent } from "../components/textInputComponent";
import { TextAreaInputComponent } from "../components/textAreaInputComponent";
import { NumericInputComponent } from "../components/numericInputComponent";
import { LogoComponent } from "../components/logoComponet";
import { Text } from "react-native";

export const FormComponent: React.FC = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState<number | null>(null);
  const [telefone, setTelefone] = useState<number | null>(null);
  const [enedereco, setEndereco] = useState("");
  const [solicitacao, setSolicitacao] = useState("");

  const handleSetNome = (text: string) => setNome(text);
  const handleSetCpf = (text: number) => setCpf(text);
  const handleSetTelefone = (text: number) => setTelefone(text);
  const handleSetEndereco = (text: string) => setEndereco(text);
  const handleSetSolicitacao = (text: string) => setSolicitacao(text);

  //Limpar os campos digitados
  const handleAfterClickSendButtonCleanForm = () => {
    setNome("");
    setCpf(null);
    setTelefone(null);
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
    <>
      <LogoComponent />
      <S.StyledView>
        <TextInputComponent
          title="Nome completo:"
          value={nome}
          onChangeText={handleSetNome}
        />
        <NumericInputComponent
          title="CPF:"
          value={cpf}
          onChangeText={handleSetCpf}
        />
        <NumericInputComponent
          title="Telefone:"
          value={telefone}
          onChangeText={handleSetTelefone}
        />
        <TextInputComponent
          title="Endereço da coleta:"
          value={enedereco}
          onChangeText={handleSetEndereco}
        />
        <TextAreaInputComponent
          title="Solicitação:"
          value={solicitacao}
          onChangeText={handleSetSolicitacao}
          numberOfLines={10}
        />

        <ButtonComponent onPress={handleSubmitCompleteForm} text={"ENVIAR"} />
      </S.StyledView>
    </>
  );
};
