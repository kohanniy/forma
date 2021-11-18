import styled from 'styled-components';
import FormLabel from '@material-ui/core/FormLabel';

const Label = styled((props) => <FormLabel {...props} />)`
  &.MuiFormLabel-root {
    color: #c7c7c7;
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    letter-spacing: 1px;
    margin-bottom: 10px;

    &.Mui-focused {
      color: #c7c7c7;
    }
  }
`;

export default Label;
