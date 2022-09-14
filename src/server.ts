import { AppDataSource } from "./data-source";
import { app } from "./app";
import "dotenv/config";
(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initalization", err);
  });
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Server running at port ${process.env.PORT}!`)
  );
})();
