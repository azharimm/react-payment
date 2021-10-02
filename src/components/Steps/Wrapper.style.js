import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	width: 85%;
	height: 70px;
	top: 0px;
	background: rgba(255, 250, 230, 1);
	padding: 20px 38px;
	opacity: 1;
	position: relative;
	border-top-left-radius: 35px;
	border-top-right-radius: 35px;
	border-bottom-left-radius: 35px;
	border-bottom-right-radius: 35px;
	overflow: hidden;
	z-index: 1;

	& .step {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 30px;
	}

	& .step_number {
		width: 30px;
		height: 30px;
		background: rgb(255 232 204);
		color: rgba(255, 138, 0, 1);
		opacity: 1;
		position: absolute;
		top: 0px;
		left: 0px;
		border: 0px solid rgba(150, 150, 150, 1);
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		box-shadow: 0px 2px 4px rgb(1 1 0 / 30%);
		overflow: hidden;
	}

	& .step_number.active {
		background: rgba(255, 138, 0, 1);
		color: white;
	}

	& .step_number span {
		top: 3px;
		left: 10px;
	}

	& .step_name {
		width: 48px;
		color: rgba(255, 138, 0, 1);
		position: absolute;
		top: 6px;
		left: 40px;
		font-weight: Regular;
		font-size: 16px;
		opacity: 1;
		text-align: left;
	}

	& .step_arrow {
		display: none;
		width: 24px;
		color: rgba(255, 138, 0, 1);
		position: absolute;
		top: 3px;
		left: 125px;
		font-family: Material Icons;
		font-weight: Regular;
		font-size: 24px;
		opacity: 1;
		text-align: center;
	}

	@media (min-width: 768px) {
		width: 500px;

		& .step {
			margin-left: 30px;
		}

		& .step_arrow {
			display: inline-flex;
		}
	}
`;
