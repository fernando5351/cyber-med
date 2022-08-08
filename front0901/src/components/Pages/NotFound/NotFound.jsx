import React from 'react'
import { Container, Typography } from '@mui/material'
import imagesList from '../../../assets'
import Page from '../../common/Page'
import { Link } from 'react-router-dom'

const NotFound = () => {

	return (
		<Page title="SAMUS | 404">
			<div style={{
				backgroundImage: 'url(https://pa1.narvii.com/7243/d15ff24b7642ca9deedc8ca7947185c0926718b0r1-600-600_hq.gif)',
				backgroundPosition: 'center',
				backgroundSize: '100%',
				width: '100%',
				height: '100vh',
				position: 'absolute'
			}}>
				<Container maxWidth='sm'>
					<img src={imagesList.image404} alt='...' style={{
						position: 'fixed',
						width: '50%',
						right: '23%',
						top: '10%'
					}} />
					<Link to='/app' style={{ textDecoration: 'none', color: "#ffffff" }}><Typography variant='h4' align='center'>Home</Typography></Link>
				</Container>
			</div>
		</Page>
	)
}

export default NotFound
