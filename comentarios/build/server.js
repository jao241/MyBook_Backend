"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
require("./connection/connection");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./route/route"));
const app = (0, express_1.default)();
const port = 3003;
app.use((0, cors_1.default)());
app.use(route_1.default);
app.listen(port, () => console.log("Service comments running."));
