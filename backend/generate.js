module.exports = function() {
  const _ = require('lodash');
  const faker = require('faker');
  return {
    contacts: _.times(50, function(n) {
      return {
        id: n,
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        job_title: faker.name.jobTitle(),
        address: faker.address.streetAddress(),
        phone_number: faker.phone.phoneNumber(),
        mobile_number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        picture: faker.internet.avatar()
      }
    })
  };
}
