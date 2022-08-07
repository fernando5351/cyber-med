import React, { useState, useEffect, forwardRef } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

// se muestra solo cuando el identificador del mensaje cambia
const ToastAutoHide = props => {
	const { message } = props
	const [open, setOpen] = useState(false)

	const handleClose = (event, reason) => {
		if (reason === 'clickaway')
			return
		setOpen(false)
	}

	const Alert = forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
	})

	useEffect(() => {
		if (message.ident)
			setOpen(true)
	}, [message])

	return (
		<Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
			<Alert onClose={handleClose} severity={message.type} sx={{ width: '100%' }}>
				{message.message}
			</Alert>
		</Snackbar>
	)
}

export default ToastAutoHide