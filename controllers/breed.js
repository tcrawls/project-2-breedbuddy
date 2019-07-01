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
const breedApi = require('../models/breed.js')
const commentApi = require('../models/comment.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const breedRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
breedRouter.get('/', (req, res) => {
  breedApi.getAllBreeds()
    .then((breeds) => {
      res.render('breeds/breeds', {breeds})
    })
    .catch((err) => {
      res.send(err)
    })
})

breedRouter.post('/', (req, res) => {
  breedApi.addNewBreed(req.body)
    .then(() => {
      res.redirect('/breeds')
    })
    .catch((err) => {
      res.send(err)
    })
})

breedRouter.get('/new', (req, res) => {
  res.render('breeds/newBreedForm')
})

breedRouter.get('/:breedId/edit', (req, res) => {
  breedApi.getBreed(req.params.breedId)
    .then((breed) => {
      res.render('breeds/updateBreedForm', {breed})
    })
    .catch((err) => {
      res.send(err)
    })
})

breedRouter.get('/:breedId', (req, res) => {
  breedApi.getBreed(req.params.breedId)
    .then((breed) => {
      commentApi.getCommentByBreedId(breed._id)
        .then((comment) => {
          res.render('breeds/breed', {breed, comment})
        })
        .catch((err) => {
          res.send(err)
    })
    .catch((err) => {
      res.send(err)
})
})
})

breedRouter.delete('/:breedId', (req, res) => {
  breedApi.deleteBreed(req.params.breedId)
    .then(() => {
      res.redirect('/breeds')
    })
    .catch((err) => {
      res.send(err)
    })
})

breedRouter.put('/:breedId', (req, res) => {
  breedApi.updateBreed(req.params.breedId, req.body)
    .then(() => {
      res.redirect('/breeds')
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
  breedRouter
}
