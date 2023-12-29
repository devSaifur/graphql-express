"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editGame = exports.deleteGame = exports.addGame = exports.getReviewOrReviews = exports.getAuthorOrAuthors = exports.getGameOrGames = exports.getReviewsByAuthorId = exports.getReviewsByGameId = exports.getReviewById = exports.getAuthorById = exports.getGameById = void 0;
const db_1 = __importDefault(require("./db"));
function getGameById(game_id) {
    return db_1.default.games.find((game) => game.id === game_id);
}
exports.getGameById = getGameById;
function getAuthorById(author_id) {
    return db_1.default.authors.find((author) => author.id === author_id);
}
exports.getAuthorById = getAuthorById;
function getReviewById(id) {
    return db_1.default.reviews.find((review) => review.game_id === id);
}
exports.getReviewById = getReviewById;
function getReviewsByGameId(id) {
    return db_1.default.reviews.filter((review) => review.game_id === id);
}
exports.getReviewsByGameId = getReviewsByGameId;
function getReviewsByAuthorId(id) {
    return db_1.default.reviews.filter((review) => review.author_id === id);
}
exports.getReviewsByAuthorId = getReviewsByAuthorId;
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
function addGame(input) {
    if (!input.platform)
        input.platform = [];
    const newGame = Object.assign(Object.assign({}, input), { id: Math.floor(Math.random() * 1000).toString() });
    db_1.default.games.push(newGame);
    return newGame;
}
exports.addGame = addGame;
function deleteGame(id) {
    const deletedGame = db_1.default.games.find((game) => game.id === id);
    db_1.default.games = db_1.default.games.filter((game) => game.id !== id);
    return deletedGame;
}
exports.deleteGame = deleteGame;
function editGame(id, edits) {
    db_1.default.games = db_1.default.games.map((game) => {
        if (game.id === id) {
            let editedGame = Object.assign(Object.assign({}, game), edits);
            return editedGame;
        }
        return game;
    });
    const editedGame = db_1.default.games.find((game) => game.id === id);
    return editedGame;
}
exports.editGame = editGame;
