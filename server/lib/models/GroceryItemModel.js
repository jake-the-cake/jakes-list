"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroceryItemModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const GroceryItem = new mongoose_1.default.Schema({
    name: {
        type: String
    },
    category: {
        type: String,
        required: true
    }
});
exports.GroceryItemModel = mongoose_1.default.model('GroceryItem', GroceryItem);
