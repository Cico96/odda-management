import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
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
    async insert(@Body() systemRole: CreateSystemRoleDTO) {
        await this.systemRoleService.insert(systemRole);
    }


    @Put("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async deleteUser(@Param("id") id: number): Promise<void> {
        await this.systemRoleService.modifyDeleteDate(id);
        
    }
}