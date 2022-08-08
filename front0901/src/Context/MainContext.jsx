import React, { createContext, useReducer, useEffect } from 'react'

//# context
export const MainContext = createContext()
export const MainProvider = MainContext.Provider
export const MainConsumer = MainContext.Consumer

// action types
export const APP_STATE = {
	CLEAR_APP_STATE: 'APP/CLEAR_APP_STATE'
}

export const AUTH_TYPES = {
	LOGIN_OK: 'APP/LOGIN_OK',
	LOGIN_FAIL: 'APP/LOGIN_FAIL',
	LOGOUT_OK: 'APP/LOGOUT_OK',
	LOGOUT_FAIL: 'APP/LOGOUT_FAIL',
	THEME_OK: 'APP/THEME_OK'
}

export const APP_VALUES_TYPES = {
	ADD_MESSAGE: 'APP/ADD_MESSAGE',
	CLEAR_MESSAGES: 'APP/CLEAR_MESSAGES'
}

// initial state
export const defaultState = {
	auth: {},
	appValues: { // no guardar en el localstorage
		message: {
			ident: null,
			type: null,
			message: null
		}
	}
}

// reducer
const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case AUTH_TYPES.LOGIN_OK:
			return {
				...state,
				auth: action.payload
			}
		case AUTH_TYPES.THEME_OK:
			return {
				...state,
				auth: {
					...state.auth,
					tipo: action.payload
				}
			}
		case AUTH_TYPES.LOGIN_FAIL:
		case AUTH_TYPES.LOGOUT_OK:
		case AUTH_TYPES.LOGOUT_FAIL:
			return {
				...state,
				auth: defaultState.auth
			}

		case APP_VALUES_TYPES.ADD_MESSAGE:
			return {
				...state,
				appValues: {
					...state.appValues,
					message: {
						ident: new Date().getTime(),
						...action.payload
					}
				}
			}
		case APP_VALUES_TYPES.CLEAR_MESSAGES:
			return {
				...state,
				appValues: {
					...state.appValues,
					message: defaultState.appValues.message
				}
			}
		case APP_STATE.CLEAR_APP_STATE:
			return defaultState
		default:
			return state
	}
}

const initStateFromLocalStorage = () => {
	const auth = localStorage.getItem("auth") ?
		JSON.parse(localStorage.getItem("auth"))
		: defaultState.auth
	return {
		...defaultState,
		auth
	}
}


export const MainContextProvider = props => {

	const initialState = initStateFromLocalStorage()

	const [globalState, globalDispatch] = useReducer(reducer, initialState)

	const saveStateToLocalStorage = () => {
		if (typeof globalState.auth.id === 'undefined') {
			localStorage.clear()
		} else {
			localStorage.setItem('auth', JSON.stringify(globalState.auth))
		}
	}

	useEffect(saveStateToLocalStorage, [globalState.auth])

	return (
		<MainProvider value={{ globalState, globalDispatch }}>
			{props.children}
		</MainProvider>
	)
}

export default MainContextProvider
