import {
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import React from 'react'
import { HOME_LIST_ITEMS } from '../../utills/Constants'

const Home = () => {
  const listItemVariant = 'h5'
  const iconSize = 50

  return (
    <Paper
      elevation={4}
      sx={{
        width: '100%',
        margin: '1rem',
        padding: '1rem',
        borderRadius: '20px',
      }}
    >
      <Grid2
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
        spacing={3}
      >
        <Grid2>
          <Typography variant="h1">Olá, mundo.</Typography>
        </Grid2>
        <Grid2>
          <Typography variant="h4">
            Meu nome é Igor, sou desenvolvedor desde 2020 e o objetivo deste
            projeto é colocar em prática todos os meus conhecimentos adquiridos
            ao longo dos anos. Abaixo, deixo uma lista com alguns detalhes
            técnicos.
          </Typography>
        </Grid2>
        <Grid2 size="grow" sx={{ display: 'flex', alignItems: 'center' }}>
          <List>
            {HOME_LIST_ITEMS.map(({ label, icon: Icon }, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Icon sx={{ fontSize: iconSize }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={listItemVariant}>{label}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid2>
      </Grid2>
    </Paper>
  )
}

export default Home
