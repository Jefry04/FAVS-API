const List = require("../models/list.model");
const User = require("../models/user.model");

module.exports = {
  async list(req, res) {

    try {
      const userId = req.user;
      const lists = await List.find({ 'userId': userId} );

      res.status(200).json({ message: "List found", lists });
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async create(req, res) {
    try {
      const userId = req.user;
      const { name } = req.body;

      const user = await User.findById(userId);

      if (!user) {
        throw new Error("Invalid user");
      }

      const repeatName = await List.find({
        name: name,
      }).exec();

      if (repeatName.length > 0) {
        throw new Error("List name already in use");
      } else {
        const list = await List.create({ ...req.body, userId: user });
        res.status(200).json(list);
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
