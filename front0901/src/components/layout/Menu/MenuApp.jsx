import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Box, Drawer, Typography, Stack } from '@mui/material'
import imagesList from '../../../assets'
import NavSection from '../NavSection/NavSection'
import { MHidden } from '../@material-extend'
import sidebarConfig from './SidebarConfig'
import { APP_VALUES } from '../../../constants/app'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280

const RootStyle = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		flexShrink: 0,
		width: DRAWER_WIDTH
	}
}))

// ----------------------------------------------------------------------

const MenuApp = ({ isOpenSidebar, onCloseSidebar, isOpenSidebarDesktop }) => {
	const { pathname } = useLocation()

	const init = () => {
		if (isOpenSidebar) {
			onCloseSidebar()
		}
	}

	useEffect(init, [pathname])

	const renderContent = (
		<>
			<Stack sx={{ p: 2.5, pt: 3, position: 'relative' }} direction="row" alignItems="right" spacing={{ xs: 0.5, sm: 1.5 }}>
				<>
				</>
			</Stack>
			<Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
				<Stack
					alignItems="center"
					spacing={3}
					sx={{
						p: 2.5,
						pt: 5,
						borderRadius: 2,
						position: 'relative'
					}}
				>
					<Box
						component="img"
						src={imagesList.Logo}
						sx={{ width: 100, position: 'absolute', top: -50 }}
					/>

					<Box sx={{ textAlign: 'center' }}>
						<Typography gutterBottom variant="h6">
							{APP_VALUES.NAME}
						</Typography>
						<Typography variant="body2" sx={{ color: 'text.secondary' }}>
							{APP_VALUES.VERSION}
						</Typography>
					</Box>
				</Stack>
			</Box>
			<NavSection navConfig={sidebarConfig} isOpenSidebarDesktop={isOpenSidebarDesktop} />
			<Box sx={{ flexGrow: 1 }} />
		</>
	)

	return (
		<RootStyle>
			<MHidden width="lgUp">
				<Drawer
					open={isOpenSidebar}
					onClose={onCloseSidebar}
					PaperProps={{
						sx: { width: DRAWER_WIDTH }
					}}
				>
					{renderContent}
				</Drawer>
			</MHidden>

			<MHidden width="lgDown">
				<Drawer
					open={isOpenSidebarDesktop}
					variant='persistent'
					PaperProps={{
						sx: {
							width: DRAWER_WIDTH,
							bgcolor: 'background.paper'
						}
					}}
				>
					{renderContent}
				</Drawer>
			</MHidden>
		</RootStyle>
	)
}

MenuApp.propTypes = {
	isOpenSidebar: PropTypes.bool,
	onCloseSidebar: PropTypes.func
}

export default MenuApp