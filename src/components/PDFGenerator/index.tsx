import React from 'react';
import { Document, Page, Image, StyleSheet, Text, View } from '@react-pdf/renderer';

function formatDate(inputDate) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const date = new Date(inputDate);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month} ${day}, ${year}`;
  }

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  lineContainer: {height: '2px', width: '540px', backgroundColor: '#005DFF'},
  header: { marginBottom: '8px', display: 'flex', flexDirection: 'row', columnGap: 8},
  headerWrapper: {fontSize: '10px', fontWeight: 500, marginTop: 'auto', marginBottom: 'auto'},
  headerBody: {marginTop: 'auto', marginBottom: 'auto'},
  heroContainer: {width: '100%', padding: '16px', marginLeft: 'auto', marginRight: 'auto'},
  section: { color: 'white', textAlign: 'center', margin: 0 },
  innerView: { backgroundColor: 'red' },
  container: {backgroundColor: '#F2F4F5', margin: 0, borderRadius: '40px', width: '570px', marginLeft: 'auto', marginRight: 'auto'},
  topWrapper: {backgroundColor: '#E8EEFB', padding: '0 16px'},
  bottomWrapper: { display: 'flex', justifyContent: 'space-between', columnGap: 4, flexDirection: 'row', backgroundColor: '#F2F4F5', padding: '12px'},
  headerText: { color: '#1463FF', fontSize: '9px', fontWeight: 500, padding: '7px 12px'},
  leftContainer: { color: '#1E1E1E', margin: 'auto'},
  graphContainer: {backgroundColor: '#fff', width: 563, height: 175, borderRadius: 12, padding: 8, marginRight: '21px'},
  innerText: {fontSize: '9px', fontWeight: 500, transform: 'rotate(270deg)'}
});

const PDFGenerator = ({ chartInstance }: {chartInstance: any}) => {
  // Convert the chart image to a data URL
  const chartDataURL = chartInstance?.toBase64Image();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.heroContainer}>
            <View style={styles.header}>
                <View style={styles.headerWrapper}>
                    <Text>Crime</Text>
                </View>
                <View style={styles.headerBody}>
                    <Text style={styles.lineContainer}>Line</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.topWrapper}>
                    <Text style={styles.headerText}>Burglary</Text>
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={styles.leftContainer}>
                        <Text style={styles.innerText}>Arrests</Text>
                    </View>
                    <View style={styles.graphContainer}><Image src={chartDataURL} /></View>
                </View>
            </View>
            <View style={{height: '2px', width: '100%', backgroundColor: '#005DFF', marginTop: '8px', marginBottom: '8px'}}></View>
            <View style={{fontSize: '9px', fontWeight: 900, display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{color: '#1463FF'}}>Report Genereted on {formatDate(new Date())}</Text>
                <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>                
                    <Text style={{color: '#090E24'}}>RealAssist Property Report | Page 1 </Text><Text style={{color: '#626E99'}}> of 1</Text>
                </View>
            </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
