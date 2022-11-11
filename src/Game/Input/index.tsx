import React, { useRef } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useHooks } from './useHooks';

export default ({ setter }: {setter: (result: string) => void}) => {
	const { inputRef, onButtonClick } = useHooks({ setter });
	return (
		<>
			<TextField placeholder='いくつでしょう?' inputRef={inputRef} type="number" />
			<Button variant='contained' onClick={onButtonClick}>トライ!</Button>
		</>
	);
};
