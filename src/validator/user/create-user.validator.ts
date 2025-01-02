// src/validators/createUserValidator.ts
import { check } from 'express-validator';

export const create_user_validator = () => {
  return [
    check('name')
      .notEmpty()
      .withMessage('Tên không được để trống')
      .isLength({ min: 3 })
      .withMessage('Tên phải có ít nhất 3 ký tự'),
    check('email').isEmail().withMessage('Email không hợp lệ').normalizeEmail(),
    check('password')
      .isLength({ min: 6 })
      .withMessage('Mật khẩu phải có ít nhất 6 ký tự'),
    check('age').isInt({ min: 18 }).withMessage('Tuổi phải từ 18 trở lên'),
    check('address').notEmpty().withMessage('Địa chỉ không được để trống'),
  ];
};
