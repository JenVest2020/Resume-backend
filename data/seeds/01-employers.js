const { title } = require("process")

exports.seed = function (knex, Promise) {
  return knex('employers').insert([
    { name_title: 'Bob Smith/Tech Lead', phone_number: '(555)123-4567', company: 'Techs R Us', email: 'Bsmith@tru.com', comm_instructions: 'Please contact me on ext.3540 to make an appointment for your interview' },
    { name_title: 'Sam Smith/Recruiter', phone_number: '(555)234-5678', company: 'Remotes and Rythms', email: 'Ssmith@rnr.com', comm_instructions: 'Please contact me on ext.3450 to make an appointment for your interview' },
    { name_title: 'Tom Smith/Designer', phone_number: '(555)345-6789', company: 'Places and Spaces', email: 'Tsmith@pns.com', comm_instructions: 'Please contact me on ext.3045 to make an appointment for your interview' },
  ]);
};
