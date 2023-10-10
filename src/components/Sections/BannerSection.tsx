import styled from '@emotion/styled'
import React from 'react'
import { breakPoints } from '../constant'
import bannerMobileBg from '../../assets/img/banner-mobile-bg.png'
import bannerMobileTeam from '../../assets/img/banner-mobile-team.png'

function BannerSection() {
  return (
    <StyledSection>
        <StyledContaner>
            <StyledWrapper>
                <StyledContentBlock>
                    <HeadingMobile>Pay One Person Salary, <span>Reap the</span></HeadingMobile>
                    <TaglineMobile>Results of Five!</TaglineMobile>
                    <SubHeading>Hire Best-in-Class Digital Doctors as Your Team & Skyrocket Your Leads</SubHeading>
                </StyledContentBlock>
                <StyledBannerBlock></StyledBannerBlock>
            </StyledWrapper>
        </StyledContaner>
    </StyledSection>
  )
}

export default BannerSection

const SubHeading = styled.div`
    margin-top: 23px;
    font: normal normal 600 24px/35px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    text-align: center;
`;

const TaglineMobile = styled.div`
    max-width: 258px;
    text-align: left;
    font: normal normal bold 39px/55px Poppins;
    letter-spacing: 0px;
    color: #E1003E;
    background: #FDEC07 0% 0% no-repeat padding-box;
    border-radius: 6px;
    display: flex;
    text-align: center;
    padding: 0 16px;
    justify-content: center;
    margin: 16px auto 0;
`;

const HeadingMobile = styled.div`
    font: normal normal bold 39px/55px Poppins;
    letter-spacing: 0px;
    color: #FDEC07;
    text-align: center;
    > span {
        color: #fff;
    }
`;

const StyledBannerBlock = styled.div`
    background: transparent url(${bannerMobileTeam}) 0% 0% no-repeat padding-box;
    opacity: 1;
    width: 100%;
    height: 248px;
    background-size: cover;
`;
const StyledContentBlock = styled.div`
    @media (max-width: ${breakPoints.mobile.max}px) { // mobile
        max-width: 330px;
        margin: 0 auto;
    }
`;
const StyledWrapper = styled.div`
    padding-top: 67px;
`;
const StyledContaner = styled.div`

`;

const StyledSection = styled.section`
    @media (min-width: ${breakPoints.desktop.min}px) { // desktop
        background-color: green;
    }
    @media (max-width: ${breakPoints.mobile.max}px) { // mobile
        width: 100%;
        max-height: 624px;
        opacity: 1;
        height: 624px;
        background: transparent url(${bannerMobileBg}) 0% 0% no-repeat padding-box;
    }
`;