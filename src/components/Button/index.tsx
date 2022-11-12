import Button, { ButtonProps } from '@mui/material/Button';
import { ReactNode } from 'react';

export default ({ variant = 'contained', children, ...rest }: { children: ReactNode } & ButtonProps) => {
	return (
		<Button variant={variant} {...rest}>{children}</Button>
	);
};
