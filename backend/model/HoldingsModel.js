const { model } = require("mongoose");

const { HoldingSchema } = require("../Schema/HoldingSchema");

const HoldingsModel = new model("Holding", HoldingSchema);

module.exports = { HoldingsModel };
