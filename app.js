const express = require("express");
const app = express();

app.use(express.json());

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_lowercase_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (
            !highest_lowercase_alphabet && 
            /^[a-z]$/.test(item)
        ) {
            highest_lowercase_alphabet = item;
        } else if (/^[a-z]$/.test(item) && item > highest_lowercase_alphabet) {
            highest_lowercase_alphabet = item;
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "suryansh_pandey_22092003",
      email: "suryansh.pandey2021@vitstudent.ac.in",
      roll_number: "21BCE5004",
      numbers: numbers,
      alphabets: alphabets,
      highest_lowercase_alphabet: highest_lowercase_alphabet ? [highest_lowercase_alphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on https://two1bce5004-backend-kqmw.onrender.com:${port}`);
});
