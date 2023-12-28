import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLBoolean,
    GraphQLInt,
} from 'graphql'
import {
    getAuthorById,
    getAuthorOrAuthors,
    getGameById,
    getGameOrGames,
    getReviewById,
    getReviewOrReviews,
} from './resolvers'

const GameType = new GraphQLObjectType({
    name: 'Game',
    fields: () => ({
        id: { type: GraphQLID! },
        title: { type: GraphQLString! },
        platform: { type: new GraphQLList(GraphQLString!) },
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve: (source: { id: string }) => getReviewById(source.id),
        },
    }),
}) as GraphQLObjectType

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID! },
        name: { type: GraphQLString! },
        verified: { type: GraphQLBoolean },
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve: (source: { id: string }) => getReviewById(source.id),
        },
    }),
}) as GraphQLObjectType

const ReviewType = new GraphQLObjectType({
    name: 'Review',
    fields: {
        id: { type: GraphQLID! },
        rating: { type: GraphQLInt! },
        content: { type: GraphQLString },
        author_id: { type: GraphQLString! },
        game_id: { type: GraphQLString! },

        game: {
            type: new GraphQLList(GameType),
            resolve: (source: { game_id: string }) => getGameById(source.game_id),
        } as any,
        author: {
            type: new GraphQLList(AuthorType),
            resolve: (source: { author_id: string }) => getAuthorById(source.author_id),
        } as any,
    },
}) as GraphQLObjectType

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: {
            games: {
                type: new GraphQLList(GameType),
                args: { id: { type: GraphQLID! } },
                resolve: (_, { id }) => getGameOrGames(id),
            },
            game: {
                type: new GraphQLList(GameType),
                args: { id: { type: GraphQLID! } },
                resolve: (_, { id }) => getGameOrGames(id),
            },

            authors: {
                type: new GraphQLList(AuthorType),
                args: { id: { type: GraphQLID! } },
                resolve: (_, { id }) => getAuthorOrAuthors(id),
            },
            author: {
                type: new GraphQLList(AuthorType),
                args: { id: { type: GraphQLID! } },
                resolve: (_, { id }) => getAuthorOrAuthors(id),
            },

            reviews: {
                type: new GraphQLList(ReviewType),
                args: { id: { type: GraphQLID! } },
                resolve: (_, { id }) => getReviewOrReviews(id),
            },
            review: {
                type: new GraphQLList(ReviewType),
                args: { id: { type: GraphQLID! } },
                resolve: (_, { id }) => getReviewOrReviews(id),
            },
        },
    }),
    types: [GameType, AuthorType, ReviewType],
})
