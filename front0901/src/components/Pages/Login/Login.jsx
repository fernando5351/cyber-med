import React, { useState, useContext, useEffect } from 'react'
import { Grid, CssBaseline, Paper, Avatar, Typography, TextField, Button, InputAdornment, IconButton, LinearProgress, Box, Link } from '@mui/material'
import { LockOpen, Visibility, VisibilityOff, LockOutlined } from '@mui/icons-material'
import { useHistory } from 'react-router-dom'
import ApiRequest from '../../../helpers/axiosInstances'
import { MainContext, APP_STATE, AUTH_TYPES } from '../../../Context/MainContext'
import ToastAutoHide from '../../common/ToastAutoHide'
import Page from '../../common/Page'

const Login = () => {
	const { globalDispatch } = useContext(MainContext)
	const [bodyLogin, setBodyLogin] = useState({ username: '', password: '' })
	const [showPass, setShowPass] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [mensaje, setMensaje] = useState({ ident: null, message: null, type: null })
	const { push } = useHistory()

	const onChange = e => {
		const { name, value } = e.target
		setBodyLogin({
			...bodyLogin,
			[name]: value
		})
	}

	const handleSubmit = () => {
		setIsLoading(true)
		ApiRequest().post('/login', bodyLogin)
			.then(({ data }) => {
				globalDispatch({
					type: AUTH_TYPES.LOGIN_OK,
					payload: data
				})
				setIsLoading(false)
				push('/app')
			})
			.catch(({ response }) => {
				globalDispatch({ type: AUTH_TYPES.LOGIN_FAIL })
				setMensaje({
					ident: new Date().getTime(),
					message: response.data,
					type: 'error'
				})
				setIsLoading(false)
			})
	}

	const init = () => {
		globalDispatch({
			type: APP_STATE.CLEAR_APP_STATE
		})
		localStorage.clear()
	}

	useEffect(init, [])

	return (
		<Page title="SAMUS | Login">
			<ToastAutoHide message={mensaje} />
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7}
					sx={{
						backgroundImage: 'url(https://wallpaperstock.net/metroid-wallpapers_20673_1440x900.jpg)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: (t) =>
							t.palette.mode === 'light' ? "#27aae1" : "#27aae1",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				/>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
					<Box
						sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
							<LockOutlined />
						</Avatar>
						<Typography component="h1" variant="h5">
							Login
						</Typography>
						<Box component="form" noValidate sx={{ mt: 1 }}>
							<TextField
								required
								fullWidth
								autoFocus
								value={bodyLogin.username}
								onChange={onChange}
								variant="outlined"
								margin="normal"
								label="Username"
								name="username"
							/>
							<TextField
								required
								fullWidth
								variant="outlined"
								value={bodyLogin.password}
								onChange={onChange}
								margin="normal"
								name="password"
								label="Password"
								type={showPass ? "text" : "password"}
								autoComplete="password"
								onKeyDown={e => { if (e.keyCode === 13) { handleSubmit() } }}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={() => setShowPass(!showPass)}
												onMouseDown={(event) => {
													event.preventDefault()
												}}
											>
												{showPass ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
							{isLoading ? <LinearProgress color='secondary' /> : null}
							<Button
								startIcon={<LockOpen />}
								fullWidth
								variant="contained"
								color="primary"
								sx={{ mt: 3, mb: 2 }}
								onClick={handleSubmit}
							>
								Login
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="/login" variant="body2">
										¿Olvidaste tu contraseña?
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Page>
	)
}

export default Login
