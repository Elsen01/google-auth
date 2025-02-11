import { Injectable } from '@nestjs/common';
import {AuthResponse} from "./types/auth.type";

@Injectable()
export class AuthService     {
    googleLogin(req): AuthResponse {
        if (!req.user) {
            throw new Error('Login failed');
        }

        const { tokens, ...userData } = req.user;

        return {
            statusCode: 200,
            message: 'User data from Google',
            data: {
                user: userData,
                tokens: {
                    accessToken: tokens.accessToken,
                    refreshToken: tokens.refreshToken
                }
            }
        };
    }
}