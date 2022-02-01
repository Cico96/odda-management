import { Body, Controller, Get } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";

@ApiTags('project')
@Controller('project')
export class ProjectController {

    @Get('getAllProjets')
    async getAllProjects() {}

    @Get('getProjectById')
    @ApiBody({
        type: Number,
        required: true,
        description: "Get project by id"
    })
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getProjectById(@Body() id: number) {}
}