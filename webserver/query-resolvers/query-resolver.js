const { packageModel } = require('./utils.js')

async function find (model, criteria) {
  const query = Object.keys(criteria).length
    ? model.find(criteria)
    : model.find()

  const result = await query.exec()

  return packageModel(result)
}

async function findOne (model, id) {
  const query = model.findById(id)
  const result = await query.exec()

  return packageModel(result)[0] || null
}

module.exports = {
  find,
  findOne
}
