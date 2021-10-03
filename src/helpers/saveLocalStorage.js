export const saveLocalStorage = (data) => {
	localStorage.setItem("payment-wizard", JSON.stringify(data));
};
