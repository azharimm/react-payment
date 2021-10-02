import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Wrapper, BoxItem } from "./Wrapper.style";
import { Heading } from "../AppContainer.style";
const Payment = () => {
	return (
		<Wrapper>
			<div className="details__heading">
				<Heading>
					<h1>Shipment</h1>
					<div></div>
				</Heading>
			</div>
			<div className="box">
				<BoxItem isSelected={true}>
					<div className="content">
						<div>
							<span>GO-SEND</span>
							<p>15,000</p>
						</div>
						<div>
							<CheckIcon />
						</div>
					</div>
				</BoxItem>
				<BoxItem>
					<div className="content">
						<div>
							<span>JNE</span>
							<p>9,000</p>
						</div>
						<div>{/* <CheckIcon /> */}</div>
					</div>
				</BoxItem>
				<BoxItem>
					<div className="content">
						<div>
							<span>Personal Courier</span>
							<p>29,000</p>
						</div>
						<div>{/* <CheckIcon /> */}</div>
					</div>
				</BoxItem>
			</div>

			<div className="details__heading mt-100">
				<Heading>
					<h1>Payment</h1>
					<div></div>
				</Heading>
			</div>
			<div className="box">
				<BoxItem isSelected={true}>
					<div className="content">
						<div>
							<span>e-Wallet</span>
							<p>1,500,000 Left</p>
						</div>
						<div>
							<CheckIcon />
						</div>
					</div>
				</BoxItem>
				<BoxItem>
					<div className="content">
						<p>Bank Transfer</p>
						{/* <CheckIcon /> */}
					</div>
				</BoxItem>
				<BoxItem>
					<div className="content">
						<p>Virtual Account</p>
						{/* <CheckIcon /> */}
					</div>
				</BoxItem>
			</div>
		</Wrapper>
	);
};

export default Payment;
