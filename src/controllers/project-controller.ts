import { Body, Controller, Get, Param, Post, Put, Res } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { Project } from "src/entities/project";
import { PaginatedRequest } from "src/models/base-response";
import { NewProject } from "src/models/new-project";
import { ProjectService } from "src/services/project-service";

@ApiTags("project")
@Controller('project')
export class ProjectController {

    constructor(private projectService: ProjectService) {}

    @ApiBody({
        type: Project,
        required: true,
        description: 'Create project'
    })
    @Post()
    async createProject(@Res() response, @Body() project: Project) {}
    
    @Get("/")
    async getAllProjects() {
        const projects = await this.projectService.getAllProjects(new PaginatedRequest());
        return projects;
    }

    @Get("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getUserById(@Param("id") id: number) {
        const project = await this.projectService.getProjectById(id);
        return project;
    }

    @Post("/insert")
    @ApiBody({
        type: NewProject,
        required: true,
        description: "Insert new project"
    })
    async insertUser(@Body() project: NewProject) {
        await this.projectService.insertProject(project);
    }

    @Put("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async deleteProject(@Param("id") id: number): Promise<void> {
        await this.projectService.modifyDeleteDate(id);
        
    }

    @Get("/:id/report")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getAllReports(id: number) {
        const reports = await this.projectService.getAllReports(id);
        return reports;
    }

}