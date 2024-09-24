import * as S from "./styles";

export const LogoComponent: React.FC = () => {
  return (
    <S.ImageSpace>
      <S.LogoImage
        source={require("../../assets/images/compactadorLixo.png")}
      />
      <S.LogoText>SOLICITO COLETA</S.LogoText>
    </S.ImageSpace>
  );
};
