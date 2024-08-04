import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ["debug", "error", "log", "warn"],
  });

  const config = new DocumentBuilder()
    .setTitle("Redirect api")
    .setDescription("API that redirect short urls")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3001);
}
bootstrap();
