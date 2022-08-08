import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		primary: {
			main: '#1769aa',
			contrastText: '#ffffff'
		},
		secondary: {
			main: "#ab003c",
			contrastText: '#ffffff'
		},
		neutral: {
			main: '#64748B',
			contrastText: '#ffffff'
		}
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'dashed' },
					style: {
						border: `2px dashed #1769aa`,
						color: '#1769aa'
					}
				},
				{
					props: { variant: 'dashed', color: 'secondary' },
					style: {
						border: `2px dashed #ab003c`,
						color: '#ab003c'
					}
				},
				{
					props: { variant: 'radius' },
					style: {
						backgroundColor: '#1769aa',
						borderRadius: 16,
						transition: 'all .2s ease-in-out',
						'&:hover': {
							backgroundColor: '#D22231'
						}
					}
				},
				{
					props: { variant: 'radius', color: 'secondary' },
					style: {
						backgroundColor: '#ab003c',
						color: '#ffffff',
						borderRadius: 16,
						transition: 'all .2s ease-in-out',
						'&:hover': {
							backgroundColor: '#CE9F02'
						}
					}
				},
				{
					props: { variant: 'radiusOutlined' },
					style: {
						backgroundColor: 'transparent',
						borderRadius: 16,
						transition: 'all .2s ease-in-out',
						border: `2px solid #1769aa`,
						color: `#1769aa`,
						'&:hover': {
							backgroundColor: '#D22231'
						}
					}
				},
				{
					props: { variant: 'radiusOutlined', color: 'secondary' },
					style: {
						backgroundColor: 'transparent',
						borderRadius: 16,
						transition: 'all .2s ease-in-out',
						border: `2px solid #ab003c`,
						color: `#ab003c`,
						'&:hover': {
							backgroundColor: '#D22231'
						}
					}
				},
				{
					props: { variant: 'contained' },
					style: {
						background: "-webkit-linear-gradient(45deg, #1769aa 20%, #35baf6 90%)",
						transition: 'all .2s ease-in-out',
						color: `#ffffff`,
						'&:hover': {
							backgroundColor: '#D22231'
						}
					}
				},
				{
					props: { variant: 'contained', color: 'secondary' },
					style: {
						background: "-webkit-linear-gradient(45deg, #ab003c 20%, #f73378 90%)",
						transition: 'all .2s ease-in-out',
						color: `#ffffff`,
						'&:hover': {
							backgroundColor: '#D22231'
						}
					}
				},
				{
					props: { variant: 'text', color: 'inherit' },
					style: {
						backgroundColor: 'transparent',
						transition: 'all .2s ease-in-out',
						color: `#1769aa`,
						'&:hover': {
							color: '#1769aa'
						}
					}
				}
			]
		}
	}
})

export default theme