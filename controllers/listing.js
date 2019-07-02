/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const listingApi = require('../models/listing.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const listingRouter = express.Router({mergeParams: true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

listingRouter.get('/', (req, res) => {
  listingApi.getListingsByBreedId(req.params.breedId)
    .then((listings) => {
      res.render('listings/listings', {listings})
    })
})

listingRouter.get('/new', (req, res) => {
  res.render('listings/newListingForm')
})

listingRouter.post('/', (req, res) => {
  req.body.breedId = req.params.breedId
  listingApi.addListing(req.body)
    .then(() => {
      res.redirect(`/breeds/${req.params.breedId}/listings`)
    })
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  listingRouter
}
