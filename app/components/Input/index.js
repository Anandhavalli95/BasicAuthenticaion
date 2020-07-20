import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function Input(props) {
  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id={props.input.name}
        label={props.label}
        name={props.input.name}
        type={props.type}
        value={props.input.value}
        autoFocus
        required
        InputProps={
          props.adornmentPosition === 'start' && {
            startAdornment: (
              <InputAdornment position={props.adornmentPosition}>
                {props.icon}
              </InputAdornment>
            ),
          }
        }
        onChange={props.input.onChange}
      />
      {!props.meta.pristine && props.meta.error && (
        <span style={{ color: 'red' }}>{props.meta.error}</span>
      )}
    </React.Fragment>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.node,
  adornmentPosition: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,

  input: PropTypes.object,
};
