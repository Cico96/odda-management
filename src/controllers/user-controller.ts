import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags,  } from '@nestjs/swagger';
import { User } from 'src/entities/user';

@ApiTags("user")
@Controller('user')
export class UserController {

    /*@Get()
    @ApiResponse({ type: User})
    findAll(): User[] {
        return;
    }*/

    @ApiBody({
        type: User,
        required: true,
        description: "We invia sto azzo di user"
    })
    @Post()
    async createUser(@Res() response, @Body() user: User) {
        console.log("ci siamo riusciti", user);
    }
}