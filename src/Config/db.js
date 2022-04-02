const { connect } = require("mongoose");

module.exports = () => {
  return connect(
    "mongodb+srv://dhruv:123@cluster0.zuqjx.mongodb.net/cartdata?retryWrites=true&w=majority"
  );
};
