import styled from "styled-components";

export const AppContainer = styled.div`
	width: 95%;
	min-height: 100px;
	background: rgba(255, 255, 255, 1);
	opacity: 1;
	position: absolute;
	
	left: 10px;
	border: 0px solid rgba(150, 150, 150, 1);
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	box-shadow: 2px 10px 20px rgb(1 1 0 / 10%);
	/* overflow: hidden; */

	@media (min-width: 640px) {
		top: 55px;
		left: 20px;
	}

	@media (min-width: 768px) {
		top: 55px;
		left: 40px;
		min-height: 90vh;
	}

	@media (min-width: 1024px) {
		top: 55px;
		min-height: 90vh;
	}
`;

export const Card = styled.div`
	display: inline;
	width: 100%;

	@media (min-width: 640px) {
		display: inline;
		width: 100%;
	}

	@media (min-width: 768px) {
		display: flex;
		width: 100%;
	}

	@media (min-width: 1024px) {
		display: flex;
		width: 100%;
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
