const { signToken, AuthenticationError } = require("../utils/auth");
const { Helmet, User } = require("../models");

const resolvers = {
  Query: {
    helmet: async (parent, { _id }) => {
      return Helmet.findOne({ _id });
    },
    helmets: async () => {
      return Helmet.find();
    },
  },

  Mutation: {
    addHelmet: async (parent, args) => {
      const helmet = await Helmet.create(args);

      return helmet;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const rightPW = await user.isCorrectPassword(password);

      if (!rightPW) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
