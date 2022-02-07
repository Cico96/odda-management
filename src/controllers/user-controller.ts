import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags,  } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/project';
import { User } from 'src/entities/user';
import { UserService } from 'src/services/user-service';
import { Repository } from 'typeorm';

@ApiTags("user")
@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @ApiBody({
        type: User,
        required: true,
        description: "Create user"
    })
    @Post()
    async createUser(@Res() response, @Body() user: User) {}

    
    @Get("/")
    async getAllUsers() {
        const users = await this.userService.getAllUsers();
        return users;
    }

    @Get("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getUserById(@Param("id") id: number) {
        const users = await this.userService.getUserById(id);
        return users;
    }
    
    @Get("/:id/projects")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getUserProjects(@Param("id") id: number) {
        const projects = (await this.userService.getUserProjects(id)).projects;
        return projects;
    }

    @Get("/:id/project/:pId")
    @ApiParam({
        name: 'id',
        type: Number
    })
    @ApiParam({
        name: 'pId',
        type: Number
    })
    async getUserProjectRole(@Param("id") id: number, @Param("pId") pId: number) {
        const users = await this.userService.getUserProjectRole(id, pId);
        return users;
    }

    // @Get("/:id/project/:pId")
    // @ApiParam({
    //     name: 'id',
    //     type: Number
    // })
    // @ApiParam({
    //     name: 'pId',
    //     type: Number
    // })
    // async getUserProjectRole(@Param("id") id: number, @Param("pId") pId: number) {
    //     const users = await this.userRepository.findOne({
    //         where:{id} ,
    //         relations: ["projects", "userProjectRole", "userProjectRole.project"]
    //     });
    //     return users;
    // }
    
}