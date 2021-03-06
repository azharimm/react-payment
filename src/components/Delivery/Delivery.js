import React from "react";

import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

import { Wrapper, DropshipCheck, Form, Input, Textarea } from "./Wrapper.style";
import { Heading } from "../AppContainer.style";

const Delivery = ({ register, errors, reset, getValues }) => {
	const [{ isDropship, form}, dispatch] = useStateValue();

	return (
		<Wrapper>
			<div className="details__heading">
				<Heading>
					<h1>Delivery details</h1>
					<div></div>
				</Heading>
				<DropshipCheck>
					<input
						type="checkbox"
						name="check"
						checked={isDropship}
						onChange={() => {
							dispatch({type: actionTypes.IS_DROPSHIP})
							reset({ ...getValues(), dropship_name: null, dropship_phone_number: null })
							}
						}
					/>
					<label>Send as dropship</label>
				</DropshipCheck>
			</div>
			<Form>
				<div className="form__details">
					<Input
						type="email"
						placeholder="Email"
						autoComplete="nope"
						error={errors.email}
						defaultValue={form.email}
						{...register("email", {
							required: true,
							pattern: {
								value: /\S+@\S+\.\S+/,
								message:
									"This email field must be a valid email address",
							},
						})}
					/>{" "}
					<br />
					{errors.email && (
						<span className="text-red text-sm">
							{errors.email.type === "required"
								? "This email field is required"
								: errors.email.message}
						</span>
					)}
					<br />
					<Input
						type="number"
						placeholder="Phone number"
						autoComplete="nope"
						error={errors.phone_number}
						defaultValue={form.phone_number}
						{...register("phone_number", { required: true, minLength: 6, maxLength: 20 })}
					/>{" "}
					<br />
						{errors.phone_number && errors.phone_number.type === "required" && <span className="text-red text-sm">This phone field is required</span>}
						{errors.phone_number && errors.phone_number.type === "minLength" && <span className="text-red text-sm">This field minimum 6 character</span> }
						{errors.phone_number && errors.phone_number.type === "maxLength" && <span className="text-red text-sm">This field maximum 20 character</span> }
					<br />
					<Textarea
						placeholder="Delivery address"
						autoComplete="nope"
						error={errors.delivery_address}
						defaultValue={form.delivery_address}
						{...register("delivery_address", { required: true, maxLength: 120 })}
					></Textarea>{" "}
					<br />
						{errors.delivery_address && errors.delivery_address.type === "required" && <span className="text-red text-sm">This address field is required</span>}
						{errors.delivery_address && errors.delivery_address.type === "maxLength" && <span className="text-red text-sm">This field maximum 120 character</span> }
				</div>
				
					<div className="form__dropship">
						<Input
							type="text"
							placeholder="Dropshipper name"
							autoComplete="nope"
							error={errors.dropship_name}
							defaultValue={form.dropship_name}
							disabled={!isDropship}
							{...register("dropship_name", { required: !isDropship ? false : true })}
						/>{" "}
						<br />
						{errors.dropship_name && errors.dropship_name.type === "required" && <span className="text-red text-sm">This dropship name field is required</span>}
						<br />
						<Input
							type="number"
							placeholder="Dropshipper phone number"
							autoComplete="nope"
							error={errors.dropship_phone_number}
							defaultValue={form.dropship_phone_number}
							disabled={!isDropship}
							{...register("dropship_phone_number", {
								required: !isDropship ? false : true,
								minLength: 6,
								maxLength: 20
							})}
						/>{" "}
						<br />
						{errors.dropship_phone_number && errors.dropship_phone_number.type === "required" && <span className="text-red text-sm">This dropship phone field is required</span>}
						{errors.dropship_phone_number && errors.dropship_phone_number.type === "minLength" && <span className="text-red text-sm">This field minimum 6 character</span> }
						{errors.dropship_phone_number && errors.dropship_phone_number.type === "maxLength" && <span className="text-red text-sm">This field maximum 20 character</span> }
					</div>
			
			</Form>
		</Wrapper>
	);
};

export default Delivery;
