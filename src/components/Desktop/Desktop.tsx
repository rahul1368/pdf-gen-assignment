import * as React from 'react';
import styled from "@emotion/styled";
import imgLinkedIn from "../../assets/img/social-icons/linkedin/linkedin@2x.png";
import imgFacebookIn from "../../assets/img/social-icons/facebook/Path 4383@2x.png";
import imgInstagram from "../../assets/img/social-icons/instagram/Group 1421@2x.png";
import imgPininterest from "../../assets/img/social-icons/pinterest/pinterest@2x.png";
import imgTwitter from "../../assets/img/social-icons/twitter/twitter@2x.png";
import imgCarrerWithUs from "../../assets/img/social-icons/carrer-with-us/carrer-with-us@2x.png";
import imgCarrerWithUsIncon from "../../assets/img/social-icons/carrer-with-us-icon.svg";
import imgNavbarBackground from "../../assets/img/bg-navbar@2x.png";
import imgSecondaryHeader from "../../assets/img/secondary-header.png";
import imgLeftIcon from "../../assets/img/left-icon@2x.png";
import imgMainSectionLeftIcon from "../../assets/img/main-section-left@2x.png";
import imgBgFormSection from "../../assets/img/Rectangle 8953@2x.png";
import imgHeaderFormSection from "../../assets/img/form-header-section@2x.png";
import imgCenterSectionBackground from "../../assets/img/center-section-background@2x.png";
import imgCenterSectionLeftIcon from "../../assets/img/center-section-left-icon@2x.png";
import imgCenterSectionRightIcon from "../../assets/img/center-section-right-image.png";
import imgStepsSection from "../../assets/img/Path 4837@2x.png";

export const FormComponent = () => {
    return(
        <div>
            <FormControl>
                <Input placeholder='Your Full Name' />
                <Input placeholder='Designation' />
            </FormControl>
            <FormControl>
                <Input placeholder='Brand / Company Name' />
                <Input placeholder='Website URL' />
            </FormControl>
            <FormControl>
                <Input placeholder='Company Size' />
                <Input placeholder='Enquiry for?' />
            </FormControl>
            <FormControl>
                <Input placeholder='Email address' />
                <Select placeholder='+91' />
                <Input placeholder='Phone number' />
            </FormControl>
            <FormControl>
                <Input placeholder='Select Budget' />
                <Input placeholder='Where did you hear about us?' />
            </FormControl>
            <FormControl>
                <Textarea placeholder='Please specify your requirements so that we will be able to understand what you require and what is the short-term and long-term goal you are hoping to achieve with this service.' />
            </FormControl>
            <FormControl>
                By clicking the button below, you consent for Moris Digital and its partners to use automated technology, including pre-recorded messages, cell phones, texts, and emails to contact you at the number and email address provided. This includes if the number is currently on any Do Not Call Lists. This consent is not required to make a purchase Privacy Policy.
            </FormControl>
        </div>
    );
}

const Select = styled.select`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 0.30000001192092896px solid #BEC5FF;
    border-radius: 5px;
    opacity: 1;
`;
const FormControl = styled.div`
    display: flex;
    margin: 16px 16px 8px;
`;
const Input = styled.input`
    width: 100%;
    height: 23px;
    padding: 12px 0px 11px 15px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 0.30000001192092896px solid #BEC5FF;
    border-radius: 5px;
    opacity: 1;
    text-align: left;
    font: normal normal normal 16px/25px Poppins;
    letter-spacing: -0.16px;
    color: #707070;
    opacity: 1;
    margin-left: 8px;
`;
const Textarea = styled.textarea`
    width: 658px;
    height: 177px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 0.30000001192092896px solid #BEC5FF;
    border-radius: 5px;
    opacity: 1;
`;
export function Desktop(){
    return(
        <>
            <NavbarWrapper>
                <StyledNavBar>
                    <SocialIconsSection>
                        <SocialIcon style={{ backgroundImage: LinkedInIcon }} />
                        <SocialIcon style={{ backgroundImage: FacebookIcon }} />
                        <SocialIcon style={{ backgroundImage: TwitterIcon }} />
                        <SocialIcon style={{ backgroundImage: InstagramIcon }} />
                        <SocialIcon style={{ backgroundImage: PininterestIcon }} />
                        <PipeSymbol>|</PipeSymbol>
                        <DateComponent>MON , 28th Nov 2022</DateComponent>
                        <TimeComponent>04 : 31 pm</TimeComponent>
                    </SocialIconsSection>
                    <RightSection>
                        <WrapperDiv>
                            <CarrerWithUs>
                                <CarrerWithUsIcon src={imgCarrerWithUsIncon} />
                                Carrer With Us
                            </CarrerWithUs>
                        </WrapperDiv>
                    </RightSection>
                </StyledNavBar>
                <SecondaryHeader>
                    <LeftIcon />
                    <NavbarItemsList>
                        <NavBarListItem>Solutions</NavBarListItem>
                        <NavBarListItem>Who We Serve</NavBarListItem>
                        <NavBarListItem>Who We Are</NavBarListItem>
                        <NavBarListItem>Self Help</NavBarListItem>
                        <NavBarListItem>Partner Program</NavBarListItem>
                    </NavbarItemsList>
                </SecondaryHeader>
                <NavbarContent>
                    <FirstLineText>
                        Pay One Person Salary,
                    </FirstLineText>
                    <SecondLineText>
                        Reap the Results of Five!
                    </SecondLineText>
                    <ThirdLineText>
                        Hire Best-in-Class Digital Doctors as Your Team & Skyrocket Your Leads
                    </ThirdLineText>
                </NavbarContent>
            </NavbarWrapper>

            <MainSection>
                <LeftSection />
                <FormSection>
                    <FormHeader>
                        <div>ddd</div>
                    </FormHeader>
                    <FormComponent />
                </FormSection>
            </MainSection>
            <CenterSection>
                <CLeftImage />
                <CRightImage />
            </CenterSection>
            <StepsSection>
                <h2>
                    3 Simple&nbsp;
                    <span>Steps</span>
                </h2>
            </StepsSection>
        </>
    );
}

const StepsSection = styled.div`
    width: 1920px;
    height: 845px;
    background: transparent url(${imgStepsSection}) 0% 0% no-repeat padding-box;
    background-size: contain;
    opacity: 1;
    > h2 {
        width: 373px;
        height: 71px;
        text-align: center;
        font: normal normal bold 50px/76px Poppins;
        letter-spacing: 0px;
        opacity: 1;
    }
`;
const CRightImage = styled.div`
    max-width: 645px;
    width: 500px;
    height: 406px;
    background: transparent url(${imgCenterSectionRightIcon}) 0% 0% no-repeat padding-box;
    background-size: contain;
    opacity: 1;
    display: flex;
`;
const CLeftImage = styled.div`
    max-width: 832px;
    width: 800px;
    height: 216px;
    background: transparent url(${imgCenterSectionLeftIcon}) 0% 0% no-repeat padding-box;
    background-size: contain;
    opacity: 1;
    display: flex;
`;
const CenterSection = styled.div`
    width: 1920px;
    height: 362px;
    background: transparent url(${imgCenterSectionBackground}) 0% 0% no-repeat padding-box;
    background-size: contain;
    opacity: 1;
    display: flex;
`;
const FormHeader = styled.div`
    width: 770px;
    height: 196px;
    background: transparent url(${imgHeaderFormSection}) 0% 0% no-repeat padding-box;
    background-size: contain;
    mix-blend-mode: normal;
    opacity: 0.04;
`;
const FormSection = styled.form`
    width: 785px;
    height: 1005px;
    background: transparent url(${imgBgFormSection}) 0% 0% no-repeat padding-box;
    background-size: contain;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 20px;
    opacity: 1;
`;
const LeftSection = styled.div`
    display: flex;
    width: 773px;
    height: 739px;
    background: transparent url(${imgMainSectionLeftIcon}) 0% 0% no-repeat padding-box;
    background-size: contain;
    opacity: 1;
`;
const MainSection = styled.div`
    display: flex;
`;

const NavBarListItem = styled.li`
    color: #fff;
    display: flex;
    margin-right: 28px;
`;
const NavbarItemsList = styled.ul`
    display: flex;
    justify-content: flex-end;
`;
const LeftIcon = styled.div`
    width: 96px;
    height: 55px;
    background: transparent url(${imgLeftIcon}) 0% 0% no-repeat padding-box;
    background-size: contain;
    background-size: contain;
    opacity: 1;
`;
const SecondaryHeader = styled.div`
    display: flex;
    width: 1920px;
    height: 121px;
    background: transparent url(${imgSecondaryHeader}) 0% 0% no-repeat padding-box;
    background-size: contain;
    opacity: 1;
`;
const ThirdLineText = styled.div`
    color: #FFF;
    margin-top: 16px;
    text-align: left;
    font: normal normal 600 24px/35px Poppins;
    letter-spacing: 0px;
`;
const FirstLineText = styled.div`
    text-align: left;
    font: normal normal bold 39px/55px Poppins;
    letter-spacing: 0px;
    color: #FDEC07;
`;
const SecondLineText = styled.div`
    width: 506px;
    height: 50px;
    background: #FDEC07 0% 0% no-repeat padding-box;
    border-radius: 6px;
    opacity: 1;
    color: #E1003E;
    text-align: left;
    font: normal normal bold 39px/55px Poppins;
    letter-spacing: 0px;
`;
const NavbarContent = styled.div`
    width: 484px;
    height: 110px;
    text-align: left;
    font: normal normal bold 39px/55px Poppins;
    letter-spacing: 0px;
    opacity: 1;
    margin-left: 181px;
`;
const NavbarWrapper = styled.div`
    width: 1932px;
    height: 674px;
    background: transparent url(${imgNavbarBackground}) 0% 0% no-repeat padding-box;
    background-size: contain;
    opacity: 1;
`;
const WrapperDiv = styled.div`
    width: 90%;
    background-color: pink !important;
    display: flex;
    align-items: center;
`;
const RightSection = styled.div`
    background-color: yellow !important;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const CarrerWithUsIcon = styled.img`
    width: 23px;
    height: 23px;
    justify-content: flex-start;
    align-content: center;
    margin: 8px;
`;
const CarrerWithUs = styled.div`
    background-color: red !important;
    width: 171px;
    height: 38px;
    background: transparent url(${imgCarrerWithUs}) 0% 0% no-repeat padding-box;
    background-size: contain;
    border: 0.5px solid #FFFFFF;
    opacity: 1;
    display: flex;
    align-content: center;
    color: #fff;
    flex-wrap: wrap;
    justify-content: flex-end;
`;
const DateComponent = styled.div`
    color: #fff;
    margin-right: 16px;
;`;
const TimeComponent = styled.div`
    color: #fff;
;`;
const PipeSymbol = styled.span`
    margin: 0 10px; /* Adjust the margin as needed */
    color: #fff;
`;
const FacebookIcon = `url(${imgFacebookIn})`;
const TwitterIcon = `url(${imgTwitter})`;
const InstagramIcon = `url(${imgInstagram})`;
const LinkedInIcon = `url(${imgLinkedIn})`;
const PininterestIcon = `url(${imgPininterest})`;

const SocialIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    /* Optional: Add hover effect, e.g., change color */
    color: #007bff;
  }
`;

const SocialIconsSection = styled.div`
    display: flex;
    align-items: center;
    margin-left: 32px;
`;
const StyledNavBar = styled.div`
    width: 1920px;
    height: 73px;
    background: #56006C 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    align-items: center;
`;