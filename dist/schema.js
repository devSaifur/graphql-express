"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const resolvers_1 = require("./resolvers");
const GameType = new graphql_1.GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        platform: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        reviews: {
            type: new graphql_1.GraphQLList(ReviewType),
            resolve: (source) => (0, resolvers_1.getReviewById)(source.id),
        },
    }),
});
const AuthorType = new graphql_1.GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        verified: { type: graphql_1.GraphQLBoolean },
        reviews: {
            type: new graphql_1.GraphQLList(ReviewType),
            resolve: (source) => (0, resolvers_1.getReviewById)(source.id),
        },
    }),
});
const ReviewType = new graphql_1.GraphQLObjectType({
    name: 'Review',
    fields: {
        id: { type: graphql_1.GraphQLID },
        rating: { type: graphql_1.GraphQLInt },
        content: { type: graphql_1.GraphQLString },
        author_id: { type: graphql_1.GraphQLString },
        game_id: { type: graphql_1.GraphQLString },
        game: {
            type: new graphql_1.GraphQLList(GameType),
            resolve: (source) => (0, resolvers_1.getGameById)(source.game_id),
        },
        author: {
            type: new graphql_1.GraphQLList(AuthorType),
            resolve: (source) => (0, resolvers_1.getAuthorById)(source.author_id),
        },
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'Queries',
        fields: {
            games: {
                type: new graphql_1.GraphQLList(GameType),
                args: { id: { type: graphql_1.GraphQLID } },
                resolve: (_, { id }) => (0, resolvers_1.getGameOrGames)(id),
            },
            game: {
                type: new graphql_1.GraphQLList(GameType),
                args: { id: { type: graphql_1.GraphQLID } },
                resolve: (_, { id }) => (0, resolvers_1.getGameOrGames)(id),
            },
            authors: {
                type: new graphql_1.GraphQLList(AuthorType),
                args: { id: { type: graphql_1.GraphQLID } },
                resolve: (_, { id }) => (0, resolvers_1.getAuthorOrAuthors)(id),
            },
            author: {
                type: new graphql_1.GraphQLList(AuthorType),
                args: { id: { type: graphql_1.GraphQLID } },
                resolve: (_, { id }) => (0, resolvers_1.getAuthorOrAuthors)(id),
            },
            reviews: {
                type: new graphql_1.GraphQLList(ReviewType),
                args: { id: { type: graphql_1.GraphQLID } },
                resolve: (_, { id }) => (0, resolvers_1.getReviewOrReviews)(id),
            },
            review: {
                type: new graphql_1.GraphQLList(ReviewType),
                args: { id: { type: graphql_1.GraphQLID } },
                resolve: (_, { id }) => (0, resolvers_1.getReviewOrReviews)(id),
            },
        },
    }),
    types: [GameType, AuthorType, ReviewType],
});
