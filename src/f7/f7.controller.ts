import { Body, Controller, Delete, Get, Headers, HttpCode, HttpStatus, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('')
export class F7Controller {


    @Get()
    getF7():object{
        return {message:"f7 message get"};
    }

    @Get("/p/:id")
    getF7Param(@Param("id") id:string):object{

        return {message:`f7 id is ${id}`};
    }

    @Get("/q")
    getF7Query(@Query("age") age:number,@Query() allq:object,@Query() allobj:any):object{
        return {message:`query age is ${age}`,allq,all:`${allobj}`}
    }

    @Get("/h")
    getF7Header(@Headers("hd") hd:string, @Headers() allhd:object):object{
        return {message:`header hd name ${hd}`,allhd}
    }


    @Post("/add")
    newF7(@Body() body:object):object{
        return body
    }

    

    @Patch("/u/:id")
    upadteF7(@Param("id") id:string){
        return {message:`updated id ${id}`}
    }
    @Put("/uf/:id")
    upadteFullF7(@Param("id") id:string){
        return {message:`updatedFull id ${id}`}
    }

    @Delete("/d/:id")
    @HttpCode(HttpStatus.OK)
    deleteF7(@Param("id") id:string){
        return {message:`deleted id ${id}`}
    }









}
