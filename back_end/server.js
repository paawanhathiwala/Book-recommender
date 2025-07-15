const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const { spawn } = require('child_process');

app.use(cors()); 
app.use(express.json());

app.get('/api/top-books', (req, res) => {
  fs.readFile('top_50_books.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to load data' });
    res.json(JSON.parse(data));
  });
});

app.post('/api/recommend', (req, res) => {
  const bookName = req.body.book;
  console.log("Received book name:", bookName);

  const python = spawn('python', ['recommend.py', bookName]);

  let result = '';
  let error = '';

  python.stdout.on('data', (data) => {
    result += data.toString();
  });

  python.stderr.on('data', (data) => {
    error += data.toString();
  });

  python.on('close', (code) => {
    if (error) {
      console.error("Python Error:", error);
      return res.status(500).json({ error: "Python script failed" });
    }
    try {
      const json = JSON.parse(result);
      res.json(json);
    } catch (err) {
      console.error("JSON Parse Error:", result);
      res.status(500).json({ error: "Invalid JSON from Python" });
    }
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));