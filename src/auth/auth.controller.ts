import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from "./auth.service";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get()
    getHello() {
        return 'Welcome to Google Auth!';
    }

    @Get('auth/google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {
        return {
            accessType: 'offline',
            prompt: 'consent'
        }
    }

    @Get('auth/google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req) {
        return this.authService.googleLogin(req);
    }
}
