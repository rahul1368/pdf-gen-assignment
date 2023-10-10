import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../constant";
import Img4 from "../../assets/img/img-4.png";
import Img5 from "../../assets/img/img-5.png";
import Img6 from "../../assets/img/img-6.png";

function SupportSection() {
  return (
    <StyledSection>
      <StyledContaner>
        <StyledContentBlock></StyledContentBlock>
        <StyledButton>
          <Button>BOOK YOUR CALL TO WELLNESS</Button>
        </StyledButton>
        <StyledBannerBlock></StyledBannerBlock>
      </StyledContaner>
    </StyledSection>
  );
}

export default SupportSection;

const StyledButton = styled.div`
  width: fit-content;
  margin: 30px auto 47px;
`;
const Button = styled.button`
  font: normal normal bold 21px/31px Poppins;
  letter-spacing: 0px;
  color: #fdec2e;
  opacity: 1;
  background: #e1003e 0% 0% no-repeat padding-box;
  border-radius: 100px;
  padding: 12px 24px;
  margin: auto;
  border: none;
`;
const StyledBannerBlock = styled.div`
  background: transparent url(${Img5}) 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
  height: 314px;
  background-size: cover;
  margin: auto;
`;
const HeadingMobile = styled.div``;
const StyledContentBlock = styled.div`
  background: transparent url(${Img6}) 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 321px;
  height: 155px;
  background-size: cover;
  margin: auto;
`;

const StyledContaner = styled.div`
  padding: 0 8px;
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
    background: transparent url(${Img4}) 0% 0% no-repeat padding-box;
    opacity: 1;
    padding-top: 106px;
  }
`;
