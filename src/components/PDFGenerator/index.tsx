import React from 'react';
import { Document, Page, Image, StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  image: {
    width: 500, // Adjust the width as needed
    height: 300, // Adjust the height as needed
  },
  section: { color: 'white', textAlign: 'center', margin: 0 },
});

const PDFGenerator = ({ chartInstance }: {chartInstance: any}) => {
  // Convert the chart image to a data URL
  const chartDataURL = chartInstance?.toBase64Image();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ color: 'white', textAlign: 'center', margin: 30 }}>
            <Text>Burglary</Text>
            <Image src={chartDataURL} style={styles.image} />
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
