const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// requires index.js file
const routes = require('./routes');

app.use(routes);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));