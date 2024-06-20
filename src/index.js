const { app } = require("./server.js");
const { DatabaseConnect, databaseConnect } = require("./utils/database.js")

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server successfully started!");

    databaseConnect();
});