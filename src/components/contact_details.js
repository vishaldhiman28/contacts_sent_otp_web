import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Link}  from 'react-router-dom';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function ContactDetails(props) {
  const [open, setOpen] = React.useState(false);
  const items = props.items;
  const isContact = props.isContact;
  const toMsg = "/sendMsg/" + items.mobile_number +"/" + items.name;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if(isContact)
  {
  return (
      <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         {items.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Mobile Number: {items.mobile_number}
            </Typography>
            <Button component={Link}   to={toMsg} variant="outlined" color="primary" >
                Send Message
              </Button>

        </DialogContent>
      </Dialog>
      </div>
  );
  }
  else{
    return (
      <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Show Message
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         {items.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Text: {items.body}
            </Typography> 
            <Typography gutterBottom>
             Date Sent: {items.date_sent}
            </Typography> 

        </DialogContent>
      </Dialog>
      </div>
  );
  }
}
