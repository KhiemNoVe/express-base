import { Request, Response } from 'express-serve-static-core';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { CreateUserQueryParams } from '../types/query-params';
import { User } from '../types/response';
import { validationResult } from 'express-validator';

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send({});
}

export function createUser(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  } else {
    res.status(201).send({
      id: 1,
      email: req.body.email,
      username: req.body.username,
    });
  }
}
