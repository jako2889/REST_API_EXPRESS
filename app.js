const express = require("express");
const app = express();

//Parse body as json for POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cars = [
  { id: 1, brand: "Tesla", engine: "Y8" },
  { id: 3, brand: "Audi", engine: "Y11" },
];

app.get("/", (req, res) => {
  return res.send(cars);
});

app.post("/addCar", (req, res) => {
  cars.push({
    id: req.body.id,
    brand: req.body.brand,
    engine: req.body.engine,
  });
  return res.send(cars);
});

app.patch("/updateCar/:id", (req, res) => {
  for (let i = 0; i < cars.length; i++) {
    if (req.params.id == cars[i].id) {
      cars[i].brand = req.body.brand;
    }
  }
  return res.send(cars);
});

app.listen(8080, (error) => {
  if (error) {
    console.log("There is an error running on the server " + error);
  }
  console.log("Server is running on port", 8080);
});
