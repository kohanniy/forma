import styled from "styled-components";
import Select from "@material-ui/core/Select";

const FormSelect = styled(({ ...props }) => (
  <Select {...props}>{props.children}</Select>
))`
  &.MuiInputBase-root {
    color: #223367;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0;
  }

  &.MuiInput-formControl {
    margin-top: 0;
  }

  &.MuiInput-underline::before,
  &.MuiInput-underline::after,
  & .MuiSvgIcon-root {
    display: none;
  }

  & .MuiSelect-select {
    border-radius: 14px;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: 20px 0 20px 25px;
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    max-width: 100%;

    &:focus {
      border-radius: 14px;
      border-color: #606eea;
    }
  }
`;

export default FormSelect;
