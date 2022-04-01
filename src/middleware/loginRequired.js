import jwt from 'jsonwebtoken';
import User from '../model/UserModel';

// eslint-disable-next-line import/prefer-default-export
export const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      errors: ['Não autorizado'],
    });
    return;
  }

  try {
    const [, token] = authorization.split(' ');
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        email,
        id,
      },
    });

    if (!user) {
      const newLocal = res.status(401).json({
        errors: ['Usuario não encontrado'],
      });
      // eslint-disable-next-line consistent-return
      return newLocal;
    }

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
