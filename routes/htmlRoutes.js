const router = require("express").Router();

const path = require("path");
//route to display index.html
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
//   });
//route to display exercise.html
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
//route to display stats.html
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});



module.exports = router;