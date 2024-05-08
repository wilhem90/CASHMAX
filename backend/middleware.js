const{ allUsers, getUser} = require("./connectDb")

console.log(allUsers());
module.exports = {
    allUsers,
    getUser
}