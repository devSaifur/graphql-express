import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLError,
} from 'graphql'
import {
    addGame,
    deleteGame,
    editGame,
    getAuthorById,
    getAuthorOrAuthors,
    getGameById,
    getGameOrGames,
    getReviewById,
    getReviewOrReviews,
    getReviewsByAuthorId,
    getReviewsByGameId,
} from './resolvers'

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        platform: { type: new GraphQLList(GraphQLString) },
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve: (source: { id: string }) => getReviewsByGameId(source.id),
        },
    }),
}) as GraphQLObjectType

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        verified: { type: GraphQLBoolean },
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve: (source: { id: string }) => getReviewsByAuthorId(source.id),
        },
    }),
}) as GraphQLObjectType

const ReviewType = new GraphQLObjectType({
    name: 'Review',
    fields: () => ({
        id: { type: GraphQLID },
        rating: { type: GraphQLInt },
        content: { type: GraphQLString },
        author_id: { type: GraphQLString },
        game_id: { type: GraphQLString },

        game: {
            type: GameType,
            resolve: (source: { game_id: string }) => getGameById(source.game_id),
        } as any,
        author: {
            type: AuthorType,
            resolve: (source: { author_id: string }) => getAuthorById(source.author_id),
        } as any,
    }),
}) as GraphQLObjectType

const AddGame = new GraphQLInputObjectType({
    name: 'AddGame',
    fields: () => ({
        title: { type: new GraphQLNonNull(GraphQLString) },
        platform: { type: new GraphQLList(GraphQLString) },
    }),
})

const EditGame = new GraphQLInputObjectType({
    name: 'EditGame',
    fields: () => ({
        title: { type: GraphQLString },
        platform: { type: new GraphQLList(GraphQLString) },
    }),
})

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: {
            games: {
                type: new GraphQLList(GameType),
                args: { id: { type: GraphQLID } },
                resolve: (_, { id }) => getGameOrGames(id),
            },
            game: {
                type: GameType,
                args: { id: { type: new GraphQLNonNull(GraphQLID) } },
                resolve: (_, { id }) => getGameById(id),
            },

            authors: {
                type: new GraphQLList(AuthorType),
                args: { id: { type: GraphQLString } },
                resolve: (_, { id }) => getAuthorOrAuthors(id),
            },
            author: {
                type: AuthorType,
                args: { id: { type: new GraphQLNonNull(GraphQLID) } },
                resolve: (_, { id }) => getAuthorById(id),
            },

            reviews: {
                type: new GraphQLList(ReviewType),
                args: { id: { type: GraphQLString } },
                resolve: (_, { id }) => getReviewOrReviews(id),
            },
            review: {
                type: ReviewType,
                args: { id: { type: new GraphQLNonNull(GraphQLID) } },
                resolve: (_, { id }) => getReviewById(id),
            },
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutations',
        fields: {
            addGame: {
                type: GameType,
                args: { input: { type: new GraphQLNonNull(AddGame) } },
                resolve: (_, { input }) => {
                    if (
                        (input.platform && input.platform.length === 0) ||
                        input.platform === null
                    ) {
                        throw new GraphQLError('Platform cannot be empty or null if selected.')
                    } else {
                        return addGame(input)
                    }
                },
            },
            deleteGame: {
                type: GameType,
                args: { id: { type: new GraphQLNonNull(GraphQLID) } },
                resolve: (_, { id }) => deleteGame(id),
            },
            editGame: {
                type: GameType,
                args: { id: { type: new GraphQLNonNull(GraphQLID) }, edits: { type: EditGame } },
                resolve: (_, { id, edits }) => editGame(id, edits),
            },
        },
    }),
    types: [GameType, AuthorType, ReviewType],
})
