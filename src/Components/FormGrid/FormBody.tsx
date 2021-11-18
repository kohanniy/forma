import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const FormBody = styled((props) => <Container disableGutters {...props} />)`
  &.MuiContainer-root {
    display: flex;
    justify-content: space-between;
    padding-left: 27px;
    padding-right: 80px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
    
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export default FormBody;
