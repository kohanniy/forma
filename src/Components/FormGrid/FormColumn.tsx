import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const FormColumn = styled((props) => (
  <Grid item xs={12} md={6} container direction='column' {...props} />
))`
  &.MuiGrid-root:not(:last-child) {
    margin-right: 80px;
  }

  &.MuiGrid-grid-md-6 {
    max-width: 433px;
  }
`;

export default FormColumn;
