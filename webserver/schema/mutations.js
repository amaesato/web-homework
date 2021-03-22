const { GraphQLNonNull } = require('graphql')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLFloat } = graphql
const { TransactionModel } = require('../data-models/Transaction')
const { UserModel } = require('../data-models/User')
const { MerchantModel } = require('../data-models/Merchant')
const TransactionType = require('./transaction-type')
const UserType = require('./user-type')
const MerchantType = require('./merchant-type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTransaction: {
      type: TransactionType,
      args: {
        userId: { type: GraphQLString },
        description: { type: GraphQLString },
        merchantId: { type: GraphQLString },
        debit: { type: GraphQLBoolean },
        credit: { type: GraphQLBoolean },
        amount: { type: GraphQLFloat },
        date: { type: GraphQLString }
      },
      /* eslint-disable-next-line camelcase */
      resolve: async (parentValue, { userId, description, merchantId, debit, credit, amount, date }) => {
        const transaction = await TransactionModel.create({ userId, description, merchantId, debit, credit, amount, date })
        transaction.id = transaction._id
        return transaction
      }
    },
    deleteTransaction: {
      type: TransactionType,
      args: { id: { type: GraphQLNonNull(GraphQLString) } },
      resolve: async (parentValue, { id }) => {
        const deleted = await TransactionModel.findByIdAndDelete(id)
        if (!deleted) {
          throw new Error('Error ')
        }
        return deleted
      }
    },
    updateTransaction: {
      type: TransactionType,
      args: {
        id: { type: graphql.GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLString },
        merchantId: { type: GraphQLString },
        userId: { type: GraphQLString },
        debit: { type: GraphQLBoolean },
        credit: { type: GraphQLBoolean },
        amount: { type: GraphQLFloat },
        date: { type: GraphQLString }
      },
      /* eslint-disable-next-line camelcase */
      resolve: async (parentValue, { id, description, merchantId, userId, debit, credit, amount, date }) => {
        const updated = await TransactionModel.findByIdAndUpdate(id, { $set: { description, merchantId, userId, debit, credit, amount, date } }, { new: true })
        updated.id = updated._id
        return updated
      }
    },
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        dob: { type: GraphQLString }
      },
      resolve: async (parentValue, { firstName, lastName, dob }) => {
        const user = await UserModel.create({ firstName, lastName, dob })
        user.id = user._id
        return user
      }
    },
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLNonNull(GraphQLString) } },
      resolve: async (parentValue, { id }) => {
        const deleted = await UserModel.findByIdAndDelete(id)
        if (!deleted) {
          throw new Error('There was an error deleting the user')
        }
        return deleted
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: graphql.GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        dob: { type: GraphQLString }
      },
      resolve: async (parentValue, { id, firstName, lastName, dob }) => {
        const updated = await UserModel.findByIdAndUpdate(id, { firstName, lastName, dob }, { new: true })
        updated.id = updated._id
        return updated
      }
    },
    addMerchant: {
      type: MerchantType,
      args: {
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve: async (parentValue, { name, category, description }) => {
        const merchant = await MerchantModel.create({ name, category, description })
        merchant.id = merchant._id
        return merchant
      }
    },
    deleteMerchant: {
      type: MerchantType,
      args: { id: { type: GraphQLNonNull(GraphQLString) } },
      resolve: async (parentValue, { id }) => {
        const deleted = await MerchantModel.findByIdAndDelete(id)
        if (!deleted) {
          throw new Error('There was an error deleting the Merchant')
        }
        return deleted
      }
    },
    updateMerchant: {
      type: MerchantType,
      args: {
        id: { type: graphql.GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        category: { type: GraphQLString },
        description: { type: GraphQLBoolean }
      },
      resolve: async (parentValue, { id, name, category, description }) => {
        const updated = await MerchantModel.findByIdAndUpdate(id, { name, category, description }, { new: true })
        updated.id = updated._id
        return updated
      }
    }
  }
})

module.exports = mutation
