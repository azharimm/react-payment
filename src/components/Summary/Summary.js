import React from "react";
import { Wrapper, Divider } from "./Wrapper.style";

const Summary = ({ handleSubmit, onSubmit}) => {
	return (
		<Wrapper>
			<Divider />
			<div className="heading">
				<h1>Summary</h1>
				<p className="text-gray">10 items purchased</p>
			</div>
			<div className="divider"></div>
			<div>
				<p className="text-gray">Delivery Estimation</p>
				<p className="text-green">today by GO-SEND</p>
			</div>
			<div className="divider"></div>
			<div>
				<p className="text-gray">Payment Method</p>
				<p className="text-green">Bank Transfer</p>
			</div>
			<div className="details">
				<div className="summary__details">
					<p className="text-gray">Const of goods</p>
					<p>500,000</p>
				</div>
				<div className="summary__details">
					<p className="text-gray">Dropshiping fee</p>
					<p>5,900</p>
				</div>
				<div className="summary__details">
					<p className="text-gray">GO-SEND Shipment</p>
					<p>9,000</p>
				</div>
				<div className="summary__details total">
					<p>Total</p>
					<p>505,900</p>
				</div>
				<div className="summary__button">
					<button onClick={handleSubmit(onSubmit)}>Continue to Payment</button>
				</div>
			</div>
		</Wrapper>
	);
};

export default Summary;
