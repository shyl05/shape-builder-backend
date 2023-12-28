var express = require('express');
var router = express.Router();
var Shapes = require('../models/shapeData');

router.get('/all',async (req, res) => {
  try {
      const shape = await Shapes.find();
      res.status(200).json(shape);
  } catch(error) {
      res.status(404).json({message: error.message});
  }
});

router.post('/create', async function(req, res, next) {
  let body = req.body;
  let shape = new Shapes(body);
  await shape.save()
  .then((result)=>{
    res.send(result)
  })
  .catch((err)=>{
    res.send(err)
  })
})

router.put('/update', async function (req, res, next) {
  if(!req.body) {
    res.status(400).send({
        message: "Data to update can not be empty!"
    });
  }
  const name = req.body.name;
  const found = await Shapes.findOne({'name': name});
  if(found){
    await Shapes.findByIdAndUpdate(found._id, req.body)
    .then(()=> {
      res.send({ message: "Shape updated successfully." })
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  }
})

router.post('/delete', async function (req, res, next) {
  if(!req.body) {
    res.status(400).send({
        message: "Data to update can not be empty!"
    });
  }
  const name = req.body.name;
  const found = await Shapes.findOne({'name': name});
  if(found){
    await Shapes.findByIdAndDelete(found._id, req.body)
    .then(()=> {
      res.send({id: found._id});
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  }
})

module.exports = router;
