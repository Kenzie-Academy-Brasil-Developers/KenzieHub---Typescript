import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  padding: 50px;

  width: 90%;
  height: 100vh;

  nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    width: 100%;
    max-width: 1440px;
    height: 72px;

    border-bottom: 1px solid #212529;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;

      width: 100%;
      max-width: 1440px;
      height: 72px;

      .return {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2426px;

        text-decoration: none;

        width: 55.49px;
        height: 32px;

        background: #212529;
        color: #f8f9fa;
        border-radius: 4px;

        &:hover {
          background: #343b41;
        }
      }
    }
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    max-width: 1440px;
    height: 118px;

    border-bottom: 1px solid #212529;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      color: #f8f9fa;
    }

    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;

      color: #868e96;
    }
  }

  main {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1440px;

    height: 90%;

    .tech {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      max-width: 1440px;
    }
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      color: #f8f9fa;
    }

    button {
      width: 32px;
      height: 32px;
      padding: 0;
      border: 0;

      border: transparent;

      background: #212529;
      border-radius: 4px;

      .add {
        width: 32px;
        height: 32px;

        border-radius: 4px;

        background: #212529;
        color: #ffffff;
        cursor: pointer;
        &:hover {
          background: #343b41;
        }
      }
    }
    ul {
      max-width: 1440px;

      display: flex;
      flex-direction: column;
      background: #212529;
      border-radius: 4px;

      padding: 20px;

      gap: 16px;

      li {
        width: 99%;
        height: 49px;

        list-style-type: none;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
        align-items: center;

        padding-left: 10px;

        background: #121214;
        border-radius: 4px;

        .title {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 14.21px;
          line-height: 22px;

          color: #ffffff;
        }
        .status {
          position: absolute;
          right: 20%;

          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 12.182px;
          line-height: 22px;

          text-align: right;

          color: #868e96;
        }
        button {
          padding: 0;
          border: 0;
          background-color: #121214;
        }
        .trash {
          background: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          &:hover {
            background: #343b41;
          }
        }
      }
    }
  }
`;

export const Modal = styled.div`
  box-sizing: content-box;

  width: 23.125rem;
  height: 23.125rem;

  box-sizing: border-box;

  gap: 22px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  margin: auto;

  z-index: 3;
  position: fixed;
  top: 210px;
  right: 50%;
  left: 40%;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media screen and (max-width: 1440px) {
    left: 35%;
  }
  @media screen and (max-width: 768px) {
    left: 20%;
  }
  @media screen and (max-width: 425px) {
    width: 25rem;
    left: 5%;
  }
  @media screen and (max-width: 375px) {
    width: 22rem;
    left: 8%;
  }
  @media screen and (max-width: 320px) {
    width: 21rem;
    left: 7.5%;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 50px;

    padding: 12px 20px;
    gap: 10px;

    background: #343b41;
    border-radius: 4px 4px 0px 0px;

    h2 {
      width: 147px;
      height: 24px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;

      color: #f8f9fa;
    }
    button {
      width: 11px;
      height: 26px;

      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;

      color: #868e96;

      border: transparent;
      background-color: transparent;

      cursor: pointer;
      &:hover {
        color: #121214;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;

    margin: 0 auto;

    gap: 15px;

    @media screen and (max-width: 320px) {
      width: 18rem;
    }

    label {
      width: 100px;
      height: 20px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 20px;

      color: #f8f9fa;
    }
    input {
      box-sizing: border-box;

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 16.2426px;
      gap: 10.15px;

      width: 329.93px;
      height: 48px;

      background: #343b41;

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;

      color: #f8f9fa;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;

      @media screen and (max-width: 320px) {
        width: 18rem;
      }
    }
    input::placeholder {
      color: #f8f9fa;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
    }
    select {
      box-sizing: border-box;

      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 16.2426px;
      gap: 10.15px;

      width: 329.93px;
      height: 48px;

      background: #343b41;

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;

      color: #f8f9fa;

      @media screen and (max-width: 320px) {
        width: 18rem;
      }
    }
    button {
      box-sizing: border-box;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px 22.3336px;
      gap: 10.15px;

      width: 324px;
      height: 48px;

      background: #ff577f;

      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;

      color: #ffffff;

      cursor: pointer;

      @media screen and (max-width: 320px) {
        width: 18rem;
      }

      &:hover {
        background-color: #ff427f;
      }
    }
  }
`;

export const Loanding = styled.h2`
  position: absolute;
  font-size: 3rem;
  color: #383d52;

  &::before {
    content: attr(data-text);
    position: absolute;
    width: 0%;
    height: 100%;
    color: #2cc3ff;
    -webkit-text-stroke: 0vw #383d52;
    border-right: 2px solid #2cc3ff;
    overflow: hidden;
    animation: animate 6s linear infinite;
  }
  @keyframes animate {
    0% {
      width: 0;
    }
    70% {
      width: 100%;
    }
  }
`;
