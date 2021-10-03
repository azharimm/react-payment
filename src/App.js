import "./App.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";

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
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<>
			<Steps />
			<AppContainer>
				<Back>
					<ArrowBackIcon /> <span> Back to cart</span>
				</Back>
				<Card>
					<Delivery register={register} errors={errors} />
					{/* <Payment /> */}
					{/* <Finish /> */}
					<Summary handleSubmit={handleSubmit} onSubmit={onSubmit} />
				</Card>
			</AppContainer>
		</>
	);
};

export default App;
