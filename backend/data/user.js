import bcrypt from 'bcryptjs'

const users = [{
    name: 'John Doe',
    email: 'john@example.com',
    phone: 1234567890,
    password: bcrypt.hashSync('password123',10),
    isAdmin: true, 
  },
  {
    name: 'Alice Smith',
    email: 'alice@example.com',
    phone: 9876543210,
    password: bcrypt.hashSync('securepass',10),
    isAdmin: false, 
  },
  {
    name: 'Bob Johnson',
    email: 'bob@example.com',
    phone: 5551234567,
    password: bcrypt.hashSync('secret123',10),
    isAdmin: false, 
  },
  {
    name: 'Eve Brown',
    email: 'eve@example.com',
    phone: 7778889999,
    password: bcrypt.hashSync('mysecret',10),
    isAdmin: false, 
  }
]

export default users