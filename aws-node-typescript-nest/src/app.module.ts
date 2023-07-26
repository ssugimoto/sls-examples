import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UsersModule } from './users/users.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptor/logging/logging.interceptor';

@Module({
  imports: [UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService, { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor, }],
})
export class AppModule { }
