import React from 'react'
import Layout from '../../layout'
import { renderRoutes } from '../../../routes/RouteUtils'

const Home = props => {
	const { route } = props
	return (
		<Layout>
			{renderRoutes(route.routes)}
		</Layout>
	)
}

// withAuth
export default Home
