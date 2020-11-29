"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hospital_controller_1 = __importDefault(require("./controllers/hospital.controller"));
const routes = (app) => {
    app.use('/api/hospital', hospital_controller_1.default);
};
exports.default = routes;
//# sourceMappingURL=routes.js.map