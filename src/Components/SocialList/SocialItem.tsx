import React from 'react';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import FormDialog from '../FormDialog/FormDialog';
import BindSocialButton from './BindSocialButton';
import FormInput from '../Controls/FormInput';
import { DeleteCategoryIcon } from '../Icons/Icons';

const StyledItem = styled((props) => <ListItem {...props} />)`
  &.MuiListItem-root {
    padding-top: 0;
    padding-bottom: 0;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

const StyledAvatar = styled((props) => <Avatar {...props} />)`
  &.MuiAvatar-root {
    width: 41px;
    height: 41px;
    border-radius: 14px;
    margin-right: 20px;
  }

  &.MuiAvatar-colorDefault {
    background-color: #606eea;
  }
`;

const StyledListItemText = styled((props) => <ListItemText {...props} />)`
  &.MuiListItemText-root {
    margin-top: 0;
    margin-bottom: 0;

    &:not(:last-child) {
      margin-right: auto;
    }
  }

  & > .MuiTypography-body1 {
    font-size: 16px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0;
    color: #223367;
  }
`;

const StyledChip = styled((props) => <Chip {...props} />)`
  &.MuiChip-root {
    color: #223367;
    padding: 5px;
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    white-space: nowrap;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
  }

  & > .MuiChip-label {
    max-width: 151px;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 0;
    padding-right: 0;
    margin-right: 9px;
    text-overflow: ellipsis;
  }

  & svg {
    order: 1;
    width: 7px;
    height: 7px;

    & path {
      fill: #1890ff;
    }
  }
`;

interface IProps {
  id: string;
  icon: React.ReactNode;
  socialName: string;
}

const SocialItem = (props: IProps) => {
  const { id, icon, socialName } = props;

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [chipContent, setChipContent] = React.useState('');

  const handleBindSocialButtonClick = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleChipClick = () => {
    setDialogOpen(true);
    setInputValue(chipContent);
  };

  const handleSave = () => {
    setChipContent(inputValue);
    setInputValue('');
    setDialogOpen(false);
  };

  return (
    <StyledItem key={id} disableGutters>
      <StyledAvatar>{icon}</StyledAvatar>
      <StyledListItemText id={id} primary={socialName} />
      {chipContent !== '' ? (
        <StyledChip
          label={chipContent}
          clickable
          icon={<DeleteCategoryIcon />}
          onClick={handleChipClick}
        />
      ) : (
        <BindSocialButton onClick={handleBindSocialButtonClick}>
          Связать
        </BindSocialButton>
      )}
      <FormDialog
        buttonText='Связать'
        dialogTitle='Укажите ссылку'
        open={dialogOpen}
        content={
          <FormInput
            autoFocus
            id={`company${id}Link`}
            type='url'
            name={`${id}-link`}
            onChange={handleChange}
            value={inputValue}
          />
        }
        onClose={handleDialogClose}
        onSaveButtonClick={handleSave}
      />
    </StyledItem>
  );
};

export default SocialItem;
