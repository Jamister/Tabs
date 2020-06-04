/* eslint-disable no-console */
function removePropTypesAlerts(jest) {
	console.error = jest.fn();
}

export default removePropTypesAlerts;
