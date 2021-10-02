import styled from "styled-components";

export const Wrapper = styled.div`
	top: 100px;
	left: 25px;

	& .details__heading {
		display: block;
		width: 85%;
	}

	& .box {
		display: flex;
        flex-wrap: wrap;
		justify-content: flex-start;
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

export const BoxItem = styled.div`
	width: 85%;
	height: 60px;
	background: ${(props) => props.isSelected ? 'rgba(27,217,123,0.10000000149011612)' : 'rgba(255, 255, 255, 1)'};
	opacity: 1;
	position: relative;
	margin-right: 20px;
	top: 20px;
	overflow: hidden;
    cursor: pointer;
	border: ${(props) => props.isSelected ? '2px solid rgba(27,216,122,1)' : '1px solid rgba(204, 204, 204, 1)'};
    margin-top: 10px;

    & .content {
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: space-between;
		padding: 5px 10px;
	}

	& .content span {
		font-size: 13px;
	}

	& .content p {
		font-size: 16px;
        margin-top: 5px;
	}

    & .content svg {
		color: green;
	}

    @media (min-width: 768px) {
		width: 180px;
	}
`;
