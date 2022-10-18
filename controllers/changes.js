const Recyclable = require('../models/recyclable')

module.exports = {
    create,
    delete: deleteChange
}

function create(req, res) {
    Recyclable.findById(req.params.id, function(err, recyclable) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar

        req.body.address[0] = req.body.address[0].trim();
        req.body.specs[0] = req.body.specs[0].trim();
        
        req.body.address = req.body.address[0].split(/\s*, \s*/);
        req.body.specs = req.body.specs[0].split(/\s*, \s*/);
        
        recyclable.changes.push(req.body)

        recyclable.save(function(err) {
            res.redirect(`/recyclables/${recyclable._id}`)
        })
    })
}

function deleteChange(req, res) {
    recyclable.findOne({'changes._id': req.params.id, 'changes.user': req.user._id}).then(function(recyclable) {
        if (!recyclable) return res.redirect('/recyclables')
        recyclable.changes.remove(req.params.id)
        recyclable.save().then(function() {
            res.redirect(`/recyclables/${recyclable._id}`)
        }).catch(function(err) {
            return next(err)
        })
    })
}