import { Body, Controller, Get, Req } from "@nestjs/common";

@Controller('user')
export class UserController {

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all user.';
  }

}