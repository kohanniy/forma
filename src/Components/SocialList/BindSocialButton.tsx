import styled from "styled-components";
import Button from "@material-ui/core/Button";

const BindSocialButton = styled(({ ...props }) => (
  <Button {...props}>{props.children}</Button>
))`
  &.MuiButton-root {
    color: #3492ff;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
    border-radius: 4px;
    letter-spacing: 0;
    text-transform: none;
    padding-right: 0;
  }
`;

export default BindSocialButton;
