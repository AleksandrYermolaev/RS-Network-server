const isPasswordValid = (password, repeatedPassword) => {
  if (password !== repeatedPassword) {
    return false;
  }
  return true;
};

export default isPasswordValid;
