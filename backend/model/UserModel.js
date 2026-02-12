const mongoose = require("mongoose");
const UserSchema = require("../Schema/UserSchema"); // No braces needed if you use default export

// Do NOT use the 'new' keyword here
const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
