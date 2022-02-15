import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags,  } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'src/entities/project';
import { User } from 'src/entities/user';
import { PaginatedRequest } from 'src/models/base-response';
import { CreateUserDTO } from 'src/models/request/create-user-dto';
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
        const users = await this.userService.getAllUsers(new PaginatedRequest());
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
    async getProjects(@Param("id") id: number) {
        const projects = (await this.userService.getProjects(id)).projects;
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
    async getProjectRole(@Param("id") id: number, @Param("pId") pId: number) {
        const users = await this.userService.getProjectRole(id, pId);
        return users;
    }
    
    @Get("/:id/contacts")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getContacts(@Param("id") id: number) {
        const contacts = await this.userService.getContacts(id);
        return contacts;
    }

    @Post("/insert")
    @ApiBody({
        type: CreateUserDTO,
        required: true,
        description: "Insert new user"
    })
    async insertUser(@Body() user: CreateUserDTO) {
        await this.userService.insertUser(user);
    }

    @Get("/:id/group")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getGroup(@Param("id") id: number) {
        const group = await this.userService.getGroup(id);
        return group;
    }

    @Put("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async deleteUser(@Param("id") id: number): Promise<void> {
        await this.userService.modifyDeleteDate(id);
        
    }

    
    @Get(":id/project/:pId/report")
    @ApiParam({
        name: 'id',
        type: Number
    })
    @ApiParam({
        name: 'pId',
        type: Number
    })
    async getAllReports(@Param("id") id: number, @Param("pId") pId: number ) {
        const reports = await this.userService.getAllReports(id, pId);
        return reports;
    }
}