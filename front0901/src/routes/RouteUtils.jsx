import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { APP_VALUES } from '../constants/app'

export const HomeRedirect = () => <Redirect to={`/${APP_VALUES.ROOT_ROUTE}`} />

export const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
	routes ? (
		<Switch {...switchProps}>
			{routes.map((route, i) => (
				<Route
					exact={route.exact}
					key={route.key || i}
					path={route.path}
					render={props => route.render
						? route.render({ ...props, ...extraProps, route: route })
						: <route.component {...props} {...extraProps} route={route} />}
					strict={route.strict}
				/>
			))}
		</Switch>
	) : null
