import styled from "styled-components";

export const Wrapper = styled.div`
	top: 100px;
	left: 25px;
	margin-top: 50px;

	& .flex {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 30vh;
	}

	& .heading {
		display: block;
	}

	& .heading h1 {
		font-size: 21px;
		color: rgba(255, 138, 0, 1);
		font-weight: bold;
	}

	& .divider {
		display: block;
		width: 80px;
		height: 1px;
		margin: 20px 0px 20px 0px;
		background: #d8d8d8;
	}

	& .summary__details {
		display: flex;
		width: 85%;
		justify-content: space-between;
		line-height: 1.8;
	}

	& .summary__details.total {
		display: flex;
		color: rgba(255, 138, 0, 1);
		font-size: 24px;
		font-weight: bold;
		justify-content: space-between;
		line-height: 1.8;
		margin-bottom: 20px;
	}

	& .summary__button button {
		background-color: rgba(255, 138, 0, 1);
		color: #fff;
		width: 80%;
		height: 60px;
		margin-bottom: 20px;
		border: none;
		cursor: pointer;
	}

	& .summary__button button:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	@media (min-width: 640px) {
	}

	@media (min-width: 768px) {
		left: 100px;
		flex-basis: 24%;

		& .flex {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 70vh;
		}

		& .heading h1 {
			font-size: 24px;
			color: rgba(255, 138, 0, 1);
			font-weight: bold;
		}

		& .summary__details {
			width: 100%;
		}

		& .summary__button button {
			width: 100%;
			cursor: pointer;
		}

		& .summary__button button {
			width: 100%;
			cursor: pointer;
		}
	}

	@media (min-width: 1024px) {
		flex-basis: 24%;
	}

	@media (min-width: 1280px) {
		flex-basis: 22%;
	}
`;

export const Divider = styled.div`
	position: absolute;
	width: 1px;
	left: -10px;
	top: 20px;
	background: #ff8a00;
	mix-blend-mode: normal;
	opacity: 0.2;

	@media (min-width: 768px) {
		height: 66vh;
	}
`;
