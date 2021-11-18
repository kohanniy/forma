import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const FormTextarea = styled((props) => <TextField multiline {...props} />)`
  &.MuiFormControl-root {
    box-sizing: border-box;
    min-height: 124px;
  }

  & .MuiInputBase-multiline {
    padding: 0;
  }

  & .MuiInputBase-root {
    color: #223367;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0;
    border: 1px solid #c2c2c2;
    padding: 20px 22px 20px 25px;
    border-radius: 14px;

    &.Mui-focused {
      border-color: #606eea;
    }
  }

  & .MuiInput-underline::before,
  & .MuiInput-underline::after {
    display: none;
  }

  & .MuiInputBase-inputMultiline {
    resize: vertical;
  }

  & .MuiInputBase-input {
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

    &:focus::placeholder {
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s linear, visibility 0.2s linear;
    }
  }
`;

export default FormTextarea;
