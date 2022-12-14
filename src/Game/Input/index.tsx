import React from 'react';

import TextField from '@/components/input/TextField';
import Button from '@/components/input/Button';

import { useHooks } from './hooks';

export default ({ setter }: { setter: (result: string) => void }) => {
	const { inputRef, onButtonClick } = useHooks({ setter });
	return (
		<>
			<TextField placeholder='いくつでしょう?' inputRef={inputRef} type="number" />
			<Button onClick={onButtonClick}>トライ!</Button>
		</>
	);
};
