
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'iwantPIZZA',
          name: 'Terry Bogard',
          email: 'kofterry@gmail.com',
          address: 'United States, America'
        },
        {
          id: 2,
          username: 'h0st0fJe0pardy',
          name: 'Alex Trebek',
          email: 'realalextrebek@gmail.com',
          address: 'earf'
        },
        {
          id: 3,
          username: 'filler',
          name: 'Agrias Oak',
          email: 'something.gmail.com',
          address: 'Ivalice'
        }
      ]);
    });
};
