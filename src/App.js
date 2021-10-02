import "./App.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { AppContainer, Card } from "./components/AppContainer.style";
import { Back } from "./components/Back.style";
import Delivery from "./components/Delivery/Delivery";
import Payment from "./components/Payment/Payment";
import Summary from "./components/Summary/Summary";
import Finish from "./components/Finish/Finish";
import Steps from "./components/Steps/Steps";

const App = () => {
	return (
		<>
			<Steps />
			<AppContainer>
				<Back>
					<ArrowBackIcon /> <span> Back to cart</span>
				</Back>
				<Card>
					<Delivery />
					{/* <Payment /> */}
					{/* <Finish /> */}
					<Summary />
				</Card>
			</AppContainer>
		</>
	);
};

export default App;
