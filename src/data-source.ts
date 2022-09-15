import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/**/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: ["src/entities/**.ts"],
        migrations: ["src/migrations/**.ts"],
        synchronize: false,
        logging: true,
      });

export { AppDataSource };
