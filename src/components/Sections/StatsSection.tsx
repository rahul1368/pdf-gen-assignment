import styled from "@emotion/styled";
import React from "react";
import { breakPoints } from "../constant";
import Img2 from "../../assets/img/img-2.png";
import bannerMobileTeam from "../../assets/img/banner-mobile-team.png";

function StatsSection() {
  const content = [
    "Share your digital challenges; let’s decode them for you.",
    "Our experts will conduct an in-depth analysis ensuring a precise diagnosis.",
    "The Digital Doctors will craft and present a unique and customised strategy for you."
  ];
  return (
    <StyledSection>
      <StyledContaner>
        <StyledHeading>
          3 Simple <span>Steps</span>
        </StyledHeading>
        <TaglineContainer>
          <div>FREE</div>
          <div className="tag-container"></div>
          <div className="text">CONSULTATION</div>
          <CardContainer>
            {content.map((text, index) => (
              <Card key={index}>
                <CardHeader>{index + 1}</CardHeader>
                <CardBody>{text}</CardBody>
              </Card>
            ))}
          </CardContainer>
        </TaglineContainer>
      </StyledContaner>
    </StyledSection>
  );
}

export default StatsSection;

const CardHeader = styled.div`
  background: #6e0d88 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  width: 89px;
  height: 89px;
  display: flex;
  color: #fdec07;
  border-radius: 50%;
  font: normal normal bold 43px/64px Poppins;
  letter-spacing: 0px;
  color: #fdec07;
  opacity: 1;
  display: flex;
  justify-content: center;
  margin: -125px auto 39px;
  line-height: 89px;
`;

const CardBody = styled.div`
  text-align: center;
  font-size: 22px;
  font-family: Poppins;
  font-weigth: medium;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  line-height: 24px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 81px;
`;

const Card = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 12px #00000017;
  border: 2px dashed #6e0d88;
  border-radius: 10px;
  opacity: 0.72;
  padding: 82px 25px 43px;
  position: relative;
`;

const TaglineContainer = styled.div`
  margin-top: 34px;
  > div {
    text-align: center;
    font: normal normal 800 45px/55px Montserrat;
    letter-spacing: 0px;
    color: #6e0d88;
    opacity: 1;
  }
  .tag-container {
    width: 100%;
    height: 45px;
    margin: auto;
    background-size: contain !important;
    background: transparent url(${Img2}) 0% 0% no-repeat padding-box;
    opacity: 1;
    background-position: center;
  }
  .text {
    text-align: center;
    font: normal normal 600 25px Poppins;
    letter-spacing: 0px;
    color: #e1003e;
    opacity: 1;
    margin-bottom: 63px;
  }
`;

const StyledHeading = styled.div`
  text-align: center;
  font: normal normal bold 26px Poppins;
  letter-spacing: 0px;
  color: #6e0d88;
  padding-top: 61px;
  > span {
    color: #e1003e;
  }
`;

const StyledContaner = styled.div`
  padding: 0 16px;
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
    padding-bottom: 125px;
    background: #fff6f8 0% 0% no-repeat padding-box;
  }
`;
