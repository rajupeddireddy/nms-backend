import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from '../../dtos/LoginDto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('login')
export class LoginController {
  @Post()
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: LoginDto })
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const { email, password } = loginDto;

    if (email === 'admin@example.com' && password === 'password123') {
      return res.status(HttpStatus.OK).json({
        message: 'Login successful',
        token: 'dummy-jwt-token',
      });
    } else {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Invalid credentials',
      });
    }
  }
}
