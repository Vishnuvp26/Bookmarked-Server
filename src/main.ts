import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT') || 3000;
    const clientUrl = configService.get<string>('CLIENT_URL');

    app.enableCors({
        origin: clientUrl,
        credentials: true,
    });

    await app.listen(port);
    console.log(`Server running on http://localhost:${port}`);
}

bootstrap();