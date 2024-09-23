import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./types";

export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return (
    <S.StyledButtonView>
      <S.StyledButton title={props.title} onPress={props.onPush} />
    </S.StyledButtonView>
  );
};
