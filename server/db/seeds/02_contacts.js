
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          id: 1,
          name: 'Goku',
          address: 'Earth, Milky Way',
          mobile: '555-420-1337',
          work: '420-555-1337',
          home: '101-010-1010',
          email: 'alwaysdeadlmao@gmail.com',
          twitter: 'twitter.com/ssjgoku12',
          instagram: 'instagram.com/ssjgoku12',
          github: 'github.com/ssjgoku12',
          created_by: 1
        },
        {
          id: 2,
          name: 'Yamcha',
          address: 'Earth',
          mobile: '555-420-1337',
          work: '420-555-1337',
          home: '101-010-1010',
          email: 'yamchapose@aol.com',
          twitter: 'twitter.com/yamchapose',
          instagram: 'instagram.com/yamchapose',
          github: 'github.com/yamchapose',
          created_by: 2
        },
        {
          id: 3,
          name: 'Krillin',
          address: 'Earth',
          mobile: '555-420-1337',
          work: '420-555-1337',
          home: '101-010-1010',
          email: 'baldie@gmail.com',
          twitter: 'twitter.com/baldie',
          instagram: 'instagram.com/baldie',
          github: 'github.com/baldie',
          created_by: 3
        },
        {
          id: 4,
          name: 'Gohan',
          address: 'Earth',
          mobile: '555-420-1337',
          work: '420-555-1337',
          home: '101-010-1010',
          email: 'realgreatsaiyaman@gmail.com',
          twitter: 'twitter.com/realgreatsaiyaman',
          instagram: 'instagram.com/realgreatsaiyaman',
          github: 'github.com/realgreatsaiyaman',
          created_by: 1
        }
      ]);
    });
};
