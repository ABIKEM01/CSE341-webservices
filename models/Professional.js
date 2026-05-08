const mongoose = require('mongoose');

const ProfessionalSchema = new mongoose.Schema({
  professionalName: { type: String, required: true },
 nameLink: {
  firstName: { type: String },
  url: { type: String }
},
  base64Image: { type: String },
  firstName: { type: String },
  primaryDescription: { type: String },
  workDescription1: { type: String },
  workDescription2: { type: String },
  linkTitleText: { type: String },

linkedInLink: {
  text: { type: String },
  link: { type: String }
},
githubLink: {
  text: { type: String },
  link: { type: String }
},
  contactText: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Professional', ProfessionalSchema);