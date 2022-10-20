const tripdb = require("../model/model");

// create and save new trip
exports.create = (req, res) => {
  const trip = new tripdb({
    depart_city: req.body.depart_city,
    arrive_city: req.body.arrive_city,
    depart_date: req.body.depart_date,
    arrive_date: req.body.arrive_date,
    price: req.body.price,
  });

  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }
  // save trip in the database
  trip
    .save(trip)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

// retrieve and return all trips/ retrive and return a single trip
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    tripdb
      .findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found trip with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving trip with id " + id });
      });
  } else {
    tripdb
      .find()
      .then((trip) => {
        res.send(trip);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Error Occurred while retriving trip information",
        });
      });
  }
};

// Update a new idetified trip by trip id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  tripdb
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update trip with ${id}. Maybe trip not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update trip information" });
    });
};

// Delete a trip with specified trip id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  tripdb
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "trip was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete trip with id=" + id,
      });
    });
};
