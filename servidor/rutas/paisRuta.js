const router = require('express').Router();
let Pais = require('../modelos/Pais');

router.route('/').get((req, res) => {

Pais.find() 
    .then(paises => res.json(paises))
    .catch(err => res.status(400).json('Error: ' + err));
    
})

/*
router.route('/agregarPais').post((req, res, next) => {
  Pais.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});




 Update Student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
*/
module.exports = router;