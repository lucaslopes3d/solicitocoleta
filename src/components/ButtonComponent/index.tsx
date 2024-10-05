import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./types";

export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return (
    <S.StyledButtonView>
      <S.StyledButton onPress={props.onPress}>
        <S.StyledButtonText>{props.text}</S.StyledButtonText>
      </S.StyledButton>
    </S.StyledButtonView>
  );
};
