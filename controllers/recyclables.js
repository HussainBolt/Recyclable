const Recyclable = require('../models/recyclable');

module.exports = {
  index,
  new: newRecyclable,
  create,
  show,
  delete: deleteRecyclable,
  edit,
  update
}

function index(req, res) {
  Recyclable.find({}, function(err, recyclables) {
    res.render('recyclables/index', { title: 'Recyclables', recyclables })
  })
}

function newRecyclable(req, res) {
  res.render('recyclables/new', {title: 'Add Recyclable'})
}

function create(req, res) {
  const recyclable = new Recyclable (req.body);

  recyclable.user = req.user._id
  recyclable.userName = req.user.name
  recyclable.userAvatar = req.user.avatar

  recyclable.title = recyclable.title.trim();
  recyclable.address = recyclable.address[0].trim();
  recyclable.details = recyclable.details[0].trim();
  
  recyclable.address = recyclable.address[0].split(/\s*, \s*/);
  recyclable.details = recyclable.details[0].split(/\s*, \s*/);
  
  recyclable.save(function(err) {
      if(err) {
          console.log(err)
          return res.redirect('/recyclables/new');
      }
      res.redirect(`/recyclables/${recyclable.id}`);
  });
};

function show(req, res) {
  Recyclable.findById(req.params.id, function(err, recyclable) {
      res.render('recyclables/show', {title: recyclable.title, recyclable})
  })
}

function deleteRecyclable(req, res) {
  Recyclable.findById(req.params.id, function(err, recyclable) {
    recyclable.remove()
    recyclable.save(function(err) {
          res.redirect('/recyclables')
      })
  })
}

function edit(req, res) {
  Recyclable.findById(req.params.id, function(err, recyclable) {
      res.render('recyclables/edit', {title: 'Edit Recyclable', recyclable})
  })
}

function update(req, res) {
  Recyclable.findByIdAndUpdate(
      req.params.id, 
      req.body,
      {new: true},
      function(err, recyclable) {
          if (err || !recyclable) return res.redirect('/recyclables');
          res.redirect(`/recyclables/${req.params.id}`)
      }
  )
}