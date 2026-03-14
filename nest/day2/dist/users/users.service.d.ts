import { Model } from 'mongoose';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDocument } from './schemas/user.schema';
import { EmailService } from './email.service';
export declare class UsersService {
    private userModel;
    private readonly emailService;
    constructor(userModel: Model<UserDocument>, emailService: EmailService);
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
}
