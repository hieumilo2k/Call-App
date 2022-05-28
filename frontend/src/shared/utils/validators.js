export const validateLoginForm = ({ email, password }) => {
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, username, password }) => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateUsername(username)
  );
};

export const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};

export const validateEmail = (email) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailPattern.test(email);
};

export const validateUsername = (username) => {
  return username.length > 2 && username.length < 13;
};
