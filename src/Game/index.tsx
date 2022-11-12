import React from 'react';

import Button from '@/components/input/Button';
import Stack from '@mui/material/Stack';
import Divider from '@/components/layout/Divider';

import Input from './Input';
import DataDisplay from './DataDisplay';
import useHooks from './useHooks';

export default () => {
	const { histories, setResultHistory, onResetButtonClick } = useHooks();
	return (
		<Stack spacing={2}>
			<Input setter={setResultHistory}/>
			<Divider/>
			<DataDisplay histories={histories}/>
			<Button onClick={onResetButtonClick}>もう一度最初から</Button>
		</Stack>
	);
};
