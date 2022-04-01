const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost/vehiculos",{
        KeepAlive: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then((db) => console.log("Db is conected"))
    .catch((err) => console.log(err))

mongoose
    .connect("mongodb://localhost/vendedores",{
        KeepAlive: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("Db is conected"))
    .catch((err) => console.log(err))

mongoose
    .connect("mongodb://localhost/clientes",{
        KeepAlive: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log("Db is conected"))
    .catch((err) => console.log(err))

