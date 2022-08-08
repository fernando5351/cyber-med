import React from 'react'
import {
	Card,
	LinearProgress
} from '@mui/material'
import { DataGrid, GridOverlay } from '@mui/x-data-grid'

function CustomLoadingOverlay() {
	return (
		<GridOverlay>
			<div style={{ position: 'absolute', top: 0, width: '100%' }}>
				<LinearProgress />
			</div>
		</GridOverlay>
	)
}

const CommonTable = ({ data, columns }) => {

	return (
		<Card>
			<DataGrid
				autoHeight
				rows={data}
				columns={columns}
				pageSize={10}
				rowsPerPageOptions={[10]}
				disableSelectionOnClick
				pagination
				components={{
					LoadingOverlay: CustomLoadingOverlay
				}}
			/>
		</Card>
	)
}

export default CommonTable
