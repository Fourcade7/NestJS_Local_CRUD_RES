import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';

@Controller('user')
export class UserController {

  constructor(private readonly userService:UserService){}

  @Get()
  getAllUser():User[]{
    return this.userService.getAllUser();
  }


  @Get(":id")
  getUserById(@Param("id",ParseIntPipe) id:number){
    return this.userService.getUser(id);
  }

  @Patch(":id")
  updateUser(@Param("id",ParseIntPipe) id:number,@Body() body:User){
    return this.userService.updateUser(id, body);
  }

  @Delete(":id")
  deleteUser(@Param("id",ParseIntPipe) id:number){
    return this.userService.deleteUser(id);
  }



  @Post('/add')
  createUser(@Body("name") name:string,@Body("age") age:number){

    return this.userService.createUser(name, age)

  }
   

}
