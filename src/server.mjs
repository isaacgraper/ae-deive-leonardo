import express from 'express'
import passport from 'passport'

const app = express()
const port = 3000

// middleware

app.use(cors({
  oring: [
    'http://localhost:5173',
    'http://localhost:3000',
  ],
  credential: true
}))

// passing cookie key session
app.use(cookieParser('key'))

app.use(express.json())

// mantain session
app.use(session({
  secret: 'secret',
  saveUnitiliazed: false,
  resave: true,
  cookie: {
    maxAge: 3000 * 60
  },
  store: sessionStore
}))

// server initialization
app.listen(port, () => {
  console.log(`server running on ${port}`)
})