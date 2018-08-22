const express = require('express');
const router = express.Router();
const User = require('../db/models/User');
const db = require('../db/knex');

router.route('/:id/profile')
  .get((req, res) => {
    const userId = req.params.id;
    return new User({ id: userId })
      .fetch()
      .then(user => {
        if (!user) {
          res.status(500).json({ message: 'Could not find user'})
        } else {
          return res.json(user)
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong with the server' })
      })
  })


// ===== Login / Logout ===== //
// FIX LATER

router.route('/login')
  .post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    console.log('input', username)
    return new User({ username: username })
      .fetch()
      .then(user => {
        console.log('data?', user)
        if (!user || user.attributes.email !== email){
          res.send('Wrong username or email')
        } else {
          res.send('wew success, replace this!')
        }
      })
  })

router.route('/logout')
  .post((req, res) => {
    res.send('Neat.')
  })


// ===== Register new user ===== //
// don't forget to use raw+json and quotations in postman
router.route('/register')
  .post((req, res) => {
    const userInfo = {
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      address: req.body.address
    }
    return new User(userInfo)
      .save()
      .then(user => {
        return res.json(user);
      })
      .catch(err => console.log(err));
  })

router.route('/users')
  .get((req, res) => {
    return User
      .fetchAll({ withRelated: ['contact'] })
      .then(users => {
        return res.json(users);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Something in the server broke!' });
      });
  })
  .put((req, res) => {

  })

module.exports = router;