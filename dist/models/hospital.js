"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const HospitalSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    active_patients: {
        type: Number,
    },
    max_capacity: {
        type: Number,
    },
    employees: {
        type: Number,
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    modification_date: {
        type: Date,
        default: Date.now
    }
});
;
exports.default = mongoose_1.model('Hospital', HospitalSchema);
//# sourceMappingURL=hospital.js.map