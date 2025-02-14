import express from "express";

const app = express();

app.get("/", (_req, res) => {
  const age: number = 25;
  console.log(age)
  console.log("🔹 Request received at /");
  res.send("<h1>Hello, World!</h1>");
});

// Add a test function to debug

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
