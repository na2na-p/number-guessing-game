import Button, { ButtonProps } from '@mui/material/Button';
import { ReactNode } from 'react';

export default ({ children, ...rest }: { children: ReactNode } & ButtonProps) => {
	return (
		<Button variant='contained' {...rest}>{children}</Button>
	);
};
