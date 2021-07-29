import styled from "styled-components";
import Container from "@material-ui/core/Container";

const FormBody = styled(({ ...props }) => (
  <Container disableGutters {...props}>
    {props.children}
  </Container>
))`
  &.MuiContainer-root {
    display: flex;
    justify-content: space-between;
    padding-left: 27px;
    padding-right: 80px;

    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export default FormBody;
