import  Jwt  from "jsonwebtoken";
import users from '../models/user.models'


const SECRET_KEY = 'secret';




const verifyToken = (req, res, next) => {
    // Get the token from the request header
    const token = req.headers['x-access-token'];
  
    if (!token) {
      return res.status(401).send({
        message: 'No token provided'
      });
    }
  
    // Verify the token using the secret key
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'Token is not valid'
        });
      }
      req.userId = decoded.id;
      next();
    });
  }



  
  

  export default {
    verifyToken,
  };