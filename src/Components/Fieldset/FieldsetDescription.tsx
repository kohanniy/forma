import styled from "styled-components";
import FormHelperText from "@material-ui/core/FormHelperText";

const FieldsetDescription = styled(({ light = null, ...props }) => (
  <FormHelperText {...props}>{props.children}</FormHelperText>
))`
  &.MuiFormHelperText-root {
    font-weight: ${(props) => (props.light ? 400 : 300)};
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => (props.light ? "#c4c4c4" : "#223367")};
    margin-top: 0;
    margin-bottom: ${(props) => (props.light ? "19px" : "15px")};
    letter-spacing: 0;
  }
`;

export default FieldsetDescription;
