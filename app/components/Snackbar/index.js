import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Toast(props) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={props.open}
      autoHideDuration={props.timeout || 5000}
      onClose={props.onCloseHandler}
    >
      <Alert onClose={props.onCloseHandler} severity={props.type}>
        {props.msg}
      </Alert>
    </Snackbar>
  );
}

Toast.propTypes = {
  open: PropTypes.bool,
  msg: PropTypes.string,
  timeout: PropTypes.number,
  type: PropTypes.string,

  onCloseHandler: PropTypes.func,
};
