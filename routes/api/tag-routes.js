const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {

  // find all tags
  // be sure to include its associated Product data
  res.send("Hit Get All Tags Route")
});

router.get('/:id', (req, res) => {
  //console.log(req);
  console.log(req.params);
  // find a single tag by its `id`
  // be sure to include its associated Product data
  res.send(`Found record for iem ${req.params.id}`)
});

router.post('/', (req, res) => {
  console.log(req.body)
  // create a new tag
  let temp = { name: req.body.name }
  res.json(temp);
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
