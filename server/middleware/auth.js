import ErrorHandler from "#utils/errorHandler.js";
import catchAsyncErrors from "./catchAsyncErrors.js";
import jwt from "jsonwebtoken";
import User from "#models/userModel.js";

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (
        !authHeader ||
        authHeader === "Bearer undefined" ||
        !authHeader.startsWith("Bearer ")
    ) {
        return next(
            new ErrorHandler("Login first to access this resource", 401)
        );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    next();
});
