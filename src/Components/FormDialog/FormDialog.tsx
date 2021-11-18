import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

interface IProps {
  dialogTitle: string;
  content?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onSaveButtonClick: () => void;
  buttonText: string | React.ReactNode;
}

const FormDialog = (props: IProps) => {
  const { dialogTitle, content, open, onClose, onSaveButtonClick, buttonText } =
    props;

  return (
    <>
      <Dialog
        fullWidth
        open={open}
        onClose={onClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>{dialogTitle}</DialogTitle>
        {content ? <DialogContent>{content}</DialogContent> : null}
        <DialogActions>
          <Button onClick={onSaveButtonClick} color='primary'>
            {buttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
