export const getDemoInitState = () => ({
	color: 'Burgundy',
	customer: {
		name: {
			first: null,
			last: null
		},
		phone: null
	},
	price: 22.5,
	type: ''
});

export const defaultDemoState = getDemoInitState();
