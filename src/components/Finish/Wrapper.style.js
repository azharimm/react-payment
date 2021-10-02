import styled from "styled-components";

export const Wrapper = styled.div`
	top: 100px;
	left: 25px;

	& .heading {
		display: block;
		width: 85%;
	}

    & .back {
        margin-top: 50px;
        font-size: 14px;
    }

    & .back span {
        top: -5px;
    }

	@media (min-width: 640px) {
		left: 20px;
	}

	@media (min-width: 768px) {
		left: 125px;
        top: 250px;
		height: 90vh;
		flex-basis: 50%;

		& .heading {
			display: flex;
			width: 100%;
			justify-content: space-between;
		}
	}

	@media (min-width: 1280px) {
        left: 465px;
		height: 85vh;
		flex-basis: 70%;
	}
`;
