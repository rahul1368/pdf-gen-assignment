import * as React from 'react'; 
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
import printer from '../../assets/printer.svg';
export type Ref = HTMLInputElement;

interface IProps {
    chartData: any;
    isShowPDFPreview: boolean;
};
const RenderPDFPreview = (props: IProps) => {
    const chartRef = useRef<ChartJS>(null);
    const classes = useLineChartStyles();
    return(
        <>
            <Box className={classes.chartWrapper}>
                <Typography className={classes.heading}>
                    <span>
                        Burglary
                    </span>
                </Typography>
                <Box className={classes.chart}>
                    <h2 className={classes.yAxisLabel}>Arrests</h2>
                    <Chart
                        ref={chartRef}
                        type='line'
                        data={props.chartData}
                        options={{
                            layout: {
                                padding: 24,
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        }}
                    />
                </Box>
            </Box>
            { (props.isShowPDFPreview) &&
                <Box display="flex">
                    <PDFViewer>
                        <PDFGenerator chartInstance={chartRef?.current} />
                    </PDFViewer>
                </Box>
            }
            <Grid item className={classes.generatePdf}>
                <PDFDownloadLink
                    document={<PDFGenerator chartInstance={chartRef?.current} />}
                    fileName="burglary-crimes-pdf-file.pdf"
                >
                    <Button type='button' className={classes.printBtn}>
                        <img className={classes.printerIcon} width={24} height={24} src={printer} alt="logo" />
                        <span>Print</span>
                    </Button>
                </PDFDownloadLink>
                
            </Grid>
        </>
    );
};
export const LineChart = ({ chartData, isShowPDFPreview }: {chartData: any, isShowPDFPreview: boolean}) => {
    const classes = useLineChartStyles();
    return (
        <Grid container className={classes.chartContainer}>
            
            <RenderPDFPreview
                chartData={chartData}
                isShowPDFPreview={isShowPDFPreview}
            />
        </Grid>
    );
}

