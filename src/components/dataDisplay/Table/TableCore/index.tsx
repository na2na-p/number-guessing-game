import React, { ReactNode } from 'react';

import MuiTable from '@mui/material/Table';
import MuiTableContainer from '@mui/material/TableContainer';

import TableHead from './TableHead';
import TableBody from './TableBody';

export default ({ headers, rows }: { headers: ReactNode[], rows: ReactNode[][] }) => {
	return (
		<MuiTableContainer>
			<MuiTable>
				<TableHead headers={headers}/>
				<TableBody rows={rows}/>
			</MuiTable>
		</MuiTableContainer>
	);
};
