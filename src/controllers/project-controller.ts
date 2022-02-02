import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { Project } from "src/entities/project";

@ApiTags("project")
@Controller('project')
export class ProjectController {

    @ApiBody({
        type: Project,
        required: true,
        description: 'Create project'
    })
    @Post()
    async createProject(@Res() response, @Body() project: Project) {}

    @Get('/')
    async getAllProjects() {}

}