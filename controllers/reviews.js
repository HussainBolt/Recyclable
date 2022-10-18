const Recyclable = require('../models/recyclable')

module.exports = {
    create,
    delete: deleteReview
}

function create(req, res) {
    Recyclable.findById(req.params.id, function(err, recyclable) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        recyclable.reviews.push(req.body)
        recyclable.save(function(err) {
            res.redirect(`/recyclables/${recyclable._id}`)
        })
    })
}

function deleteReview(req, res, next) {
    Recyclable.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(recyclable) {
        if (!recyclable) return res.redirect('/recyclables');
        recyclable.reviews.remove(req.params.id);
        recyclable.save().then(function() {
          res.redirect(`/recyclables/${recyclable._id}`);
        }).catch(function(err) {
          return next(err);
        });
    });
}
