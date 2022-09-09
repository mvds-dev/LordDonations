import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  url: process.env.DATABASE_URL,
  ssl:
    process.env.NODE === "production" ? { rejectUnauthorized: false } : false,
  entities:
    process.env.NODE === "production"
      ? ["dist/src/entities/**/*.{ts,js}"]
      : ["src/entities/**/*.{ts,js}"],
  migrations:
    process.env.NODE === "production"
      ? ["dist/src/entities/**/*.{ts,js}"]
      : ["src/entities/**/*.{ts,js}"],
  synchronize: false,
  logging: true,
});

export { AppDataSource };
