import "./App.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";

import { useStateValue } from './context/StateProvider';
import { actionTypes } from './context/reducer';

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
		watch,
		formState: { errors },
	} = useForm();
	const [{steps, currentStep}, dispatch] = useStateValue();

	const onSubmit = (data) => {
		dispatch({type: actionTypes.SET_FORM, payload: data})
		dispatch({type: actionTypes.NEXT_STEP})
	};
	return (
		<>
			<Steps />
			<AppContainer>
				<Back>
					<ArrowBackIcon /> <span> Back to cart</span>
				</Back>
				<Card>
					{currentStep === 1 && <Delivery register={register} errors={errors} /> }
					{currentStep === 2 && <Payment /> }
					{currentStep === 3 && <Finish /> }
					<Summary handleSubmit={handleSubmit} onSubmit={onSubmit} />
				</Card>
			</AppContainer>
		</>
	);
};

export default App;
