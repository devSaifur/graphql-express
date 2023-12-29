let games: Game[] = [
    {
        id: '1',
        title: 'Galactic Conquest',
        platform: ['PC', 'Xbox Series X', 'PS5'],
    },
    { id: '2', title: 'Mystic Realms: Chronicles', platform: ['Switch', 'PS5'] },
    { id: '3', title: 'Shadowstrike Legends', platform: ['PC', 'Xbox Series X'] },
    {
        id: '4',
        title: 'Eternal Quest: Reborn',
        platform: ['PS5', 'Xbox Series X'],
    },
    { id: '5', title: 'Cybernetic Evolution', platform: ['PC'] },
    { id: '6', title: 'Nebula Nexus', platform: ['Xbox Series X'] },
    { id: '7', title: 'Empyrean Odyssey', platform: ['PC', 'PS5'] },
    {
        id: '8',
        title: 'Legacy of Eternity',
        platform: ['Switch', 'Xbox Series X'],
    },
    { id: '9', title: 'Infinity Rifts', platform: ['PS5'] },
    { id: '10', title: 'Chrono Frontier', platform: ['PC', 'Xbox Series X'] },
    { id: '11', title: 'Celestial Empires', platform: ['Switch'] },
    { id: '12', title: 'Aurora Ascension', platform: ['PS5', 'Xbox Series X'] },
    { id: '13', title: "Galaxy's Edge: Reckoning", platform: ['PC'] },
    { id: '14', title: 'Mythical Odyssey', platform: ['PS5'] },
    { id: '15', title: 'Spectral Realms', platform: ['Xbox Series X'] },
    { id: '16', title: 'Starfall Dominion', platform: ['PC', 'Switch'] },
    { id: '17', title: 'Quantum Quest', platform: ['Xbox Series X'] },
    { id: '18', title: 'Eclipse Chronicles', platform: ['PS5'] },
    { id: '19', title: 'Nova Galaxy', platform: ['Switch', 'Xbox Series X'] },
    { id: '20', title: 'Legends of Valor', platform: ['PC', 'PS5'] },
]

let authors = [
    { id: '1', name: 'StellarGamer94', verified: true },
    { id: '2', name: 'NebulaExplorer', verified: false },
    { id: '3', name: 'CosmicChampion', verified: true },
    { id: '4', name: 'EternalQuester', verified: true },
    { id: '5', name: 'InfinityRifter', verified: false },
    { id: '6', name: 'MysticAdventurer', verified: true },
    { id: '7', name: 'ChronoGamerX', verified: true },
    { id: '8', name: 'CelestialDreamer', verified: false },
    { id: '9', name: 'ShadowStrikePro', verified: true },
    { id: '10', name: 'EclipseExplorer', verified: true },
    { id: '11', name: 'GalacticHero777', verified: false },
    { id: '12', name: 'SpectralPlayer', verified: true },
    { id: '13', name: 'AuroraSeeker', verified: false },
    { id: '14', name: 'QuantumGamer21', verified: true },
    { id: '15', name: 'NovaOdyssey', verified: true },
    { id: '16', name: 'StarfallAdventurer', verified: false },
    { id: '17', name: 'LegendsSeeker88', verified: true },
    { id: '18', name: 'EmpyreanGamer', verified: true },
    { id: '19', name: 'ValorQuester', verified: false },
    { id: '20', name: 'MythicalGamerX', verified: true },
]

let reviews = [
    {
        id: '1',
        rating: 8,
        content: 'Great storyline and gameplay!',
        author_id: '14',
        game_id: '2',
    },
    {
        id: '2',
        rating: 7,
        content: 'Amazing graphics, but needs more content.',
        author_id: '2',
        game_id: '1',
    },
    {
        id: '3',
        rating: 9,
        content: 'Incredible world-building!',
        author_id: '13',
        game_id: '3',
    },
    {
        id: '4',
        rating: 6,
        content: 'Decent game, but could be better.',
        author_id: '10',
        game_id: '4',
    },
    {
        id: '5',
        rating: 8,
        content: 'Immersive experience!',
        author_id: '5',
        game_id: '15',
    },
    {
        id: '6',
        rating: 9,
        content: 'Loving the gameplay mechanics!',
        author_id: '6',
        game_id: '12',
    },
    {
        id: '7',
        rating: 7,
        content: 'Good game overall, a few glitches though.',
        author_id: '12',
        game_id: '18',
    },
    {
        id: '8',
        rating: 8,
        content: 'Addictive gameplay!',
        author_id: '8',
        game_id: '9',
    },
    {
        id: '9',
        rating: 9,
        content: 'Solid RPG experience!',
        author_id: '9',
        game_id: '10',
    },
    {
        id: '10',
        rating: 7,
        content: 'Needs more variety in quests.',
        author_id: '10',
        game_id: '10',
    },
    {
        id: '11',
        rating: 8,
        content: 'Captivating storyline!',
        author_id: '11',
        game_id: '14',
    },
    {
        id: '12',
        rating: 6,
        content: 'Graphics are mediocre.',
        author_id: '12',
        game_id: '17',
    },
    {
        id: '13',
        rating: 9,
        content: 'Addictive and fun!',
        author_id: '13',
        game_id: '2',
    },
    {
        id: '14',
        rating: 8,
        content: 'Great visuals!',
        author_id: '14',
        game_id: '14',
    },
    {
        id: '15',
        rating: 7,
        content: 'Interesting concept but needs polishing.',
        author_id: '15',
        game_id: '15',
    },
    {
        id: '16',
        rating: 9,
        content: 'Engaging gameplay!',
        author_id: '9',
        game_id: '4',
    },
    {
        id: '17',
        rating: 8,
        content: 'Good graphics and storyline.',
        author_id: '2',
        game_id: '9',
    },
    {
        id: '18',
        rating: 7,
        content: 'Fun but lacks depth.',
        author_id: '20',
        game_id: '14',
    },
    {
        id: '19',
        rating: 8,
        content: 'Immersive universe!',
        author_id: '12',
        game_id: '7',
    },
    {
        id: '20',
        rating: 9,
        content: 'A must-play for RPG fans!',
        author_id: '20',
        game_id: '7',
    },
]

export type Game = {
    id?: string
    title: string
    platform?: string[]
}

export default { games, authors, reviews }
