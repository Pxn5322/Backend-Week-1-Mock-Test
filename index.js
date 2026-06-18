let express = require("express");
let path = require("path");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();
const { DATABASE_URL } = process.env;

let app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.post("/books", async (req, res) => {
  const client = await pool.connect();
  try {
    if (!req.body.title || !req.body.author || !req.body.year_published) {
      res.status(400).json({
        error: "Bad Request."
      })
      return;
    }
    const data = {
      "title": req.body.title,
      "author": req.body.author,
      "year_published": req.body.year_published
    };

    const query = "INSERT INTO books (title,author,year_published) VALUES ($1,$2,$3) RETURNING id";
    const params = [data.title, data.author, data.year_published];
    const result = await client.query(query, params);
    data.id = result.rows[0].id;

    res.json({
      status: "success",
      data: data,
      message: "Succssfull created."
    })
  } catch (error) {
    console.error("Error: ", error.message)
  } finally {
    client.release();
  }
});

app.get("/books", async (req, res) => {
  const client = await pool.connect();
  try {
    const query = "SELECT * FROM books";

    const result = await client.query(query);

    res.json({
      status: "success",
      data: result.rows,
      message: "Succssfull get data."
    })
  } catch (error) {
    console.error("Error: ", error.message)
  } finally {
    client.release();
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App is listening on port 3000");
});
