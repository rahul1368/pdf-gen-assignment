import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../constant";
import Img3 from "../../assets/img/img-3.png";

function GroupSection() {
  return (
    <StyledSection>
      <StyledContaner />
    </StyledSection>
  );
}

export default GroupSection;

const StyledContaner = styled.div`
  margin: 38px 0;
  background: transparent url(${Img3}) 0% 0% no-repeat padding-box;
  height: 370px;
  width: 100%;
  background-size: cover;
`;
const StyledSection = styled.section`
  @media (min-width: ${breakPoints.desktop.min}px) {
    // desktop
    background-color: green;
  }
  @media (max-width: ${breakPoints.mobile.max}px) {
    // mobile
    width: 100%;
    opacity: 1;
    background: #fff;
  }
`;
