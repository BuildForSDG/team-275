import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, '1913155164FC4B4DA16CCEA62C6C98A6');

    req.userData = { userId: decodedToken.id };
    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
export default checkAuth;
