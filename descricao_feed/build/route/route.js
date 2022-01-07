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
const service_1 = __importDefault(require("../service/service"));
const is_alive = true;
const routes = (0, express_1.Router)();
routes.use("/is_alive", (request, response) => {
    response.json({
        request: "Is alive?",
        response: is_alive
    });
});
routes.get("/description_feed/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (is_alive) {
        const { id } = request.params;
        const feed_id = Number(id);
        const feedService = new service_1.default();
        const feeds = yield feedService.execute(feed_id);
        response.json(feeds);
    }
    else
        response.json({ message: "Serviço indisponível no momento." });
}));
exports.default = routes;
