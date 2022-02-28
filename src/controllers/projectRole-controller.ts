import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateProjectRoleDTO } from "src/models/request/create-projectRole-dto";
import { ProjectRoleService } from "src/services/projectRole-service";

@ApiTags("projectRole")
@Controller('projectRole')
export class ProjectRoleController {
    
    constructor(private projectRoleService: ProjectRoleService) {}

    @Post("/insert")
    @ApiBody({
        type: CreateProjectRoleDTO,
        required: true,
        description: 'Insert system role'
    })
    async insert(@Body() systemRole: CreateProjectRoleDTO) {
        await this.projectRoleService.insert(systemRole);
    }


    @Put("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async deleteUser(@Param("id") id: number): Promise<void> {
        await this.projectRoleService.modifyDeleteDate(id);
        
    }
}