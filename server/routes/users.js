const router = express.Router();
const User = require('../db/models/User');
const db = require('../db/knex');

router.route('/')
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

module.exports = router;