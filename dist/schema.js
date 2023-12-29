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
            resolve: (source) => (0, resolvers_1.getReviewsByGameId)(source.id),
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
            resolve: (source) => (0, resolvers_1.getReviewsByAuthorId)(source.id),
        },
    }),
});
const ReviewType = new graphql_1.GraphQLObjectType({
    name: 'Review',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        rating: { type: graphql_1.GraphQLInt },
        content: { type: graphql_1.GraphQLString },
        author_id: { type: graphql_1.GraphQLString },
        game_id: { type: graphql_1.GraphQLString },
        game: {
            type: GameType,
            resolve: (source) => (0, resolvers_1.getGameById)(source.game_id),
        },
        author: {
            type: AuthorType,
            resolve: (source) => (0, resolvers_1.getAuthorById)(source.author_id),
        },
    }),
});
const AddGame = new graphql_1.GraphQLInputObjectType({
    name: 'AddGame',
    fields: () => ({
        title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        platform: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
    }),
});
const EditGame = new graphql_1.GraphQLInputObjectType({
    name: 'EditGame',
    fields: () => ({
        title: { type: graphql_1.GraphQLString },
        platform: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
    }),
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
                type: GameType,
                args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
                resolve: (_, { id }) => (0, resolvers_1.getGameById)(id),
            },
            authors: {
                type: new graphql_1.GraphQLList(AuthorType),
                args: { id: { type: graphql_1.GraphQLString } },
                resolve: (_, { id }) => (0, resolvers_1.getAuthorOrAuthors)(id),
            },
            author: {
                type: AuthorType,
                args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
                resolve: (_, { id }) => (0, resolvers_1.getAuthorById)(id),
            },
            reviews: {
                type: new graphql_1.GraphQLList(ReviewType),
                args: { id: { type: graphql_1.GraphQLString } },
                resolve: (_, { id }) => (0, resolvers_1.getReviewOrReviews)(id),
            },
            review: {
                type: ReviewType,
                args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
                resolve: (_, { id }) => (0, resolvers_1.getReviewById)(id),
            },
        },
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: 'Mutations',
        fields: {
            addGame: {
                type: GameType,
                args: { input: { type: new graphql_1.GraphQLNonNull(AddGame) } },
                resolve: (_, { input }) => {
                    if ((input.platform && input.platform.length === 0) ||
                        input.platform === null) {
                        throw new graphql_1.GraphQLError('Platform cannot be empty or null if selected.');
                    }
                    else {
                        return (0, resolvers_1.addGame)(input);
                    }
                },
            },
            deleteGame: {
                type: GameType,
                args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
                resolve: (_, { id }) => (0, resolvers_1.deleteGame)(id),
            },
            editGame: {
                type: GameType,
                args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }, edits: { type: EditGame } },
                resolve: (_, { id, edits }) => (0, resolvers_1.editGame)(id, edits),
            },
        },
    }),
    types: [GameType, AuthorType, ReviewType],
});
