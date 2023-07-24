import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log({ request });
    return 'This action returns all cats';
  }

  // @Get(':id')
  // findOne(@Param() params: any): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} cat`;
  // }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log({ id });
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Req() request: Request, @Body() createCatDto: CreateCatDto) {


    //console.log({ request });

    console.log({ createCatDto });
    console.log(createCatDto.name + "," + createCatDto.age);
    return 'This action adds a new cat';
  }
}