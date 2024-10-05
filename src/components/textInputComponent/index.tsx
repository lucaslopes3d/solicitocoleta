import * as S from "./styles";
import { TextInputTypes } from "./types";

export const TextInputComponent: React.FC<TextInputTypes> = (props) => {
  return (
    <S.StyledView>
      <S.StyledTexts>{props.title}</S.StyledTexts>
      <S.StyledTextInput
        onChangeText={props.onChangeText}
        value={props.value}
        inputMode="text"
      />
    </S.StyledView>
  );
};
