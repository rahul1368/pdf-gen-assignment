import { Theme } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

export const useLineChartStyles = makeStyles((theme: Theme) => ({
    root: {},
    printerIcon: {
        marginRight: '8px',
    },
    chartWrapper: {
        borderRadius: '12.759px 12.759px 0px 0px',
        background: 'var(--chun-li-blue-100, #F2F4F5)',
    },
    yAxisLabel: {
        width: '16px',
        transform: 'rotate(270deg)',
        position: 'relative',
        left: '94px',
        top: '24px',
        fontSize: '16px',
        color: '#1E1E1E',
        fontWeight: 500,
    },
    heading: {
        '&.MuiTypography-body1': {
            '& span': {
                padding: '12px',
            },
            color: 'var(--blue, #1463FF)',
            display: 'flex',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '10px', /* 111.111% */
            width: '100%',
            height: '36px',
            borderRadius: '12.759px 12.759px 0px 0px',
            background: '#E8EEFB',

        },
    },
    chart: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '12px 22px',
        width: '520px',
        borderRadius: '12.344px',
        background: 'var(--white, #FFF)',
        boxShadow: '0px 7.71513px 37.03264px 0px rgba(0, 0, 0, 0.04)',
    },
    chartContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    generatePdf: {
        display: 'flex',
        marginTop: '24px !important',
        justifyContent: 'center',
        width: '100%',
        '& a': {
            width: '109px',
            padding: '10px 4px',
            borderRadius: '16px',
            background: 'var(--main-void-600, #090E24)',
            /* button-shadow */
            boxShadow: '0px 10px 48px 0px rgba(0, 0, 0, 0.06)',
            color: '#fff',
            textDecoration: 'none',
            '&:visited': {
                backgroundColor: '#000',
                color: '#fff',
            },
            '&:hover': {
                backgroundColor: '#000',
                color: '#fff',
            },
            '&:active': {
                backgroundColor: '#000',
                color: '#fff',
            },
        },
    },
    printBtn: {
        '& span': {
            color: 'var(--white, #FFF)',
            fontFamily: 'Beausite Classic',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '16px', /* 114.286% */
        },
        marginTop: '24px', 
        color: '#fff',
        '&:focus': {
            backgroundColor: '#000',
            color: '#fff',
        },
        '&:hover': {
            backgroundColor: '#000',
            color: '#fff',
        },
    },
}));