import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Wrapper } from "./Wrapper.style";
import { Heading } from "../AppContainer.style";
const Finish = () => {
	return (
		<Wrapper>
			<div className="heading">
				<Heading>
					<h1>Thank You</h1>
					<div></div>
				</Heading>
			</div>
			<p>Order ID : XXKYB</p>
			<p>Your order will be delivered today with GO-SEND</p>

			<div className="back">
				<ArrowBackIcon /> <span className="text-gray"> Back to cart</span>
			</div>
		</Wrapper>
	);
};

export default Finish;
