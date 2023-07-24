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

export const SearchForm = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #000;
  z-index: 10;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 80px;
  height: 40px;
  border: none;
  background-color: #5f116f;
  border-radius: 20px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
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

export const Input = styled.input`
  width: 400px;
  height: 20px;
  padding: 10px;
  text-align: center;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: #222;
  color: #fff;

  &::placeholder {
    padding: 10px;
    font-size: 16px;
    color: #888;
  }
`;
