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
const typeorm_1 = require("typeorm");
const Comentario_1 = __importDefault(require("../module/Comentario"));
class service {
    execute({ id, feed_id, usuario, datetime, conteudo }) {
        return __awaiter(this, void 0, void 0, function* () {
            const comentarioRepository = (0, typeorm_1.getRepository)(Comentario_1.default);
            const comentario = comentarioRepository.create({
                id,
                feed_id,
                usuario,
                datetime,
                conteudo
            });
            yield comentarioRepository.save(comentario);
            return comentario;
        });
    }
}
exports.default = service;
