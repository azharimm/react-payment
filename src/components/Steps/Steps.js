import React from "react";
import { Wrapper } from "./Wrapper.style";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Steps = () => {
	return (
		<Wrapper>
			<div className="step">
				<div className="step_number active">
					<span>1</span>
				</div>
				<div className="step_name">Delivery</div>
				<div className="step_arrow">
                    <ArrowForwardIosIcon />
                </div>
			</div>
            <div className="step">
				<div className="step_number">
					<span>2</span>
				</div>
				<div className="step_name">Payment</div>
				<div className="step_arrow">
                    <ArrowForwardIosIcon />
                </div>
			</div>
            <div className="step">
				<div className="step_number">
					<span>3</span>
				</div>
				<div className="step_name">Finish</div>
			</div>
		</Wrapper>
	);
};

export default Steps;
