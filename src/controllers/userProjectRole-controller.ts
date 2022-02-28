import { Body, Controller, Post, Put } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { UserProjectRole } from "src/entities/user-project-role";
import { CreateProjectRoleDTO } from "src/models/request/create-projectRole-dto";
import { CreateUserProjectRoleDTO } from "src/models/request/create-userProjectRole-dto";
import { UserProjectRoleService } from "src/services/userProjectRole-service";

@ApiTags('userProjectRole')
@Controller('userProjectRole')
export class UserProjectRoleController {

    constructor(private uprService: UserProjectRoleService) {

    }

    @Post('userProjectRoles')
    @ApiBody({
        type: CreateUserProjectRoleDTO,
        description: 'Add new role to a specified user in a project'
    })
    async addNewRole(@Body() userProjectRole: CreateProjectRoleDTO) {
        //await this.uprService.addNewRole(userProjectRole);
    }
}