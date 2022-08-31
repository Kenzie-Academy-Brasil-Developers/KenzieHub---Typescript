import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 120px;

  position: relative;

  img {
    width: 144.06px;
    height: 19.97px;

    position: relative;
    top: 30px;
  }

  h2 {
    width: 49px;
    height: 28px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;

    color: #f8f9fa;

    position: relative;
    top: 60px;

    z-index: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 10px 22px 0px 22px;
  gap: 32px;

  width: 369px;
  height: 502px;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  @media screen and (max-width: 425px) {
    box-sizing: content-box;
    width: 240px;
    overflow: hidden;
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    width: 320px;

    color: #f8f9fa;
  }
  .email {
    position: absolute;
    top: 80px;
    left: 50px;

    @media screen and (max-width: 425px) {
      left: 15px;
    }
  }
  .senha {
    position: absolute;
    top: 160px;
    left: 50px;

    @media screen and (max-width: 425px) {
      left: 15px;
    }
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

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    @media screen and (max-width: 425px) {
      width: 260px;
    }

    &:hover {
      border: 1.2182px solid #f8f9fa;
      color: #f8f9fa;
    }
  }

  h5 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 100;
    font-size: 12px;

    color: red;
    margin: 0;
    height: 0;
  }
  .errorEmail {
    position: absolute;
    top: 72px;
    right: 200px;
  }

  .errorPassword {
    position: absolute;
    top: 152px;
    right: 200px;
  }

  button {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    text-decoration: none;

    width: 324px;
    height: 48px;

    background: #ff577f;
    color: #ffffff;

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;

    &:hover {
      background: #ff427f;
      cursor: pointer;
    }
    @media screen and (max-width: 425px) {
      width: 260px;
      padding: 0px;
    }
  }

  span {
    width: 170px;
    height: 18px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: #868e96;
  }

  .cadastro {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;

    text-decoration: none;

    width: 324px;
    height: 48px;

    background: #868e96;
    color: #f8f9fa;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    &:hover {
      background: #343b41;
    }

    @media screen and (max-width: 425px) {
      width: 260px;
      padding: 0px;
    }
  }
`;
