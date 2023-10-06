import * as React from 'react';
import { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { LineChart } from '../../components/LineChart';
import { Box, Button, Grid } from '@mui/material';
import { useHomePageStyles } from './HomePage.style';

Chart.register(CategoryScale);
const FETCH_CRIME_DATA_API_URL = 'https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv';

interface IBurglaryCrimesState {
  year: number;
  burglaryCrimesCount: number;
};
const fetchCrimesData = async () => {
  const response = await fetch(FETCH_CRIME_DATA_API_URL);
  const data = await response.json();
  return data;
}
const getChartDataState = (dataV: any[]) => {
  return {
    labels: dataV?.map((data : IBurglaryCrimesState) => data.year) || [], 
    datasets: [
      {
        label: "",
        data: dataV?.map((data : IBurglaryCrimesState) => data.burglaryCrimesCount) || [],
        backgroundColor: dataV?.map((o) => ("#1463FF")),
        borderColor: "#1463FF",
        borderWidth: 2,
      }
    ]
  };
}

function HomePage() {
    const classes = useHomePageStyles();
    const [burglaryCrimesData, setBurglaryCrimesData] = useState<IBurglaryCrimesState[]>([]);
    const [isShowPDFPreview, setIsShowPDFPreview] = useState<boolean>(false);
    const [chartData, setChartData] = useState({
        labels: burglaryCrimesData?.map((data) => data.year) || [], 
        datasets: [
            {
                label: "",
                data: burglaryCrimesData?.map((data) => data.burglaryCrimesCount) || [],
                backgroundColor: [],
                borderColor: "#1463FF",
                borderWidth: 2,
            }
        ],
    });

    useEffect(() => {
        const fetchCrimeDataInvoker = async () => {
        const { data } =  await fetchCrimesData();
        const burglaryData = data?.map((obj: { data_year: any; Burglary: any; }) => ({
            year: obj.data_year,
            burglaryCrimesCount: obj.Burglary,
        }));
        setBurglaryCrimesData(burglaryData);
        setChartData(getChartDataState(burglaryData));
        };
        fetchCrimeDataInvoker();
    }, []);


    const handlePDFPreview = () => {
        setIsShowPDFPreview(state => (!state));
    }
    return (
        <Grid container className="homePage">
            <Grid item className={classes.gridItem}>
                <Box display='flex' margin='16px' alignItems='center' flexDirection='row'>
                    <h1>PDF Generator</h1>
                    <Button
                        className={classes.pdfPreviewButton}
                        type='button'
                        variant='outlined'
                        color='success'
                        onClick={handlePDFPreview}
                    >
                        {!isShowPDFPreview ? 'Show PDF Preview' : 'Hide PDF Preview'}
                    </Button>

                </Box>
            </Grid>
            <Grid item container className={classes.gridItem}>
                <LineChart isShowPDFPreview={isShowPDFPreview} chartData={chartData} />
            </Grid>
        </Grid>
    );
}

export default HomePage;
