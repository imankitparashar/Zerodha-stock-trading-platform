const { model } = require("mongoose");
const { PositionSchema } = require("../Schema/PositionsSchema");

const positionsModel = new model("Position", PositionSchema);
module.exports = { positionsModel };
