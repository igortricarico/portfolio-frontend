import JavascriptIcon from '@mui/icons-material/Javascript'
import CodeIcon from '@mui/icons-material/Code'
import ApiIcon from '@mui/icons-material/Api'
import StorageIcon from '@mui/icons-material/Storage'
import React from 'react'

export const TYPOGRAPHY_CONFIGURATION = {
  h1: {
    fontSize: '6rem',
    '@media (max-width:1536px)': { fontSize: '4rem' },
    '@media (max-width:1200px)': { fontSize: '3rem' },
    '@media (max-width:900px)': { fontSize: '2rem' },
  },
  h2: {
    fontSize: '4.5rem', // 75% do tamanho do h1
    '@media (max-width:1536px)': { fontSize: '3rem' },
    '@media (max-width:1200px)': { fontSize: '2.25rem' },
    '@media (max-width:900px)': { fontSize: '1.5rem' },
  },
  h3: {
    fontSize: '3.75rem', // 62.5% do tamanho do h1
    '@media (max-width:1536px)': { fontSize: '2.5rem' },
    '@media (max-width:1200px)': { fontSize: '1.875rem' },
    '@media (max-width:900px)': { fontSize: '1.25rem' },
  },
  h4: {
    fontSize: '3rem', // 50% do tamanho do h1
    '@media (max-width:1536px)': { fontSize: '2rem' },
    '@media (max-width:1200px)': { fontSize: '1.5rem' },
    '@media (max-width:900px)': { fontSize: '1rem' },
  },
  h5: {
    fontSize: '2.25rem', // 37.5% do tamanho do h1
    '@media (max-width:1536px)': { fontSize: '1.5rem' },
    '@media (max-width:1200px)': { fontSize: '1.125rem' },
    '@media (max-width:900px)': { fontSize: '0.875rem' },
  },
  h6: {
    fontSize: '1.5rem', // 25% do tamanho do h1
    '@media (max-width:1536px)': { fontSize: '1rem' },
    '@media (max-width:1200px)': { fontSize: '0.75rem' },
    '@media (max-width:900px)': { fontSize: '0.625rem' },
  },
}

export const NAV_BAR_ITEMS = []

export const HOME_LIST_ITEMS = [
  {
    label:
      'Frontend desenvolvido em JavaScript, utilizando o framework React. Hospedagem realizada através do Vercel',
    icon: (props) => <JavascriptIcon {...props} />,
  },
  {
    label:
      'Backend desenvolvido em Python, utilizando o framework (framework aqui). Hospedagem realizada através do Render',
    icon: (props) => <CodeIcon {...props} />,
  },
  {
    label: 'Comunicação realizada via API RESTful',
    icon: (props) => <ApiIcon {...props} />,
  },
  {
    label: 'Banco de dados PostgreSQL.',
    icon: (props) => <StorageIcon {...props} />,
  },
]
