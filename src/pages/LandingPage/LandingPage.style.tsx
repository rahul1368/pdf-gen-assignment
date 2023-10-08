import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import img from "../../assets/img/Rectangle 885.png";
import groupImg from "../../assets/img/Group 20325.png";

export const useLandingPageStyles = makeStyles((theme: Theme) => ({
    wrapperDiv: {
        width: '1932px',
        height: '674px',
        background: `transparent url(${groupImg}) 0% 0% no-repeat padding-box`,
        opacity: 1,
    },
    payOnePersonDiv: {
        display: 'flex',
        position: 'absolute',
        top: '273px',
        left: '181px',
        width: '484px',
        height: '110px',
        textAlign: 'left',
        font: 'normal normal bold 39px/55px Poppins',
        letterSpacing: '0px',
        opacity: 1,
    },
    hireBestInClassDiv: {
        top: '407px',
        left: '178px',
        width: '582px',
        height: '68px',
        textAlign: 'left',
        font: 'normal normal 600 24px/35px Poppins',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: 1,
    },
    navHeaderDiv: {
        width: '1920px',
        height: '73px',
        background: '#56006C 0% 0% no-repeat padding-box',
        opacity: 1,
    },
    navItemsDiv: {
        width: '1920px',
        height: '121px',
        background: `transparent url(${img}) 0% 0% no-repeat padding-box`,
        opacity: 1,
    },
}));