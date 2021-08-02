import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    wrapper: (props) => {
        if(props.type === 'confirmed') return { borderLeft: '7px solid #c9302c'};
        if(props.type === 'recovered') return { borderLeft: '7px solid #28a745'};
        else return {borderLeft: '7px solid gray'};
    },
    title: {
        fontSize: 18, marginBottom: 5
    },
    count: {
        fontWeight: 'bold', fontSize: 18
    }
})

export default function HighlightCard({title, count, type}) {
    const styles = useStyle({type});

    return (
        <>
            <Card className="card-statistical">
              <CardContent className={styles.wrapper}>
                <Typography className={styles.title} component="p" variant="body2">{title}</Typography>
                <Typography className={styles.count} component="span" variant="body2">{count}</Typography>
              </CardContent>
            </Card>
        </>
    )
}
