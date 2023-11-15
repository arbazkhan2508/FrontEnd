var mongoose = require("mongoose");

var chatSchema = mongoose.Schema(
  {
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reciever_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
    },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model("Chat", chatSchema);
