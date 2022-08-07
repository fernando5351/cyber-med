import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const RouteController = props => {
	const { component: Component, ...rest } = props

	const [isTokenOk, setIsTokenOk] = useState(true)

	const init = () => {
		if (localStorage.getItem("auth")) {
			const auth = JSON.parse(localStorage.getItem("auth"))
			if (auth.isAuth===true) {
				setIsTokenOk(true)
			} else {
				setIsTokenOk(false)
			}
		} else {
			setIsTokenOk(false)
		}
	}
	useEffect(init, [])

	return isTokenOk ? <Component {...rest} /> : <Redirect to={'/login'} />
}

export default RouteController
