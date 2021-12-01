import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import React from 'react'

export default function PokemonCard(props) {

    const {pokemon, image } = props
    const {id,name} = pokemon

    return (
        <Grid item xs={12} sm={2}>
            <Card>
                <CardMedia image={image}></CardMedia>
                <CardContent>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
