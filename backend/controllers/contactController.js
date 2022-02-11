var ContactModel = require('../models/contactModel.js');

/**
 * contactController.js
 *
 * @description :: Server-side logic for managing contacts.
 */
module.exports = {

    /**
     * contactController.list()
     */
    list: function (req, res) {
        ContactModel.find( function (err, contacts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting contact.',
                    error: err
                });
            }

            return res.json(contacts);
        });
    },

    getAllUserContacts:function (req, res) {
        var id = req.params.id;

        ContactModel.find({id: id}, function (err, contact) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting contact.',
                    error: err
                });
            }

            if (!contact) {
                return res.status(404).json({
                    message: 'No such contact'
                });
            }

            return res.json(contact);
        });
    },

    /**
     * contactController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ContactModel.findOne({_id: id}, function (err, contact) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting contact.',
                    error: err
                });
            }

            if (!contact) {
                return res.status(404).json({
                    message: 'No such contact'
                });
            }

            return res.json(contact);
        });
    },

    /**
     * contactController.create()
     */
    create: function (req, res) {
        var contact = new ContactModel({
			id : req.body.id,
			first_name : req.body.first_name,
			last_name : req.body.last_name,
			phone_number : req.body.phone_number,
			email : req.body.email
        });

        console.log("TESTs: " + req.body);

        contact.save(function (err, contact) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating contact',
                    error: err
                });
            }

            return res.status(201).json(contact);
        });
    },

    /**
     * contactController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ContactModel.findOne({_id: id}, function (err, contact) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting contact',
                    error: err
                });
            }

            if (!contact) {
                return res.status(404).json({
                    message: 'No such contact'
                });
            }

            contact.id = req.body.id ? req.body.id : contact.id;
			contact.first_name = req.body.first_name ? req.body.first_name : contact.first_name;
			contact.last_name = req.body.last_name ? req.body.last_name : contact.last_name;
			contact.phone_number = req.body.phone_number ? req.body.phone_number : contact.phone_number;
			contact.email = req.body.email ? req.body.email : contact.email;
			
            contact.save(function (err, contact) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating contact.',
                        error: err
                    });
                }

                return res.json(contact);
            });
        });
    },

    /**
     * contactController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ContactModel.findByIdAndRemove(id, function (err, contact) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the contact.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
