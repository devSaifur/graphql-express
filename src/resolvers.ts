import db from './db'

export function getGameById(game_id: string) {
    return db.games.filter((game) => game.id === game_id)
}

export function getAuthorById(author_id: string) {
    return db.authors.filter((author) => author.id === author_id)
}

export function getReviewById(id: string) {
    return db.reviews.filter((review) => review.game_id === id)
}

export function getGameOrGames(id?: string) {
    if (id) return db.games.filter((game) => game.id === id)
    return db.games
}

export function getAuthorOrAuthors(id?: string) {
    if (id) return db.authors.filter((author) => author.id === id)
    return db.authors
}

export function getReviewOrReviews(id?: string) {
    if (id) return db.reviews.filter((review) => review.id === id)
    return db.reviews
}
