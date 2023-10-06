import { Theme } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

export const useLineChartStyles = makeStyles((theme: Theme) => ({
    root: {},
    chartWrapper: {
        borderRadius: '12.759px 12.759px 0px 0px',
        background: 'var(--chun-li-blue-100, #E8EEFB)',
        padding: '4px',
    },
    yAxisLabel: {
        width: '16px',
        transform: 'rotate(270deg)',
        position: 'relative',
        left: '92px',
        top: '24px',
        fontSize: '16px',
        color: '#1E1E1E',
        fontWeight: 500,
    },
    hr: {
        display: 'block',
        height: '1px',
        border: 0,
        borderTop: '1px solid #1463FF',
        margin: '1em 0',
        padding: 0,
    },
    heading: {
        '&.MuiTypography-body1': {
            color: 'var(--blue, #1463FF)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: '10px', /* 111.111% */
            margin: '7px, 12px !important',
            padding: '7px, 12px !important',
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
        justifyContent: 'center',
        width: '100%',
        '& a': {
            backgroundColor: '#000',
            color: '#fff',
            textDecoration: 'none',
        },
        '& button': {
            marginTop: '24px',
            backgroundColor: '#000',
            color: '#fff',
            width: '109px',
            height: '56px',
            '&:focus': {
                backgroundColor: '#000',
                color: '#fff',
            },
            '&:hover': {
                backgroundColor: '#000',
                color: '#fff',
            },
        },
    },
}));