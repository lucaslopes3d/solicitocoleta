import * as S from "./styles";
import { InputTypes } from "./types";

export const NumericInputComponent: React.FC<InputTypes> = (props) => {
  return (
    <S.StyledView>
      <S.StyledTexts>{props.title}</S.StyledTexts>
      <S.StyledTextInput
        onChangeText={props.onChangeText}
        value={props.value}
        inputMode="numeric"
      />
    </S.StyledView>
  );
};
