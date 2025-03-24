const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mymailaditya:nCDteXQoGEFrYt4t@clusters.n5i7lds.mongodb.net/sketch?retryWrites=true&w=majority&appName=Clusters")
.then((res)=> console.log("mongoDB connected"))
.catch((err)=> console.log(err));

module.exports = mongoose.connection;