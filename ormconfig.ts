import { ConnectionOptions } from 'typeorm';
import path from 'path';

const isCompiled = path.extname(__filename).includes('js');

const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 8080,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'test',
  synchronize: !!process.env.DB_SYNC,
  // logging: !!process.env.DB_LOGS,
  entities: [__dirname + '/../**/**.entity{.ts,.js}'],
  migrations: [`src/migration/**/*.${isCompiled ? 'js' : 'ts'}`],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
  },
};

export = config;
