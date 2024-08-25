const Yarn = require("../Models/yarnModel");

//  controller for adding a category
const addYarn = async (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  //  check if category already exists
  try {
    const yarnExists = await Yarn.findOne({ name });
    if (yarnExists) {
      return res.status(400).json({ msg: "Yarn already exists" });
    }
    const yarn = new Yarn({
      name,
      description,
    });
    await yarn.save();
    return res
      .status(201)
      .json({ msg: "Yarn added successfully", yarn: yarn });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// controller for getting all categories

const getYarns = async (req, res) => {
  try {
    const yarns = await Yarn.find();
    return res
      .status(200)
      .json({ msg: "Yarn fetched successfully", yarns });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// controller for getting a single category

const getYarn = async (req, res) => {
  try {
    const yarn = await Yarn.findById(req.params.id);
    if (!yarn) {
      return res.status(404).json({ msg: "Yarn not found" });
    }
    return res
      .status(200)
      .json({ msg: "Yarn fetched successfully", yarn });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// controller for updating a category

const updateYarn = async (req, res) => {
  const { name, description } = req.body;
  try {
    const yarn = await Yarn.findOne({ _id: req.params.id });
    if (!yarn) {
      return res.status(404).json({ msg: "Yarn not found" });
    }
    if (!name) {
        yarn.description = description;
    } else if (!description) {
        yarn.name = name;
    } else {
        yarn.name = name;
        yarn.description = description;
    }

    await yarn.save();
    return res
      .status(200)
      .json({ msg: "Yarn updated successfully", yarn });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// controller for deleting a category

const deleteYarn = async (req, res) => {
  try {
    const yarn = await Yarn.findByIdAndDelete(req.params.id);
    if (!yarn) {
      return res.status(404).json({ msg: "Yarn not found" });
    }
    return res.status(200).json({ msg: "Yarn deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  addYarn,
  getYarns,
  getYarn,
  updateYarn,
  deleteYarn,
};