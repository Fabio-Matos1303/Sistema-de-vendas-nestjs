/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { LoginModule } from './modules/login/login.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductModule, UserModule, LoginModule, AuthModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
