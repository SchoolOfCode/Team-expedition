import { app } from "./db/app.js";

const PORT = 4000;

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
