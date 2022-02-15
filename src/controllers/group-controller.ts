import { Controller, Get, Param, Put } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { PaginatedRequest } from "src/models/base-response";
import { GroupService } from "src/services/grop-service";

@ApiTags("group")
@Controller('group')
export class GroupController {

    constructor(private groupService: GroupService) {
        
    }

    @Get('/')
    async getAllGroups() {
        const groups = await this.groupService.getAllGroups(new PaginatedRequest());
        return groups;
    }

    @Get('/:id')
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getGroupById(@Param('id') id: number): Promise<void> {
        const group = await this.groupService.getGroupById(id,);
    }

    @Get('/:id/users')
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getUsers(@Param("id", {transform: (v) => Number(v)}) id: number) {
        const users = await this.groupService.getUsers(id, new PaginatedRequest());
        return users;
    }

    @Put("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async deleteUser(@Param("id") id: number): Promise<void> {
        await this.groupService.modifyDeleteDate(id);
        
    }
}