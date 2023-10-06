import * as React from 'react'; 
import { forwardRef } from 'react';

import { Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
  } from 'chart.js';
import { useRef } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDFGenerator from '../PDFGenerator';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useLineChartStyles } from './LineChart.style';
// import { ReactComponent as ReactLogo } from '../../assets/location-share.svg';
export type Ref = HTMLInputElement;

interface IProps {
    chartData: any;
    isShowPDFPreview: boolean;
};

const hoc = (WrappedComp, props) => {
    //return a React component
    const NewComp = (newProps) => {
        const classes = useLineChartStyles();
        const mergedProps = { ...props, ...newProps };
      //jsx
      return (
        <Box className={classes.chartWrapper}>
            <Typography className={classes.heading}>
                Burglary
            </Typography>
            <hr className={classes.hr} />
            <Box className={classes.chart}>
                <h2 className={classes.yAxisLabel}>Arrests</h2>
                <WrappedComp { ...mergedProps } />
            </Box>
        </Box>
      )
    }
    return NewComp;
  } 
const XC = hoc(PDFGenerator, {});
const Test = (props: IProps) => {
    const chartRef = useRef<ChartJS>(null);
    const classes = useLineChartStyles();
    const [generatePdf, setGeneratePdf] = React.useState(false);
    return(
        <>
            <Box className={classes.chartWrapper}>
                <Typography className={classes.heading}>
                    Burglary
                </Typography>
                <hr className={classes.hr} />
                <Box className={classes.chart}>
                    <h2 className={classes.yAxisLabel}>Arrests</h2>
                    <Chart
                        ref={chartRef}
                        type='line'
                        data={props.chartData}
                    />
                </Box>
            </Box>
            { props.isShowPDFPreview &&
                <Box display="flex">
                    <PDFViewer>
                        <PDFGenerator chartInstance={chartRef?.current} />
                    </PDFViewer>
                </Box>
            }
            <Grid item className={classes.generatePdf}>
                <Button
                    type='button'
                    onClick={() => setGeneratePdf(true)}
                    disableFocusRipple
                    disableRipple
                    disableTouchRipple
                    variant='outlined'
                    color='primary'
                >
                    <PDFDownloadLink
                        document={<PDFGenerator chartInstance={chartRef?.current} />}
                        fileName="burglary-crimes-pdf-file.pdf" // Specify the desired file name
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? 'Print' : 'Print'
                        }
                    </PDFDownloadLink>
                </Button>
            </Grid>
        </>
    );
};
export const LineChart = ({ chartData, isShowPDFPreview }: {chartData: any, isShowPDFPreview: boolean}) => {
    const classes = useLineChartStyles();
    return (
        <Grid container className={classes.chartContainer}>
            
            <Test
                chartData={chartData}
                isShowPDFPreview={isShowPDFPreview}
            />
        </Grid>
    );
}

