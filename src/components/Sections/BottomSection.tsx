import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../constant";
import Icon1 from "../../assets/img/icon-1.png";
import Icon2 from "../../assets/img/icon-2.png";
import Icon3 from "../../assets/img/icon-3.png";

function BottomSection() {
  return (
    <StyledSection>
      <StyledContaner>
        <StyledContentBlock>
          Our Customised Strategies{" "}
          <span>are Trusted and admired world-wide.</span>
        </StyledContentBlock>
        <IconContainer>
          <img src={Icon1} />
          <img src={Icon2} />
          <img src={Icon3} />
        </IconContainer>
      </StyledContaner>
    </StyledSection>
  );
}

export default BottomSection;

const IconContainer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  column-gap: 12px;
  > img {
    height: 24px;
    max-width: 140px;
  }
`;

const StyledContentBlock = styled.div`
  text-align: center;
  font: normal normal bold 28px/39px Poppins;
  letter-spacing: 0px;
  max-width: 320px;
  margin: auto;
  color: #e1003e;
  > span {
    color: #6e0d88;
  }
`;

const StyledContaner = styled.div`
  padding: 0 16px;
  margin: auto;
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
    opacity: 1;
    padding-top: 42px;
  }
`;
