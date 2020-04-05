const presets = [
	'@babel/preset-env',
	'react-app',
	'airbnb',
];
const plugins = [
	'transform-class-properties',
];

if (process.env.NODE_ENV !== 'test') {
	plugins.push(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]);
}

module.exports = { presets, plugins };
