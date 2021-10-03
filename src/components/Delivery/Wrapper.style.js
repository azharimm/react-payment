import styled from "styled-components";

export const Wrapper = styled.div`
	top: 100px;
	left: 25px;

	& .details__heading {
		display: flex;
		width: 85%;
		justify-content: space-between;
	}

	@media (min-width: 640px) {
		left: 20px;
	}

	@media (min-width: 768px) {
		left: 40px;
		height: 90vh;
		flex-basis: 50%;

		& .details__heading {
			display: flex;
			width: 100%;
			justify-content: space-between;
		}
	}

	@media (min-width: 1280px) {
		height: 85vh;
		flex-basis: 70%;
	}
`;

export const Heading = styled.div`
	color: rgba(255, 138, 0, 1);

	& h1 {
		z-index: 10;
		font-size: 21px;
		font-weight: bold;
	}

	& div {
		background: #eee;
		height: 5px;
		top: -10px;
		z-index: 1;
	}

	@media (min-width: 640px) {
		& h1 {
			font-size: 24px;
		}
	}

	@media (min-width: 768px) {
		& h1 {
			font-size: 36px;
		}
	}

	@media (min-width: 1024px) {
	}
`;

export const DropshipCheck = styled.div`
	top: 5px;
	font-size: 12px;

	& label {
		color: rgba(45, 42, 64, 1);
		margin-left: 10px;
	}

	@media (min-width: 768px) {
		top: 15px;

		& label {
			font-size: 18px;
		}
	}
`;

export const Form = styled.form`
	display: inline-block;

	@media (min-width: 640px) {
	}

	@media (min-width: 768px) {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	@media (min-width: 1024px) {
	}
`;

export const Input = styled.input`
	margin-top: 20px;
	width: 80vw;
	height: 40px;
	border: ${(props) => (props.error ? "1px solid red" : "")};

	@media (min-width: 768px) {
		margin-top: 20px;
		width: 30vw;
		height: 60px;
	}
`;

export const Textarea = styled.textarea`
	margin-top: 20px;
	width: 80vw;
	height: 80px;
	border: ${(props) => (props.error ? "1px solid red" : "")};

	@media (min-width: 768px) {
		margin-top: 20px;
		width: 30vw;
		height: 120px;
	}
`;
