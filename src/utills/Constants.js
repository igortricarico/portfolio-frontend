import ApiIcon from '@mui/icons-material/Api'
import ChecklistIcon from '@mui/icons-material/Checklist'
import CodeIcon from '@mui/icons-material/Code'
import HomeIcon from '@mui/icons-material/Home'
import JavascriptIcon from '@mui/icons-material/Javascript'
import React from 'react'
import StorageIcon from '@mui/icons-material/Storage'

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

export const NAV_BAR_ITEMS = [
  { name: 'Home', icon: <HomeIcon />, path: '/' },
  {
    name: 'ToDoList',
    icon: <ChecklistIcon />,
    path: '/todolist',
  },
]

export const HOME_LIST_ICONS = [
  {
    icon: (props) => <JavascriptIcon {...props} />,
  },
  {
    icon: (props) => <CodeIcon {...props} />,
  },
  {
    icon: (props) => <ApiIcon {...props} />,
  },
  {
    icon: (props) => <StorageIcon {...props} />,
  },
]
