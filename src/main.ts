import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//horário br
  process.env.TZ = '-03:00';
// validação
  app.useGlobalPipes(new ValidationPipe());
// pro front
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
