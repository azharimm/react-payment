import React from "react";

import { useStateValue } from "../../context/StateProvider";

import { Wrapper, Divider } from "./Wrapper.style";
import { moneyFormat } from "../../helpers/format";

const Summary = ({ handleSubmit, onSubmit }) => {
	const [{ delivery, payment, total, isDropship, currentStep }] =
		useStateValue();

	return (
		<Wrapper>
			<Divider />
			<div className="heading">
				<h1>Summary</h1>
				<p className="text-gray">10 items purchased</p>
			</div>
			{delivery.id && (
				<>
					<div className="divider"></div>
					<div>
						<p className="text-gray">Delivery Estimation</p>
						<p className="text-green">{delivery.due} by {delivery.name}</p>
					</div>
				</>
			)}
			{payment.id && (
				<>
					<div className="divider"></div>
					<div>
						<p className="text-gray">Payment Method</p>
						<p className="text-green">{payment.name}</p>
					</div>
				</>
			)}
			<div className="details">
				<div className="summary__details">
					<p className="text-gray">Const of goods</p>
					<p>500,000</p>
				</div>
				{isDropship && (
					<div className="summary__details">
						<p className="text-gray">Dropshiping fee</p>
						<p>{moneyFormat(5900)}</p>
					</div>
				)}
				{ delivery.id && (
					<div className="summary__details">
						<p className="text-gray">{delivery.name} Shipment</p>
						<p>{moneyFormat(delivery.price)}</p>
					</div>
				)}
				<div className="summary__details total">
					<p>Total</p>
					<p>{moneyFormat(total+delivery.price)}</p>
				</div>
				<div className="summary__button">
					{currentStep === 1 && (
						<button onClick={handleSubmit(onSubmit)}>
							Continue to Payment
						</button>
					)}
					{currentStep === 2 && (
						<button onClick={handleSubmit(onSubmit)} disabled={delivery.id === null || payment.id === null}>
							Pay {payment.name}
						</button>
					)}
				</div>
			</div>
		</Wrapper>
	);
};

export default Summary;
