import { makeStyles } from "@mui/styles";

export const useHomePageStyles = makeStyles((theme) => ({
    root:{},
    gridItem: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
    pdfPreviewButton: {
        marginLeft: '16px !important',
        height: '44px',
        alignContent: 'center',
    },
}));