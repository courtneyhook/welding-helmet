const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
}

type Helmet {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
}

type Auth {
    token: ID
    user: User
}

type Query {
    users: [User]
    helmets: [Helmet]
    helmet(_id: ID!): Helmet
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
    addHelmet(name: String!, description: String!, image: String!, price: Float): Helmet
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
