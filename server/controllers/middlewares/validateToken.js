import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');
    if (!token) {
      throw new Error();
    }
    const decodedToken = jwt.verify(token, process.env.JWT);
    req.user = decodedToken;
    next();
  } catch (err) {
    res
      .status(401)
      .json({
        name: 'Access error',
        message: 'You must be log in before access this page!',
      });
  }
};

export default validateToken;
