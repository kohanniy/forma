import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { SaveIcon } from "../Icons/Icons";

const SubmitButton = styled(({ ...props }) => (
  <Button
    {...props}
    variant="contained"
    color="primary"
    startIcon={<SaveIcon />}
  >
    {props.children}
  </Button>
))`
  &.MuiButton-root {
    padding: 13px 25px;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;
    border-radius: 14px;
    letter-spacing: 0;
    text-transform: none;
  }

  &.MuiButton-contained {
    color: #fff;
    background: #606eea;
    box-shadow: 0px 4px 9px rgba(96, 110, 234, 0.46);
  }

  & .MuiButton-startIcon {
    display: inherit;
    margin-left: 0;
    margin-right: 15px;
  }

  & MuiButton-iconSizeMedium {
    width: 24px;
    height: 24px;
  }
`;

export default SubmitButton;
