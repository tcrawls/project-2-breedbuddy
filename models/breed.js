/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
// global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const BreedModelSchema = new mongoose.Schema({
 name: {
   type: String,
   required: true
 },
 group: {
  type: String,
  required: true
 },
 size: {
  type: String,
  required: true
 },
 shedding: {
  type: String,
  required: true
 },
 activityLevel: {
  type: String,
  required: true
 },
 imgLink: String
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const BreedCollection = mongoose.model('Breed', BreedModelSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getAllBreeds() {
  return BreedCollection.find()
}

function getBreed(breedId) {
  return BreedCollection.findById(breedId)
}

function addNewBreed(newBreed) {
  return BreedCollection.create(newBreed)
}

function updateBreed(breedId, updatedBreed) {
  return BreedCollection.findByIdAndUpdate(breedId, updatedBreed)
}

function deleteBreed(breedId) {
  return BreedCollection.findByIdAndDelete(breedId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllBreeds,
  getBreed,
  addNewBreed,
  updateBreed,
  deleteBreed
}
