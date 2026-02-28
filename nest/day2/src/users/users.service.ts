import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { EmailService } from './email.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly emailService: EmailService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    const existingUser = await this.userModel.findOne({ email: registerUserDto.email }).exec();
    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);
    const createdUser = new this.userModel({
      ...registerUserDto,
      password: hashedPassword,
    });
    const savedUser = await createdUser.save();

    // Fire and forget email service
    this.emailService.sendWelcomeEmail(savedUser.email);

    return {
      message: 'User registered successfully',
      user: {
        name: savedUser.name,
        email: savedUser.email,
        id: savedUser._id,
      },
    };
  }

  async login(loginUserDto: LoginUserDto): Promise<{ token: string }> {
    const user = await this.userModel.findOne({ email: loginUserDto.email }).exec();
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(loginUserDto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      '7ady_pady_shaloy_we_7ato_fe_el_7awashy',
      { expiresIn: '1h' },
    );

    // Fire and forget email service
    this.emailService.sendLoginAlert(user.email);

    return { token };
  }
}
