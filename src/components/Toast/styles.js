import styled, { css, keyframes } from "styled-components";

const translateXAnimationFrom = keyframes`
0%{
    background-color: transparent;
    transform: translateX(120%);
}

95%{
transform: translateX(-20px);
}

100%{
    transform: translateX(0);
}
`;

const translateXAnimationLeave = keyframes`
from{
transform: translateX(0);
}
to{
    background-color: transparent;
    transform: translateX(120%);
}
`;

const ToastTypeVariations = {
  sucess: css`
    svg {
      color: #3fe864;
    }
    .barra {
      background: #3fe864;
    }
  `,
  error: css`
    svg {
      color: #e83f5b;
    }
    .barra {
      background: #e83f5b;
    }
  `,
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 286px;
  position: relative;

  background: #343b41;
  color: #f8f9fa;

  padding: 16px 10px 16px 16px;
  border-radius: 10px;
  margin: 20px 22px 0px;

  ${({ type }) => ToastTypeVariations[type]}

  ${({ isLeave }) =>
    css`
      animation: ${isLeave ? translateXAnimationLeave : translateXAnimationFrom}
        0.8s;
    `}
  animation-fill-mode: forwards;

  > svg {
    margin: 4px 12px 0 0;
  }

  ${({ hasDescription }) =>
    !hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}

  div {
    strong {
      font-weight: bold;
    }
    p {
      margin-top: 4px;
      font-size: 14px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background-color: transparent;
    color: #868e96;
    cursor: pointer;

    svg {
    }
  }

  .barra {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 206px;
    height: 6px;

    border-radius: 0px 0px 0px 10px;
  }
`;
