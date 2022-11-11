import React from 'react';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import type { historyType } from '../useHooks';

export default ({ histories }: {histories: historyType[]}) => {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>回数</TableCell>
						<TableCell>あなたの答え</TableCell>
						<TableCell>判定</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{histories.map((history, index) => (
						<TableRow key={index}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{history.history}</TableCell>
							<TableCell>{history.result}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
