import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const ButtonLoadMore = styled.button`
  display: inline-block;
  margin-left: 50%;
  margin-bottom: 28px;
  transform: translateX(-50%);
  min-width: 60px;
  padding: 14px;
  border-radius: 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  background-color: #5f116f;
  color: #fff;
  animation: ${gradientAnimation} 2s linear infinite alternate-reverse;

  &:hover {
    animation-play-state: paused;
    background: linear-gradient(45deg, #ff0050, #ffa700, #00ff41, #0084ff);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 3s ease infinite;
  }

  &:focus {
    outline: none;
    animation-play-state: paused;
    background: linear-gradient(45deg, #ff0050, #ffa700, #00ff41, #0084ff);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 3s ease infinite;
  }
`;
