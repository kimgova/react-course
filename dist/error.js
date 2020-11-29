"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = 0;
        this.statusCode = statusCode;
        this.message = message; //se hereda de la clase Error de JS
    }
}
exports.ErrorHandler = ErrorHandler;
const handleError = (err, req, res) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({
        status: err.name,
        statusCode,
        message,
    });
};
exports.handleError = handleError;
//# sourceMappingURL=error.js.map