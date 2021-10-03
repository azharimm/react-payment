import styled from "styled-components";

export const Back = styled.div`
    width: 80%;
	background: rgba(255, 255, 255, 1);
	opacity: 1;
	position: absolute;
	top: 30px;
	left: 25px;
	overflow: hidden;
	font-size: 12px;
	opacity: 0.6;
	cursor: pointer;
	z-index: 1;

    & span {
        top: -5px;
    }

	@media (min-width: 768px) {
		width: 10%;
		font-size: 14px;
		left: 40px;
	}
`