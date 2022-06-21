const { model, Schema, models } = require("mongoose");

const listSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    fav: [{
      title: String,
      description: String,
      link: String,
    }],
  },
  {
    timestamps: true,
  }
);

const List = model("List", listSchema);

module.exports = List;
