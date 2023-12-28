"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewOrReviews = exports.getAuthorOrAuthors = exports.getGameOrGames = exports.getReviewById = exports.getAuthorById = exports.getGameById = void 0;
const db_1 = __importDefault(require("./db"));
function getGameById(game_id) {
    return db_1.default.games.filter((game) => game.id === game_id);
}
exports.getGameById = getGameById;
function getAuthorById(author_id) {
    return db_1.default.authors.filter((author) => author.id === author_id);
}
exports.getAuthorById = getAuthorById;
function getReviewById(id) {
    return db_1.default.reviews.filter((review) => review.game_id === id);
}
exports.getReviewById = getReviewById;
function getGameOrGames(id) {
    if (id)
        return db_1.default.games.filter((game) => game.id === id);
    return db_1.default.games;
}
exports.getGameOrGames = getGameOrGames;
function getAuthorOrAuthors(id) {
    if (id)
        return db_1.default.authors.filter((author) => author.id === id);
    return db_1.default.authors;
}
exports.getAuthorOrAuthors = getAuthorOrAuthors;
function getReviewOrReviews(id) {
    if (id)
        return db_1.default.reviews.filter((review) => review.id === id);
    return db_1.default.reviews;
}
exports.getReviewOrReviews = getReviewOrReviews;
