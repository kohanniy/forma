import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ControlContainer from '../Controls/ControlContainer';
import FormDialog from '../FormDialog/FormDialog';
import { DeleteLogoIcon } from '../Icons/Icons';

const Wrapper = styled((props) => <ControlContainer {...props} />)`
  cursor: pointer;

  @media (hover: hover) {
    &:hover > div {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Logo = styled((props) => <Avatar {...props} />)`
  margin: 0;

  &.MuiAvatar-square {
    border-radius: 14px;
  }

  &.MuiAvatar-root {
    width: 150px;
    height: 150px;
  }
`;

const DeleteLogoButtonWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background-color: rgba(34, 51, 103, 0.75);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
`;

const DeleteLogoButton = styled((props) => <IconButton {...props} />)`
  &.MuiIconButton-root {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.25);

    &:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`;

interface IFormLogoProps {
  src: string;
}

const FormLogo = (props: IFormLogoProps) => {
  const { src } = props;

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDeleteLogoButtonClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <Wrapper>
      <Logo src={src} alt='logo' variant='square' component='figure' />
      <DeleteLogoButtonWrap>
        <DeleteLogoButton onClick={handleDeleteLogoButtonClick}>
          <DeleteLogoIcon />
        </DeleteLogoButton>
      </DeleteLogoButtonWrap>
      <FormDialog
        buttonText='Да'
        dialogTitle='Вы уверены?'
        open={dialogOpen}
        onClose={handleDialogClose}
        onSaveButtonClick={handleDialogClose}
      />
    </Wrapper>
  );
};

export default FormLogo;
