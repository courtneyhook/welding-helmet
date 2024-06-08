const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "ilovetomakeweldinghelmets";
const expiration = "2h";

module.exports = {
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extentions: {
      code: "UNAUTHENTICATED",
    },
  }),
  authMiddleware: function ({ req }) {
    let token = req.headers.authorization;

    if (!token) {
      return req;
    }
    token = token.split(" ").pop().trim();

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid Token");
    }

    return req;
  },
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  login: async function (email, password) {
    try {
      const user = await UserActivation.findOne({ email });
      if (!user || !(await user.isCorrectPassword(password))) {
        throw new Error("Invalid email or password");
      }
      const token = this.signToken(user);
      return token;
    } catch (error) {
      console.error(error);
      throw new Error("Server error");
    }
  },
};
