export const initialState = {
	steps: 1,
	currentStep: 1,
	isDropship: true,
	form: {
		email: null,
		phone_number: null,
		delivery_address: null,
		dropship_name: null,
		dropship_phone_number: null,
	},
	deliveryOption: [
		{
			id: 1,
			name: "GO-SEND",
			price: 15000,
			due: "today",
		},
		{
			id: 2,
			name: "JNE",
			price: 9000,
			due: "2 days",
		},
		{
			id: 3,
			name: "Personal Courier",
			price: 29000,
			due: "1 day",
		},
	],
	paymentOption: [
		{
			id: 1,
			name: "e-Wallet",
		},
		{
			id: 2,
			name: "Bank Transfer",
		},
		{
			id: 3,
			name: "Virtual Account",
		},
	],
	delivery: {
		id: null,
		name: null,
		price: null,
		due: null,
	},
	payment: {
		id: null,
		name: null,
	},
	total: 505900,
};

export const actionTypes = {
	IS_DROPSHIP: "IS_DROPSHIP",
	SET_FORM: "SET_FORM",
	NEXT_STEP: "NEXT_STEP",
	SET_SHIPMENT: "SET_SHIPMENT",
	SET_PAYMENT: "SET_PAYMENT",
	BACK_STEP: "BACK_STEP",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.IS_DROPSHIP:
			return {
				...state,
				isDropship: !state.isDropship,
				total: !state.isDropship
					? state.total + 5900
					: state.total - 5900,
			};
		case actionTypes.SET_FORM:
			return {
				...state,
				form: action.payload,
			};
		case actionTypes.NEXT_STEP:
			return {
				...state,
				currentStep: state.currentStep + 1,
				steps: state.steps + 1,
			};
		case actionTypes.SET_SHIPMENT:
			return {
				...state,
				delivery: { ...action.payload },
			};
		case actionTypes.SET_PAYMENT:
			return {
				...state,
				payment: { ...action.payload },
			};
		case actionTypes.BACK_STEP:
			return {
				...state,
				currentStep: state.currentStep <= 3 && state.currentStep > 1 ? state.currentStep - 1 : state.currentStep,
			};
		default:
			return state;
	}
};

export default reducer;
