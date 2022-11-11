import { useState } from 'react';

export type historyType = {
	index: number;
	history: string;
	result: string;
}

const useHooks = () => {
	const [histories, setHistories] = useState<historyType[]>([]);
	const [answer] = useState(Math.floor(Math.random() * 100) + 1);

	const setResultHistory = (result: string) => {
		setHistories([...histories, {
			index: histories.length + 1,
			history: result,
			// answerとresultを比較して、大きいか小さいか正解かを判定する
			result: parseInt(result) === answer ?
				'正解' : parseInt(result) > answer ?
					'もっと小さい' : 'もっと大きい'
		}]);
	};

	const onResetButtonClick = () => {
		setHistories([]);
	};

	return {
		answer,
		histories,
		setResultHistory,
		onResetButtonClick
	};
};

export default useHooks;
