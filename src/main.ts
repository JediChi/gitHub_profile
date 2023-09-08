import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from 'src/loggers/pino.logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, 
  });
  
  try {
    const PORT = process.env.PORT || 3006;
    await app.listen(PORT);
    logger.info(`Started on port ${PORT}.`);
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
}
bootstrap().then();
