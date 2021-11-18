import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import SubmitButton from '../Controls/SubmitButton';

const FooterContainer = styled((props) => <Grid {...props} />)`
  position: sticky;
  bottom: 0;
  padding: 23px 27px;
  border-top: 1px solid #000;
  z-index: 100;
  background: #fff;
`;

const FormFooter = () => {
  return (
    <FooterContainer>
      <SubmitButton>Сохранить</SubmitButton>
    </FooterContainer>
  );
};

export default FormFooter;
