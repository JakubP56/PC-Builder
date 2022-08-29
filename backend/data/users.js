import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        admin : true,
    },

    {
        name: 'Michael Kelly',
        email: 'michael@example.com',
        password: bcrypt.hashSync('123456', 10),

    },

    {
        name: 'Mary Sullivan',
        email: 'mary@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users