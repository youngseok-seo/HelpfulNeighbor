import React from "react";
import styled from "styled-components";

const S = {};

S.Logo = styled.img`
  position: fixed;
  height: 200px; 
`;

export default () => (
  <S.Logo src="https://user-images.githubusercontent.com/46095809/77264774-51971880-6c58-11ea-854e-a432342d1075.png" />
);
