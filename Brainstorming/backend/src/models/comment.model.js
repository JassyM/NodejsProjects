const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  comment: { type: String, require: true },
  author: { 
    type: Schema.Types.Obje0ctId,
    ref:'user',
    require: true,
    autopopulate: true 
  }
});

CommentSchema.plugin(require('mongoose-autoprotocol'));

module.exports = mongoose.model('comment', CommentSchema);