import { APP_PORTS } from '@poc-nx-workspace/shared/util';
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(APP_PORTS.API);
  Logger.log(
    `🚀 Application is running on: http://localhost:${APP_PORTS.API}/${globalPrefix}`
  );
}

bootstrap();
