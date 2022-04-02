import React, {memo} from 'react'
import { PropTypes } from 'prop-types'
import {Grid, Skeleton} from '../../../components'
import Card from './Card'
import {getByDisplayValue} from '@testing-library/react'

function Board({data}) {
    const {cases,todayDeaths,recovered,deaths,todayCases} = data
    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={cases} label="Total de casos" color="red"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={deaths} label="Total de mortes" color="black"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={recovered} label="Total de recuperados" color="lime"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={todayDeaths} label="Mortes Hoje" color="darkred"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={todayCases} label="Casos Hoje" color="darkred"></Card>
            </Grid>
           
        </Grid>
    )
}

export default Board
