import includes from 'lodash.includes';
import { BadRequest } from 'express-http-errors-json';

export default function enumParam(paramName, allowedValues) {
  return (req, res, next) => {
    if(!includes(allowedValues, req.body[paramName])) {
      BadRequest(res, `Parameter ${paramName}'s value is not allowed. Allowed values: ${allowedValues}'`);
      return;
    }
    next();
  };
}
