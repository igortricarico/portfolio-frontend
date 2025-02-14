import {
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

import { HOME_LIST_ICONS } from '../../utills/Constants'
import PaperBackground from '../Shared/PaperBackground/PaperBackground'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation(['Home'])
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
          <Typography variant="h1">{t('Title')}</Typography>
        </Grid2>
        <Grid2>
          <Typography variant="h4">{t('SubTitle')}</Typography>
        </Grid2>
        <Grid2 size="grow" sx={{ display: 'flex', alignItems: 'center' }}>
          <List>
            {HOME_LIST_ICONS.map(({ icon: Icon }, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <Icon sx={{ fontSize: iconSize }} />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant={listItemVariant}>
                    {t(`List.${index}`)}
                  </Typography>
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
