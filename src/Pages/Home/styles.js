import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  padding: 50px;

  width: 90%;
  height: 100%;

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
    justify-content: space-between;

    flex-wrap: wrap;

    width: 100%;
    max-width: 1440px;

    .tech {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
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
        &:hover {
          background: #343b41;
          cursor: pointer;
        }
      }
    }
  }
`;
