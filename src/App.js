import React from "react";
import "./App.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";

import { useStateValue } from "./context/StateProvider";
import { actionTypes } from "./context/reducer";

import { AppContainer, Card } from "./components/AppContainer.style";
import { Back } from "./components/Back.style";
import Delivery from "./components/Delivery/Delivery";
import Payment from "./components/Payment/Payment";
import Summary from "./components/Summary/Summary";
import Finish from "./components/Finish/Finish";
import Steps from "./components/Steps/Steps";

const App = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const [{ currentStep }, dispatch] = useStateValue();

	const onSubmit = (data) => {
		dispatch({ type: actionTypes.SET_FORM, payload: data });
		dispatch({ type: actionTypes.NEXT_STEP });
	};

	const backStep = () => {
		dispatch({ type: actionTypes.BACK_STEP });
	};
	const resetForm = () => {
		dispatch({type: actionTypes.RESET_STATE })
		reset()
	}

	return (
		<>
			<Steps />
			<AppContainer>
				{currentStep < 3 && (
					<Back onClick={backStep}>
						<ArrowBackIcon />
						{currentStep === 1 && <span> Back to cart</span>}
						{currentStep === 2 && <span> Back to delivery</span>}
					</Back>
				)}
				<Card>
					{currentStep === 1 && (
						<Delivery register={register} errors={errors} />
					)}
					{currentStep === 2 && <Payment />}
					{currentStep === 3 && <Finish resetForm={resetForm} />}
					<Summary handleSubmit={handleSubmit} onSubmit={onSubmit} />
				</Card>
			</AppContainer>
		</>
	);
};

export default App;
