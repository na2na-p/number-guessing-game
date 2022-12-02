// import '@testing-library/jest-dom'; // jestのアサーションがエラーになる場合は明示的にimport
import { describe, expect, test } from 'vitest';
import Game from './';
import { render, screen } from '@testing-library/react';

describe('Game root component', () => {
	test('should render correctly', () => {
		const { container } = render(<Game />);
		expect(container).toMatchSnapshot();
	});
});
