import express from 'express';
import {
  createUser,
  loginUser,
  logoutUser,
  getUsers,
  getUser,
  updateUser,
  getUsersFromGroup,
} from '../controller/user.js';
import { isAuthenticatedUser } from '../middleware/auth.js';

const router = express.Router();

router.route('/user/create').post(createUser);
router.route('/user/login').post(loginUser);
router.route('/user/logout').get(logoutUser);
router.route('/user/:id').get(isAuthenticatedUser, getUser);
router.route('/user/:id').put(isAuthenticatedUser, updateUser);
router.route('/users/:groupId').get(isAuthenticatedUser, getUsersFromGroup);

export default router;
