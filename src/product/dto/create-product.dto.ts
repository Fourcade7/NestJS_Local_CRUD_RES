import { IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsOptional()
    id:number;
    @IsString()
    name:string;
    

}
