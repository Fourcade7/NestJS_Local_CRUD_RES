
import {  IsNumber, IsOptional, IsString } from "class-validator";


export class User {
    
    @IsOptional()
    id:number;
    @IsString()
    name:string;
    @IsNumber()
    age:number;
}
