import express from 'express'
import cors from 'cors'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import session from 'session'

const app = express()
const port = 3000

// middleware
app.use(cors({
  origin: [
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

// passport initialization
app.use(passport.initialize())

// passport session
app.use(passport.session())
