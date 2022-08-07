import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Box, Stack, AppBar, Avatar, Toolbar, IconButton, Menu, MenuItem, List, ListItem, ListItemAvatar, ListItemText, Typography, Divider } from '@mui/material'
import { MHidden } from '../@material-extend'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { useHistory } from 'react-router'
import { MainContext, APP_STATE } from '../../../Context/MainContext'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280
const APPBAR_MOBILE = 64
const APPBAR_DESKTOP = 64

const RootStyle = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		[theme.breakpoints.up('lg')]: {
			width: `100%px`
		},
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen
			}),
			[theme.breakpoints.up('lg')]: {
				width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
			}
		})
	})
)

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	minHeight: APPBAR_MOBILE,
	[theme.breakpoints.up('lg')]: {
		minHeight: APPBAR_DESKTOP,
		padding: theme.spacing(0, 5)
	}
}))

// ----------------------------------------------------------------------

const Header = ({ onOpenSidebar, isOpenSidebarDesktop, onSidebarDesktop }) => {
	const [user, setUser] = useState({ picture: 'https://i.imgur.com/VGEVWUy.png', correo: '', name: '', cargo: '' })
	const { globalState, globalDispatch } = useContext(MainContext)
	const [anchorEl, setAnchorEl] = useState(null)
	const openMenu = Boolean(anchorEl)
	const { push } = useHistory()

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const init = () => {
		if (typeof globalState.auth.id === 'undefined') {
			localStorage.clear()
		} else {
			setUser(globalState.auth)
		}
	}

	useEffect(init, [])

	return (
		<RootStyle color='primary' elevation={8} open={isOpenSidebarDesktop}>
			<ToolbarStyle>
				<MHidden width="lgUp">
					<IconButton onClick={onOpenSidebar} sx={{ mr: 1 }} color='inherit'>
						<MenuOutlinedIcon />
					</IconButton>
				</MHidden>
				<MHidden width="lgDown">
					<IconButton onClick={onSidebarDesktop} sx={{ mr: 1 }} color='inherit'>
						<MenuOutlinedIcon />
					</IconButton>
				</MHidden>

				<Box sx={{ flexGrow: 1 }} />
				<Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
					<IconButton onClick={handleMenu} color="inherit">
						<PersonOutlineOutlinedIcon />
					</IconButton>
					<Menu
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={openMenu}
						onClose={handleClose}>
						<MenuItem>
							<List>
								<ListItem>
									<ListItemAvatar>
										<Avatar src={user.picture} alt='...' />
									</ListItemAvatar>
									<ListItemText primary={<div>
										<Typography align='center'>{user.user}</Typography>
										<Typography align='center'><b>{user.username}</b></Typography>
									</div>} />
								</ListItem>
							</List>
						</MenuItem>
						<Divider />
						<MenuItem onClick={() => {
							globalDispatch({ type: APP_STATE.CLEAR_APP_STATE })
							localStorage.clear()
							push('/login')
						}}>
							<ExitToAppOutlinedIcon />&nbsp;&nbsp;&nbsp;
							Cerrar sesión
						</MenuItem>
					</Menu>
				</Stack>
			</ToolbarStyle>
		</RootStyle>
	)
}

Header.propTypes = {
	onOpenSidebar: PropTypes.func
}

export default Header