import styled from "styled-components";
import { Paper } from "@material-ui/core";

const FormSection = styled(Paper)`
  max-width: 1238px;
  padding: 53px 73px 12px 65px;

  &.MuiPaper-rounded {
    border-radius: 14px;
  }

  &.MuiPaper-elevation1 {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  }
`;

export default FormSection;
