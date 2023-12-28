import express from 'express'
import { createHandler } from 'graphql-http/lib/use/express'

import { schema } from './schema'

const app = express()

const PORT = process.env.PORT || 4000

app.all('/', createHandler({ schema }))

app.listen(PORT, () => {
    console.log(`GraphQL server is running on ${PORT}`)
})
