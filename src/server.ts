import { AppDataSource } from "./data-source";
import { app } from "./app";

(async () => {
    const PORT = 3333;
    AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized");
    })
    .catch(() => {
        console.error("Error during Data Source initalization");
    });
    app.listen(PORT, () => console.log(`Server running at port ${PORT}!`));
})();