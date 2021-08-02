import {  Grid } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard';

export default function Highlight({report}) {

    const data = report && report.length ? report[report.length - 1] : [];
    const summary =[
      {
        title: 'Số ca nhiễm bệnh',
        count: data.Confirmed,
        type: 'confirmed'
      },
      {
        title: 'Số ca khỏi bệnh',
        count: data.Recovered,
        type: 'recovered'
      },
      {
        title: 'Số ca tử vong',
        count: data.Deaths,
        type: 'death'
      }
      
    ]


    return (
      <>
        <Grid container spacing={<i className="baseline-3d_rotation"></i>}>
          {summary.map(item => (
            <Grid className="statistical" key={item.type} item sm={4} xs={12} >
            <HighlightCard title={item.title} count={item.count} type={item.type} />
            </Grid>
          ))}
        </Grid> 
      </>
    )
}
