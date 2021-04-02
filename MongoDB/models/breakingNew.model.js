const mongoose = require('mongoose');
const { Schema } = mongoose;

const BreakingNewSchema = new Schema(
  {
    title: { type: String },
    link: { type: String }
  },
  { timestamps: { createdAt: true, updatedAt: true }});
// los timestamps son las propiedades que ayudan a distinguir cuándo se
// ha creado y actualizado un record.

module.exports = mongoose.model('BreakingNew', BreakingNewSchema);