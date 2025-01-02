import { Router } from 'express';
import { createUser, getUserById, getUsers } from '../controllers/users';
import { create_user_validator } from '../validator/user/create-user.validator';

const router = Router();

// /api/users

router.get('/', getUsers);

// /api/users/123
router.get('/:id', getUserById);

// /api/users

router.post('/', create_user_validator(), createUser);

export default router;
