import React from "react";
import { Wrapper, DropshipCheck, Form } from "./Wrapper.style";
import { Heading } from "../AppContainer.style";

const Delivery = () => {
	return (
		<Wrapper>
			<div className="details__heading">
				<Heading>
					<h1>Delivery details</h1>
					<div></div>
				</Heading>
				<DropshipCheck>
					<input type="checkbox" name="check" id="1" />
					<label id="1">Send as dropship</label>
				</DropshipCheck>
			</div>
			<Form>
				<div className="form__details">
					<input type="text" placeholder="Name" autoComplete="nope" />{" "}
					<br />
					<input
						type="text"
						placeholder="Phone number"
						autoComplete="nope"
					/>{" "}
					<br />
					<textarea
						placeholder="Delivery address"
						autoComplete="nope"
					></textarea>
				</div>
				<div className="form__dropship">
					<input
						type="text"
						placeholder="Dropshipper name"
						autoComplete="nope"
					/>{" "}
					<br />
					<input
						type="text"
						placeholder="Dropshipper phone number"
						autoComplete="nope"
					/>{" "}
					<br />
				</div>
			</Form>
		</Wrapper>
	);
};

export default Delivery;
