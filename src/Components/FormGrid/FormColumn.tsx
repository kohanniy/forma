import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const FormColumn = styled(({...props}) => (
  <Grid 
    item 
    md={6}
    container
    direction='column'
    {...props}
  >
    {props.children}
  </Grid>)
)`
  &.MuiGrid-root:not(:last-child) {
    margin-right: 80px;
  }

  &.MuiGrid-grid-md-6 {
    max-width: 433px;
  }
`;

export default FormColumn;
