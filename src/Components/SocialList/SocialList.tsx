import styled from "styled-components";
import List from "@material-ui/core/List";

const SocialList = styled(({ ...props }) => (
  <List {...props}>{props.children}</List>
))`
  &.MuiList-padding {
    padding-top: 20px;
    padding-bottom: 0;
  }
`;

export default SocialList;
