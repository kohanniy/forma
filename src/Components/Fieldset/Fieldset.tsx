import styled from "styled-components";
import Container from "@material-ui/core/Container";

const FormFieldset = styled(({ ...props }) => (
  <Container disableGutters component="fieldset" {...props}>
    {props.children}
  </Container>
))`
  border: none;
  padding: 0;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export default FormFieldset;
