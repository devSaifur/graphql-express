"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("graphql-http/lib/use/express");
const schema_1 = require("./schema");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.all('/', (0, express_2.createHandler)({ schema: schema_1.schema }));
app.listen(PORT, () => {
    console.log(`GraphQL server is running on ${PORT}`);
});
