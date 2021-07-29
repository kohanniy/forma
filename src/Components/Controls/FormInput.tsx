import styled from "styled-components";
import Input from "@material-ui/core/Input";

const FormInput = styled(({ ...props }) => <Input fullWidth {...props} />)`
  &.MuiInputBase-root {
    color: #223367;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0;
  }

  & .MuiInputBase-input {
    width: 100%;
    border: 1px solid #c2c2c2;
    height: auto;
    margin: 0;
    display: block;
    padding: 20px 0 20px 25px;
    box-sizing: border-box;
    border-radius: 14px;
    caret-color: #606eea;

    &::placeholder {
      color: #223367;
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0;
      opacity: 1;
      visibility: visible;
      transition: opacity 0.2s linear, visibility 0.2s linear;
    }

    &:focus {
      border-color: #606eea;
    }

    &:focus::placeholder {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s linear, visibility 0.2s linear;
    }
  }

  &.MuiInput-underline::before,
  &.MuiInput-underline::after {
    display: none;
  }

  &.MuiInput-formControl {
    margin-top: 0;
  }
`;

export default FormInput;
