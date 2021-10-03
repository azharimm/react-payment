import React from "react";
import { useStateValue } from '../../context/StateProvider';
import { Wrapper } from "./Wrapper.style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Steps = () => {
	const [{ steps }] = useStateValue();
	return (
		<Wrapper>
			<div className="step">
				<div className={`step_number ${steps >= 1 && 'active'}`}>
					<span>1</span>
				</div>
				<div className="step_name">Delivery</div>
				<div className="step_arrow">
                    <ArrowForwardIosIcon />
                </div>
			</div>
            <div className="step">
				<div className={`step_number ${steps >= 2 && 'active'}`}>
					<span>2</span>
				</div>
				<div className="step_name">Payment</div>
				<div className="step_arrow">
                    <ArrowForwardIosIcon />
                </div>
			</div>
            <div className="step">
				<div className={`step_number ${steps >= 3 && 'active'}`}>
					<span>3</span>
				</div>
				<div className="step_name">Finish</div>
			</div>
		</Wrapper>
	);
};

export default Steps;
