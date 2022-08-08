import React from 'react'
import { PersonOutlined, HomeOutlined } from '@mui/icons-material'

const sidebarConfig = [
	{
		title: 'inicio',
		path: '/app',
		icon: <HomeOutlined />
	},
	{
		title: 'usuarios',
		path: '/app/usuarios',
		icon: <PersonOutlined />
	}
]

export default sidebarConfig