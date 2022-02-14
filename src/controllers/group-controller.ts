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
    async getGroupById(id: number) {
        const group = await this.groupService.getAllUserFromGroup(id);
        return group;
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