import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from './routes/RouteUtils'
import routes from './routes/routes'
import { CssBaseline, LinearProgress } from '@mui/material'
import MainContextProvider from './Context/MainContext'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme/theme'


const App = () => {

	return (
		<ThemeProvider theme={theme}>
			<MainContextProvider>
				<CssBaseline />
				<Router>
					<Suspense fallback={<LinearProgress color="secondary" />}>
						{renderRoutes(routes)}
					</Suspense>
				</Router>
			</MainContextProvider>
		</ThemeProvider>
	)
}

export default App
