const Pattern = require("../Models/patternModel");
const domain = "http://localhost:5000";

// Controller for adding a pattern
const addPattern = async (req, res) => {
  const { title, description, difficultyLevel, materials, instructions = [] } = req.body;

  try {
    const patternExists = await Pattern.findOne({ title });
    if (patternExists) {
      return res.status(400).json({ msg: "Pattern already exists" });
    }

    const parsedInstructions = JSON.parse(instructions).map((step) => ({
      stepNumber: step.stepNumber,
      description: step.description,
    }));

    const pattern = new Pattern({
      title,
      description,
      difficultyLevel,
      materials,
      instructions: parsedInstructions,
    });
    
    await pattern.save();
    return res.status(201).json({ msg: "Pattern added successfully", pattern });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: error.message });
  }
};


// Controller for getting all patterns
const getPatterns = async (req, res) => {
  try {
    const patterns = await Pattern.find();
    return res
      .status(200)
      .json({ msg: "Patterns fetched successfully", patterns });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for getting a single pattern
const getPattern = async (req, res) => {
  try {
    const pattern = await Pattern.findById(req.params.id);
    if (!pattern) {
      return res.status(404).json({ msg: "Pattern not found" });
    }
    return res
      .status(200)
      .json({ msg: "Pattern fetched successfully", pattern });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for updating a pattern
const updatePattern = async (req, res) => {
  const { title, description } = req.body;
  try {
    const pattern = await Pattern.findById(req.params.id);
    if (!pattern) {
      return res.status(404).json({ msg: "Pattern not found" });
    }

    if (title) pattern.title = title;
    if (description) pattern.description = description;

    await pattern.save();
    return res
      .status(200)
      .json({ msg: "Pattern updated successfully", pattern });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: error.message });
  }
};

// Controller for deleting a pattern
const deletePattern = async (req, res) => {
  try {
    const pattern = await Pattern.findByIdAndDelete(req.params.id);
    if (!pattern) {
      return res.status(404).json({ msg: "Pattern not found" });
    }
    return res.status(200).json({ msg: "Pattern deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  addPattern,
  getPatterns,
  getPattern,
  updatePattern,
  deletePattern,
};
