"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const hospital_1 = __importDefault(require("../models/hospital"));
const error_1 = require("../error");
const router = express_1.Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, active_patients, max_capacity, employees } = req.body;
        let hospital = yield hospital_1.default.findOne({ name });
        if (hospital) {
            const custom = new error_1.ErrorHandler(400, 'Hospital already exists');
            error_1.handleError(custom, req, res);
        }
        hospital = new hospital_1.default({
            name,
            active_patients,
            max_capacity,
            employees
        });
        yield hospital.save();
        const payload = {
            user: {
                id: hospital._id
            }
        };
        jsonwebtoken_1.default.sign(payload, config_1.default.get('jwt_secret'), { expiresIn: 3600 }, (err, token) => {
            if (err)
                throw err;
            res.status(200).json({
                msg: 'Hospital created',
                data: { token }
            });
        });
    }
    catch (error) {
        const custom = new error_1.ErrorHandler(500, 'Server Error');
        error_1.handleError(custom, req, res);
    }
}));
exports.default = router;
//# sourceMappingURL=hospital.controller.js.map