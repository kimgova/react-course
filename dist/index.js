"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("config"));
const db_1 = __importDefault(require("./repositories/db"));
let port = config_1.default.get('port');
if (!port) {
    process.exit(1);
}
const PORT = parseInt(port, 10);
const db_connection = new db_1.default();
const { connect_db } = db_connection;
const server = app_1.default.listen(PORT, () => {
    connect_db();
    console.log(`Listening on port ${PORT}`);
});
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
//# sourceMappingURL=index.js.map