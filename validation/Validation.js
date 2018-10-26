import { isEmpty } from "lodash";

import Validator from "is_js";

export function validateLogin(user) {
  let errors = {};

  if (Validator.empty(user.email)) {
    errors.email = "Please Enter Email";
  }

  if (!Validator.empty(user.email) && !Validator.email(user.email)) {
    errors.email = "Email Format is invalid ";
  }

  if (Validator.empty(user.password)) {
    errors.password = "Please enter password";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}

export function validateSignup(user) {
  let errors = {};

  if (Validator.empty(user.name)) {
    errors.name = "Please Enter Name";
  }

  if (Validator.empty(user.username)) {
    errors.username = "Please Enter Username";
  }

  if (Validator.empty(user.email)) {
    errors.email = "Please Enter Email";
  }

  if (!Validator.empty(user.email) && !Validator.email(user.email)) {
    errors.email = "Email Format is invalid ";
  }

  if (user.password.length < 4) {
    errors.password = "Password Too Short";
  } else if (user.password !== user.confirmpassword) {
    errors.confirmpassword = "Password Not Match";
  }

  if (Validator.empty(user.password)) {
    errors.password = "Please Enter Password";
  }

  if (Validator.empty(user.confirmpassword)) {
    errors.confirmpassword = "Please Enter Password";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
