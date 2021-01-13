const db = require("../models/index");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find()
      .then((dbExercise) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate(
        {
          $addFields: {
            totalWeight: { $sum: "$exercises.weight" } ,
            totalDuration: { $sum: "$exercises.duration" }
          }
        })
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
