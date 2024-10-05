import { FlatList, Text, View } from "react-native";
import * as S from "./styles";

export const ShowListServicesModal: React.FC = () => {
  return (
    <S.StyledModalView>
      <S.StyledTextModal>Serviços agendados</S.StyledTextModal>
      {/* <S.StyledFlatListModal>
        <S.StyledTextModal>Teste</S.StyledTextModal>
      </S.StyledFlatListModal> */}
    </S.StyledModalView>
  );
};
