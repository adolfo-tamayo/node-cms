import { Schema, model } from 'mongoose'

const siteSchema = new Schema({
  name: { type: String, required: true, trim: true, minlength: 3 },
  shortName: { type: String }
}, {
  timestamps: true
})
export const Site = model('Site', siteSchema)
