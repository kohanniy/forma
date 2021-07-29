import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";

const ControlContainer = styled(({ logo, ...props }) => (
  <FormControl {...props}>{props.children}</FormControl>
))`
  &.MuiFormControl-root {
    position: relative;
    margin-top: ${(props) => (props.logo ? "10px" : "0")};
    align-self: ${(props) => (props.logo ? "flex-start" : "stretch")};

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  & > input[type="file"] {
    display: none;
  }
`;

export default ControlContainer;
