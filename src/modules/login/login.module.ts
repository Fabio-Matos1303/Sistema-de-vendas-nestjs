/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginRepository } from './repository/login.repository';
import { AuthService } from '../../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [LoginController],
  providers: [LoginService, PrismaService, LoginRepository, AuthService, JwtService],
})
export class LoginModule { }
