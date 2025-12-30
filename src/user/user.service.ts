import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UserService {

    users:User[]=[
        {id:0,name:"user",age:10},
        {id:1,name:"user1",age:20}
    ]


    getAllUser():User[]{
        return this.users;
    }

    getUser(id:number):User{
       const user= this.users.find(u=>u.id===id);
       if(!user){
        throw new NotFoundException({message:"user not found"});
       }
       return user;
    }

    updateUser(id:number,userobj:User):User{
        const user=this.users.find(u=>u.id===id);
        if(!user){
            throw new NotFoundException({message:"user not found"});
        }
        user.name=userobj.name;
        user.age=userobj.age;

        return user;
        
    }


    deleteUser(id:number){
        const user=this.users.find(u=>u.id===id);
        if(!user){
            throw new NotFoundException({message:"user not found"});
        }
        this.users=this.users.filter(u=>u.id!==user.id);
        return {message:"user deleted"}
    }
    createUser(name:string,age:number):User{
        const user:User={id:this.users.length,name,age};
        this.users.push(user);
        return user
    }
}
