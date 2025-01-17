import {
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import { HOME_LIST_ITEMS } from '../../utills/Constants'
import PaperBackground from '../Shared/PaperBackground/PaperBackground'

const Home = () => {
  const listItemVariant = 'h5'
  const iconSize = 50

  return (
    <PaperBackground>
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
            O objetivo deste projeto é colocar em prática todos os meus
            conhecimentos adquiridos ao longo dos anos. Abaixo, deixo uma lista
            com alguns detalhes técnicos.
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
    </PaperBackground>
  )
}

export default Home
