import React, { useRef, Dispatch } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import useHooks, { historyType } from '../useHooks';

export default ({ setter }: {setter: (result: string) => void}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const buttonOnClick = () => {
		if (inputRef.current) {
			const inputValue = inputRef.current.value;
			setter(inputValue);
		}
	};
	return (
		<>
			<TextField placeholder='いくつでしょう?' inputRef={inputRef} type="number" />
			<Button variant='contained' onClick={buttonOnClick}>トライ!</Button>
		</>
	);
};
