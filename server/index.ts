import "dotenv/config.js";
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Find the server at: http://localhost:${PORT}/`);
});