import * as S from "./styles";
import { AreaInputTypes } from "./types";

export const TextAreaInputComponent: React.FC<AreaInputTypes> = (props) => {
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
