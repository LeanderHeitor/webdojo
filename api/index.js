const express = require('express')
const cors = require('cors')
const prisma = require('./prismaClient') // importa o Prisma

const app = express()
const port = 3333

app.use(cors())
app.use(express.json())

app.use((err, req, res, next)=> {
  console.log(err)
  if (err instanceof SyntaxError){
    return res.status(400).json({ error: 'Invalid JSON format.' })
  }
  next()
})

app.get('/', (req, res) => {
  res.json({ message: 'API do curso Ninja do Cypress!' })
})

app.post('/api/users/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'The "name" field is required.' });
  }
  if (!email) {
    return res.status(400).json({ error: 'The "email" field is required.' });
  }
  if (!password) {
    return res.status(400).json({ error: 'The "password" field is required.' });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // In production, hash this password using bcrypt or similar library.
      },
    });

    return res.status(201).json({
      message: 'User successfully registered.',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return res.status(409).json({ error: 'Email address is already registered.' });
    }

    console.error('[User Registration Error]', error);
    return res.status(500).json({ error: 'Internal server error during user registration.' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})