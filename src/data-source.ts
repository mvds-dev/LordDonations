import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  url: process.env.DATABASE_URL,
  entities: ["src/entities/**.ts"],
  migrations: ["src/migrations/**.ts"],
  synchronize: false,
  logging: true,
});

export { AppDataSource };
