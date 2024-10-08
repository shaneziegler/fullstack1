import "dotenv/config.js";
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Find Median Prime Numbers Server at: http://localhost:${PORT}/`);
});