import styled from "styled-components";
import Button from "@material-ui/core/Button";
import FieldsetDescription from "../Fieldset/FieldsetDescription";
import ControlContainer from "../Controls/ControlContainer";
import { UploadLogoIcon } from "../Icons/Icons";

const StyledButton = styled(({ ...props }) => (
  <Button {...props} variant="contained" endIcon={<UploadLogoIcon />}>
    {props.children}
  </Button>
))`
  align-self: flex-start;

  &.MuiButton-contained {
    color: #606eea;
    box-shadow: none;
    background: rgba(96, 110, 234, 0.1);
  }

  &.MuiButton-root {
    padding: 14px 25px;
    font-size: 18px;
    line-height: 21px;
    border-radius: 14px;
    letter-spacing: 0;
    text-transform: none;
  }

  & .MuiButton-endIcon {
    margin-left: 10px;
    margin-right: 0;
  }
`;

interface IProps {
  description?: string;
  uploadBtnText: string;
  id: string;
  type: string;
  accept: string;
  name: string;
}

const UploadButton = (props: IProps) => {
  const { description, uploadBtnText, id, type, accept, name } = props;

  return (
    <ControlContainer fullWidth>
      {description ? (
        <FieldsetDescription light>{description}</FieldsetDescription>
      ) : null}
      <input accept={accept} id={id} multiple type={type} name={name} />
      <label htmlFor={id}>
        <StyledButton component="span">{uploadBtnText}</StyledButton>
      </label>
    </ControlContainer>
  );
};

export default UploadButton;
