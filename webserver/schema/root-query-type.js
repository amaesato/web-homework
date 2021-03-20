const graphql = require('graphql')
const TransactionType = require('./transaction-type')
const UserType = require('./user-type')
const MerchantType = require('./merchant-type')
const { TransactionModel } = require('../data-models/Transaction')
const { UserModel } = require('../data-models/User')
const { MerchantModel } = require('../data-models/Merchant')
const Model = require('../query-resolvers/query-resolver.js')

const {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = graphql
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    transaction: {
      type: TransactionType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve (parentValue, args) {
        return Model.findOne(TransactionModel, args.id)
      }
    },
    transactions: {
      type: GraphQLList(TransactionType),
      args: {
        amount: { type: GraphQLFloat },
        credit: { type: GraphQLBoolean },
        debit: { type: GraphQLBoolean },
        description: { type: GraphQLString },
        merchantId: { type: GraphQLString },
        userId: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Model.find(TransactionModel, args)
      }
    },
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve (parentValue, args) {
        return Model.findOne(UserModel, args.id)
      }
    },
    users: {
      type: GraphQLList(UserType),
      args: {
        dob: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
      },
      resolve: (parentValue, args) => {
        return Model.find(UserModel, args)
      }
    },
    merchant: {
      type: MerchantType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve (parentValue, args) {
        return Model.findOne(MerchantModel, args.id)
      }
    },
    merchants: {
      type: GraphQLList(MerchantType),
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve: (parentValue, args) => {
        return Model.find(MerchantModel, args)
      }
    }
  })
})

module.exports = RootQuery
