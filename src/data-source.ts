import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: true,
  extra: { ssl: { rejectUnauthorized: false } },
  entities:
    process.env.NODE === "production"
      ? ["dist/src/entities/**/*.{ts,js}"]
      : ["src/entities/**/*.{ts,js}"],
  migrations:
    process.env.NODE === "production"
      ? ["dist/src/migrations/**/*.{ts,js}"]
      : ["src/migrations/**/*.{ts,js}"],
  synchronize: false,
  logging: true,
});

export { AppDataSource };
