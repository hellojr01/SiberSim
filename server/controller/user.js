import User from '../models/userModel.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import sendToken from '../utils/jwtToken.js';

/*
 * Create user
 * Path: server/controller/user.js
 * Parameter: req, res, next
 * Return: res
 */
export const createUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const { username, email, password, avatar } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: 'Email already registered' });
    }

    user = await User.create({
      username,
      email,
      password,
      avatar,
    });

    sendToken(user, 201, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
 * Login user
 * Path: server/controller/user.js
 * Parameter: req, res, next
 * Return: res
 */
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler('Please enter email & password', 400));

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler('Invalid email or password', 401));
  }

  sendToken(user, 201, res);
});

/*
 * Logout user
 * Path: server/controller/user.js
 * Parameter: req, res, next
 * Return: res
 */
export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.status(200).json({
    success: true,
    message: 'Logged out',
  });
});

/*
 * Get all users
 * Path: server/controller/user.js
 * Parameter: req, res, next
 * Return: res
 */
export const getUsers = catchAsyncErrors(async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
 * Get a user
 * Path: server/controller/user.js
 * Parameter: req, res, next
 * Return: res
 */
export const getUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return next(new ErrorHandler('User not found', 404));
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
 * Update a user
 * Path: server/controller/user.js
 * Parameter: req, res, next
 * Return: res
 */
export const updateUser = catchAsyncErrors(async (req, res, next) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return next(new ErrorHandler('User not found', 404));
    }

    user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
 * Get users from a group
 * Path: server/controller/user.js
 * Parameter: req, res, next
 * Return: res
 */
export const getUsersFromGroup = catchAsyncErrors(async (req, res, next) => {
  try {
    const users = await User.find({ groups: req.params.groupId });
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
