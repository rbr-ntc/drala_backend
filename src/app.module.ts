import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_FILTER, APP_PIPE } from '@nestjs/core'
import { AllExceptionsFilter } from './comon/filters/all-exceptions.filter'
// import { ValidationPipe } from './comon/pipes/validation.pipe'
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import configuration from './config/confiuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    // Другие импорты модулей
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },
  ],
})
export class AppModule {}