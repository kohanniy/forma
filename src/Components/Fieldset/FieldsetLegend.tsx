import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const FieldsetLegend = styled((props) => (
  <Typography component='legend' {...props} />
))`
  padding: 0;

  &.MuiTypography-body1 {
    font-size: 16px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0;
    color: #223367;
    margin-bottom: 10px;
  }
`;

export default FieldsetLegend;
