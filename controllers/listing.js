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
const breedApi = require('../models/breed.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const listingRouter = express.Router({ mergeParams: true })

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
      breedApi.getBreed(req.params.breedId)
        .then((breed) => {
          res.render('listings/listings', { listings, breed })
        })
    })
})

listingRouter.post('/', (req, res) => {
  req.body.breedId = req.params.breedId
  listingApi.addListing(req.body)
    .then(() => {
      res.redirect(`/breeds/${req.params.breedId}/listings`)
    })
})

listingRouter.get('/new', (req, res) => {
  breedApi.getBreed(req.params.breedId)
    .then((breed) => {
      res.render('listings/newListingForm', { breed })
    })
})

listingRouter.delete('/:listingId', (req, res) => {
  listingApi.deleteListing(req.params.listingId)
    .then(() => {
      res.redirect(`/breeds/${req.params.breedId}/listings`)
    })
})

listingRouter.get('/:listingId/edit', (req, res) => {
  listingApi.getListingByListingId(req.params.listingId)
    .then((listing) => {
      res.render('listings/editListingForm', { listing })
    })
})

listingRouter.put('/:listingId', (req, res) => {
  listingApi.updateListing(req.params.listingId, req.body)
    .then(() => {
      res.redirect(`/breeds/${req.params.breedId}/listings`)
    })
    .catch((err) => {
      res.send(err)
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
