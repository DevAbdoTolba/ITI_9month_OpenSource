import { UsersService } from './users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import express from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(registerUserDto: RegisterUserDto): Promise<{
        message: string;
        user: {
            name: string;
            email: string;
            id: import("mongoose").Types.ObjectId;
        };
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        token: string;
    }>;
    getProfile(req: express.Request): {
        message: string;
        user: any;
    };
}
