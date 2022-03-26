import jwt from 'jsonwebtoken';
// eslint-disable-next-line import/prefer-default-export
export const verifiquedToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      errors: ['Não autorizado'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userID = id;
    req.userEmail = email;
  } catch (e) {
    console.log(e);
    res.status(401).json({
      errors: ['Não autorizado'],
    });
  }
  next();
};
