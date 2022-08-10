import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 50px;

  flex-direction: column;
  align-items: center;
  div {
    width: 326px;
    position: relative;
    h5 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 100;
      font-size: 12px;

      color: red;
      margin: 0;
      height: 0;
    }
  }
  .errorName {
    position: absolute;
    top: 152px;
    left: 105px;
  }
  .errorEmail {
    position: absolute;
    top: 235px;
    left: 105px;
  }
  .errorPassword {
    position: absolute;
    top: 315px;
    left: 105px;
  }
  .errorConfirmPassword {
    position: absolute;
    width: 320px;
    top: 397px;
    left: 105px;
  }
  .errorBio {
    position: absolute;
    top: 475px;
    left: 105px;
  }
  .errorContact {
    position: absolute;
    width: 320px;
    top: 560px;
    left: 105px;
  }
`;
export const Header = styled.header`
  display: flex;
  width: 369px;
  justify-content: space-between;
  align-items: center;

  margin: auto;
  margin-top: 50px;

  @media screen and (max-width: 425px) {
    width: 300px;
  }

  .return {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;

    text-decoration: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    width: 67.49px;
    height: 40.11px;

    color: #f8f9fa;
    background-color: #212529;

    border-radius: 4px;

    &:hover {
      background: #868e96;
    }
  }
`;

export const Form = styled.form`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  padding: 42px 22px;
  gap: 15px;

  position: absolute;
  width: 370px;
  height: 800px;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media screen and (max-width: 375px) {
    width: 340px;
  }
  @media screen and (max-width: 325px) {
    width: 295px;
    overflow: hidden;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      width: 127px;
      height: 28px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;

      color: #f8f9fa;
    }

    h2 {
      width: 166px;
      height: 22px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;

      color: #868e96;
    }
  }

  label {
    width: 120px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;

    color: #f8f9fa;
  }

  input {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;

    width: 329.93px;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #343b41;
    border-radius: 4px;

    &:hover {
      background: #343b41;
      color: #f8f9fa;

      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
    }

    @media screen and (max-width: 375px) {
      width: 300px;
    }

    @media screen and (max-width: 325px) {
      width: 250px;
    }
  }
  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 329.93px;
    height: 48px;

    background: #343b41;
    color: #868e96;

    border: 1.2182px solid #343b41;
    border-radius: 4px;

    @media screen and (max-width: 375px) {
      width: 300px;
    }

    @media screen and (max-width: 325px) {
      width: 250px;
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

    width: 326px;
    height: 48px;

    background: #59323f;
    color: #ffffff;

    border: 1.2182px solid #59323f;
    border-radius: 4px;

    &:hover {
      background: #ff427f;
      cursor: pointer;
    }

    @media screen and (max-width: 375px) {
      width: 300px;
    }

    @media screen and (max-width: 325px) {
      width: 250px;
    }
  }
`;

export const Sucess = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  width: 286px;
  height: 69px;

  background: #343b41;
  border-radius: 4px;

  margin-bottom: 20px;

  position: absolute;
  top: 80px;
  right: 30px;

  @media screen and (max-width: 325px) {
    width: 250px;
  }

  .sucess {
    width: 28px;
    height: 28px;

    margin-left: 10px;

    color: #3fe864;
  }

  h4 {
    color: #f8f9fa;
    margin-left: 12px;
  }

  span {
    color: #868e96;

    position: absolute;
    top: 5px;
    right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
  div {
    width: 206px;
    height: 6px;
    background: #3fe864;
    border-radius: 0px 0px 0px 4px;
  }
`;
export const Negative = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  width: 286px;
  height: 69px;

  background: #343b41;
  border-radius: 4px;

  position: absolute;
  top: 160px;
  right: 30px;

  @media screen and (max-width: 325px) {
    width: 250px;
  }

  .negative {
    width: 28px;
    height: 28px;

    margin-left: 10px;

    color: #e83f5b;
  }

  h4 {
    width: 200px;
    height: 25px;
    color: #f8f9fa;
    margin-left: 12px;
  }

  span {
    color: #868e96;

    position: absolute;
    top: 5px;
    right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
  div {
    width: 206px;
    height: 6px;

    background: #e83f5b;
    border-radius: 0px 0px 0px 4px;
  }
`;
