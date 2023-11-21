import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // para servir html desde Express

  app.enableCors({
    origin: ['*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    // credentials: true
  });

  const config = new DocumentBuilder()
    .setTitle('API tasky server')
    .setDescription('APIs')
    .setVersion('1.0')
    .addTag('email')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  // para servir html desde Express
  // https://stackoverflow.com/questions/54680459/serving-static-content-alongisde-angular-app
  app.useStaticAssets(join(__dirname, '..', 'tasker'), { prefix: "/tasker/" });
  app.useStaticAssets(join(__dirname, '..', 'supplier'), { prefix: "/supplier/" });
  app.useStaticAssets(join(__dirname, '..', 'page'), { prefix: "/page/" });
  app.useStaticAssets(join(__dirname, '..', 'tasker'), { prefix: "/" });
  // app.useStaticAssets(join(__dirname, '..', 'page'), { prefix: "*" });

  await app.listen(3000);
}
bootstrap();
