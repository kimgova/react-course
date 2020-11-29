import {Request, Response} from 'express';

export class ErrorHandler extends Error {
    statusCode = 0;
    constructor(statusCode: number, message: string){
        super();
        this.statusCode = statusCode;
        this.message = message; //se hereda de la clase Error de JS
    }
}

export const handleError = (err: ErrorHandler, req: Request, res: Response): void => {
    const {statusCode, message} = err;
    res.status (statusCode).json({
        status: err.name,
        statusCode,
        message,
    })
}