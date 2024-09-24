import * as S from "./styles";
import { InputTypes } from "./types";

export const TextAreaInputComponent: React.FC<InputTypes> = (props) => {
  return (
    <S.StyledView>
      <S.StyledTexts>{props.title}</S.StyledTexts>
      <S.StyledTextInput
        onChangeText={props.onChangeText}
        value={props.value}
        inputMode="text"
        multiline
        numberOfLines={props.numberOfLines}
        textAlignVertical="top"
      />
    </S.StyledView>
  );
};
