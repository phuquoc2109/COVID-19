import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getMapDataByCountryId } from '../../api/Api';
import HighMaps from '../Charts/HighMaps';
import LineChart from '../Charts/LineChart'
import '../styles/style.css';

export default function Summary({report, countryId}) {
  const [mapData, setMapData] = useState({});
  
  useEffect(() => {
    if (countryId) {
      getMapDataByCountryId(countryId)
        .then((res) => {
          setMapData(res);
        })
        .catch((err) => console.log({ err }));
    }
  }, [countryId]);

  return (
    <>
       <Grid container spacing={3} className="chart">
          <Grid item sm={8} xs={12}>
            <LineChart data={report} />
          </Grid>
          <Grid item sm={4} xs={12}>
            <div className="nation">Quốc Gia: {mapData.title}</div>
            <HighMaps mapData={mapData} />
          </Grid>
       </Grid>
       
    </>
  )
}
