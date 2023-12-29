import db from './db'

export function getGameById(game_id: string) {
    return db.games.find((game) => game.id === game_id)
}

export function getAuthorById(author_id: string) {
    return db.authors.find((author) => author.id === author_id)
}

export function getReviewById(id: string) {
    return db.reviews.find((review) => review.game_id === id)
}

export function getReviewsByGameId(id: string) {
    return db.reviews.filter((review) => review.game_id === id)
}

export function getReviewsByAuthorId(id: string) {
    return db.reviews.filter((review) => review.author_id === id)
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

export function addGame(input: { title: string; platform?: string[] }) {
    if (!input.platform) input.platform = []
    const newGame = {
        ...input,
        id: Math.floor(Math.random() * 1000).toString(),
    }
    db.games.push(newGame)
    return newGame
}

export function deleteGame(id: string) {
    const deletedGame = db.games.find((game) => game.id === id)
    db.games = db.games.filter((game) => game.id !== id)
    return deletedGame
}

export function editGame(id: string, edits: { title: string; platform: string[] }) {
    db.games = db.games.map((game) => {
        if (game.id === id) {
            let editedGame = {
                ...game,
                ...edits,
            }
            return editedGame
        }
        return game
    })
    const editedGame = db.games.find((game) => game.id === id)
    return editedGame
}
