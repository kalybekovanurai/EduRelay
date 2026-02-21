import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f4ff;
`;

export const Spinner = styled.div`
  border: 6px solid #e0e0e0;
  border-top: 6px solid #297cfe;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`;

export const Message = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #297cfe;
  text-align: center;
`;
