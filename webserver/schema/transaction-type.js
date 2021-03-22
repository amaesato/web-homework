const graphql = require('graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLFloat
} = graphql
const { UserModel } = require('../data-models/User')
const { MerchantModel } = require('../data-models/Merchant')
const Model = require('../query-resolvers/query-resolver.js')

const TransactionType = new GraphQLObjectType({
  name: 'Transaction',
  fields: () => ({
    id: { type: GraphQLString },
    user: {
      type: UserType,
      resolve (parentValue) {
        return Model.findOne(UserModel, parentValue.userId)
      }
    },
    merchant: {
      type: MerchantType,
      resolve (parentValue) {
        return Model.findOne(MerchantModel, parentValue.merchantId)
      }
    },
    description: { type: GraphQLString },
    debit: { type: GraphQLBoolean },
    credit: { type: GraphQLBoolean },
    amount: { type: GraphQLFloat },
    date: { type: GraphQLString }
  })
})

module.exports = TransactionType
const MerchantType = require('./merchant-type')
const UserType = require('./user-type')
