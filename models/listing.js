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
const ListingModelSchema = new mongoose.Schema({
  createdAt: Date,
  name: String,
  state: String,
  age: String,
  gender: String,
  weight: Number,
  description: String,
  breedId: mongoose.Types.ObjectId
})

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const ListingCollection = mongoose.model('Listing', ListingModelSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */

function getListingByBreedId(breedId) {
  return ListingCollection.find({breedId: breedId})
}

function addListing(newListing) {
  return ListingCollection.create(newListing)
}

function getListingByListingId(listingId) {
  return ListingCollection.findById(listingId)
}

function updateListing(listingId, updatedListing) {
  return ListingCollection.findByIdAndUpdate(listingId, updatedListing)
}

function deleteListing(listingId) {
  return ListingCollection.findByIdAndDelete(listingId)
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getCommentByBreedId,
  addComment,
  getCommentByCommentId,
  updateComment,
  deleteComment
}
