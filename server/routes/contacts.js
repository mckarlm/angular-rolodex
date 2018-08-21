const express = require('express');
const router = express.Router();
const Contact = require('../db/models/Contact');
const db = require('../db/knex');

router.route('/')
  .get((req, res) => {
    return Contact
      .fetchAll()
      .then(contacts => {
        return res.json(contacts);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Something in the server broke!' })
      });
  })

  .post((req, res) => {
    const contactInfo = {
      name: req.body.name,
      address: req.body.address,
      mobile: req.body.mobile,
      work: req.body.work,
      home: req.body.home,
      email: req.body.email,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
      github: req.body.github,
      created_by: req.body.created_by
    }

    return new Contact(contactInfo)
      .save()
      // .then(contact => {
      //   return contact.refresh({ withRelated: ['user'] });
      // })
      .then(contact => {
        return res.json(contact);
      })
      .catch(err => console.log(err));
  });

module.exports = router;