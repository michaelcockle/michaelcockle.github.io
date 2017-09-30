import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${spin} 3s infinite linear;
  background-image: url(/dist/img/loading.png);
  background-repeact: no-repeat;
  max-width: 80px;
`;

const Spinner = () => <Image src="/dist/img/loading.png" alt="loading indicator" />;

export default Spinner;
