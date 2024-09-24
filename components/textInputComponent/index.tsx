import * as S from "./styles";
import { InputTypes } from "./types";

export const TextInputComponent: React.FC<InputTypes> = (props) => {
  return (
    <S.StyledView>
      <S.StyledTexts>{props.title}</S.StyledTexts>
      <S.StyledTextInput
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </S.StyledView>
  );
};
