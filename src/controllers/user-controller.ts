import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags,  } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/project';
import { User } from 'src/entities/user';
import { Repository } from 'typeorm';

@ApiTags("user")
@Controller('user')
export class UserController {

    constructor(@InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Project)
    private projectRepository: Repository<Project>){

    }

    @ApiBody({
        type: User,
        required: true,
        description: "We invia sto azzo di user"
    })
    @Post()
    async createUser(@Res() response, @Body() user: User) {}

    
    @Get("/")
    async getAllUsers() {
        const users = await this.userRepository.find();
        return users;
    }

    @Get("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getUserById(@Param("id") id: number) {
        const users = await this.userRepository.findOne({
            where:{id} ,
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
        return users;
    }
    
    @Get("/:id/projects")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getUserProjects(@Param("id") id: number) {
        const projects =( await this.userRepository.findOne({
            where:{id} ,
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        })).projects;
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
    async getUserProject(@Param("id") id: number, @Param("pId") pId: number) {
        const users = await this.userRepository.findOne({
            where:{id} ,
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
        return users;
    }
    
}