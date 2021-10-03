import React from "react";
import { useStateValue } from '../../context/StateProvider';
import { randomId } from "../../helpers/format";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Wrapper } from "./Wrapper.style";
import { Heading } from "../AppContainer.style";
const Finish = ({ resetForm }) => {
	const [{ delivery }] = useStateValue();

	return (
		<Wrapper>
			<div className="heading">
				<Heading>
					<h1>Thank You</h1>
					<div></div>
				</Heading>
			</div>
			<p>Order ID : {randomId(5)}</p>
			<p>Your order will be delivered {delivery.due} with {delivery.name}</p>

			<div className="back" onClick={resetForm}>
				<ArrowBackIcon /> <span className="text-gray"> Back to cart</span>
			</div>
		</Wrapper>
	);
};

export default Finish;
