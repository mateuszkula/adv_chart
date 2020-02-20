import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    opacity: 0.9;
    transform: translateY(0);
  }

  100% {
    opacity: 0.2;
    transform: translateY(-24px);
  }
`;
export const Loader = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 24px;

  span {
    display: inline-block;
    vertical-align: middle;
    width: 12px;
    height: 12px;
    margin: 8px;
    border-radius: 50%;
    background: #0f8b8d;
    animation: ${loadingAnimation} 0.7s infinite alternate;
  }

  span:nth-of-type(2) {
    animation-delay: 0.3s;
  }

  span:nth-of-type(3) {
    animation-delay: 0.6s;
  }
`;
