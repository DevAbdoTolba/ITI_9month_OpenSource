import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TodoModule,MongooseModule.forRoot('mongodb://localhost:27017/nest_day2'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 