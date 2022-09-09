import { AppDataSource } from "./data-source";
import { app } from "./app";
import "dotenv/config";
(async () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized");
    })
    .catch(() => {
      console.error("Error during Data Source initalization");
    });
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Server running at port ${process.env.PORT}!`)
  );
})();
