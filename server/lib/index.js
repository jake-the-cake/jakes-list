"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const APP = (0, express_1.default)();
const PORT = process.env.PORT || 4200;
dotenv_1.default.config();
APP.use(express_1.default.urlencoded({ extended: true }));
APP.use(express_1.default.json());
APP.use((0, cors_1.default)());
mongoose_1.default
    .connect(process.env.MONGO_DB, () => {
    var _a;
    const dbFolder = (_a = process.env.MONGO_DB) === null || _a === void 0 ? void 0 : _a.split('/');
    console.log(`Jake's List is reading/writing data at 'db://${dbFolder[dbFolder.length - 1]}'`);
});
APP.listen(PORT, () => {
    console.log(`Jake's List API is live on port ${PORT}`);
});
