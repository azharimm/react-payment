import React from "react";
import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

import CheckIcon from "@mui/icons-material/Check";
import { Wrapper, BoxItem } from "./Wrapper.style";
import { Heading } from "../AppContainer.style";
const Payment = () => {
	const [{ deliveryOption, delivery, paymentOption, payment }, dispatch] = useStateValue();

	const selectShipment = (shipment) => {
		dispatch({type: actionTypes.SET_SHIPMENT, payload: shipment})
	}
	
	const selectPayment = (payment) => {
		dispatch({type: actionTypes.SET_PAYMENT, payload: payment})
	}

	return (
		<Wrapper>
			<div className="details__heading">
				<Heading>
					<h1>Shipment</h1>
					<div></div>
				</Heading>
			</div>
			<div className="box">
				{
					deliveryOption.map(shipment => (
						<BoxItem isSelected={shipment.id === delivery.id} onClick={() => selectShipment(shipment)} key={shipment.id} >
							<div className="content">
								<div>
									<span>{shipment.name}</span>
									<p>{shipment.price}</p>
								</div>
								<div>
									{shipment.id === delivery.id && <CheckIcon />}
								</div>
							</div>
						</BoxItem>
					))
				}
			</div>

			<div className="details__heading mt-100">
				<Heading>
					<h1>Payment</h1>
					<div></div>
				</Heading>
			</div>
			<div className="box">
				{
					paymentOption.map(pay => (
						<BoxItem isSelected={pay.id === payment.id} onClick={() => selectPayment(pay)} key={pay.id}>
							<div className="content">
								<div>
									{pay.id === 1 && <span>{pay.name}</span>}
									{pay.id === 1 ? <p>1,500,000 Left</p> : <p>{pay.name}</p>}
								</div>
								<div>
									{pay.id === payment.id && <CheckIcon />}
								</div>
							</div>
						</BoxItem>
					))
				}
			</div>
		</Wrapper>
	);
};

export default Payment;
