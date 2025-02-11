import { Injectable } from '@nestjs/common';
import {AuthResponse} from "./types/auth.type";

@Injectable()
export class AuthService     {
    googleLogin(req): AuthResponse {
        if (!req.user) {
            throw new Error('Giriş uğursuz oldu');
        }

        const { tokens, ...userData } = req.user;

        return {
            statusCode: 200,
            message: 'Google-dan istifadəçi məlumatları',
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