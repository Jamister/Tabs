import axios from 'axios';

export function get(url) {
	const instance = axios.create({
		baseURL: 'https://test.t.com.br',
	});
	return instance.get(url);
}
