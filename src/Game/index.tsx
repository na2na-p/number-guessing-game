import React from 'react';

import Button from '@/components/input/Button';
import Stack from '@/components/layout/Stack';
import Divider from '@/components/layout/Divider';
import Typography from '@/components/Typography';

import Input from './Input';
import DataDisplay from './DataDisplay';
import useHooks from './useHooks';

export default () => {
	const { histories, setResultHistory, onResetButtonClick } = useHooks();
	return (
		<Stack spacing={2}>
			<Typography variant="h4">数当てゲーム</Typography>
			<Divider />
			<Input setter={setResultHistory} />
			<Divider />
			<DataDisplay histories={histories} />
			<Button onClick={onResetButtonClick}>もう一度最初から</Button>
		</Stack>
	);
};
