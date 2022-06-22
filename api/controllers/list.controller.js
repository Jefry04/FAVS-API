const List = require("../models/list.model");
const User = require("../models/user.model");

module.exports = {
  async list(req, res) {
    try {
      const userId = req.user;
      const lists = await List.find({ userId: userId });

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

  async getSingleList(req, res) {
    try {
      const userId = req.user;
      const { listId } = req.params;

      const list = await List.findById(listId);

      if (list.userId.toString() !== userId) {
        res.status(403).json({ message: "unauthorized user" });
        return;
      }

      res.status(200).json(list);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async update(req, res) {
    try {
      const { listId } = req.params;
      const userId = req.user;
      const { fav } = req.body;

      const list = await List.findById(listId);

      if (!list) {
        res.status(404).json({ message: "List not found." });
        return;
      }
      if (list.userId.toString() !== userId) {
        res.status(403).json({ message: "unauthorized user" });
        return;
      }

      list.fav = [...list.fav, ...fav];
      await list.save({ validateBeforeSave: false });

      res.status(200).json(list);
    } catch (error) {
      res.status(400).json(error);
    }
  },

  async destroy(req, res) {
    try {
      const userId = req.user;
      const { listId } = req.params;

      const list = await List.findById(listId);

      if (!list) {
        res.status(404).json({ message: "List not found." });
        return;
      }
      if (list.userId.toString() !== userId) {
        res.status(403).json({ message: "unauthorized user" });
        return;
      }

      await List.deleteOne({ _id: listId });

      res.status(200).json(list);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
