import styled from "styled-components/native";
import colors from "../../../styles/colors";

export const Container = styled.ScrollView`
  background-color: ${colors.primary};
  height: 100%;
  flex-direction: column;
`;

export const EditOptionView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  align-items: center;
`;

export const EditOptionLeft = styled.Text`
  margin-left: 20px;
`;

export const EditOptionText = styled.Text`
  font-family: openSans400;
  color: ${colors.gray};
  font-size: 16px;
`;

export const EditOptionButton = styled.TouchableOpacity`
  margin-right: 20px;
  width: 55px;
  height: 35px;
  background-color: ${colors.gray};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

export const EditOptionButtonText = styled.Text`
  color: ${colors.black};
  font-family: openSans400;
  font-size: 14px;
`;

export const EachChild = styled.View`
  margin-bottom: 5px;
`;
