import { NextFunction, Request, Response } from "express";


export const errorMiddleware = (err: any , req: Request , res: Response , next: NextFunction) => {
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined
    })
}