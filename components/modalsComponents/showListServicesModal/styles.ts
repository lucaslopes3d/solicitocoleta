import styled from "styled-components/native";

export const StyledModalView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 30px 30px;
  padding: 40px 20px;
  position: absolute;
  backdrop-filter: blur(4px);
`;

export const StyledTextModal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const StyledFlatListModal = styled.FlatList`
  display: flex;
  justify-content: center;
  align-items: center;
`;
