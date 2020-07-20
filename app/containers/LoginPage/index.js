import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Input from 'components/Input';
import Toast from 'components/Snackbar';
import reducer from './reducer';
import saga from './getValidLoginCredentialsSaga';
import { setLoginDetails, getValidCred } from './actions';
import {
  makeSelectValidPassword,
  makeSelectValidEmail,
  makeSelectEmail,
  makeSelectPassword,
} from './selector';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(https://i.ibb.co/gJQ5TmY/login.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
  },
  header: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'x-large',
  },
  container: {
    border: '1px solid #dadce0',
    borderRadius: '8px',
    height: 'auto',
    backgroundColor: '#fafafa',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.main,
  },
  details: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: '20px',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: '4em',
  },
}));

const key = 'login';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const required = value => (value ? undefined : 'Required');

export function Login(props) {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    props.getValidCredentials();
  }, []);
  const onChangeHandler = e => {
    props.setUserDetails(e.target.name, e.target.value);
  };
  const validateLoginDetails = e => {
    e.preventDefault();
    if (props.invalid) return;
    if (
      props.validEmail === props.email &&
      props.validPassword === props.password
    ) {
      props.history.push('/dashboard');
    } else {
      setIsOpen(true);
    }
  };
  const onCloseToast = () => {
    setIsOpen(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>Welcome Back!</div>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.details} onSubmit={validateLoginDetails}>
            <Field
              label="Email Address"
              name="email"
              type="text"
              component={Input}
              {...{
                adornmentPosition: 'start',
                icon: <AccountCircleIcon />,
              }}
              validate={[required, email]}
              onChange={onChangeHandler}
            />
            <Field
              label="Password"
              name="password"
              type="password"
              component={Input}
              {...{
                adornmentPosition: 'start',
                icon: <LockIcon />,
              }}
              validate={required}
              onChange={onChangeHandler}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              title="Sign in"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                Forgot password?
              </Grid>
            </Grid>
            <Toast
              msg="Invalid Credentials"
              type="error"
              timeout={6000}
              open={isOpen}
              onCloseHandler={onCloseToast}
            />
          </form>
        </div>
      </Container>
    </div>
  );
}
Login.propTypes = {
  validPassword: PropTypes.string,
  validEmail: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  invalid: PropTypes.bool,

  setUserDetails: PropTypes.func,
  history: PropTypes.object,
  getValidCredentials: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  validPassword: makeSelectValidPassword(),
  validEmail: makeSelectValidEmail(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

export function mapDispatchToProps(dispatch) {
  return {
    setUserDetails: (field, value) => dispatch(setLoginDetails(field, value)),
    getValidCredentials: () => dispatch(getValidCred()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  reduxForm({ form: 'login-form' }),
  withConnect,
  memo,
)(Login);
