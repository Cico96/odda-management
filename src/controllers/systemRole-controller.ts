import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreateSystemRoleDTO } from "src/models/request/create-systemRole-dto";
import { SystemRoleService } from "src/services/systemRole-service";

@ApiTags("systemRole")
@Controller('systemRole')
export class SystemRoleController {

    constructor(private systemRoleService: SystemRoleService) {}

    @Post("/insert")
    @ApiBody({
        type: CreateSystemRoleDTO,
        required: true,
        description: 'Insert system role'
    })
    async insertSystemRole(@Body() systemRole: CreateSystemRoleDTO) {
        await this.systemRoleService.insertSystemRole(systemRole);
    }
}