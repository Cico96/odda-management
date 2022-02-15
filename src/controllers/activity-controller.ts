import { Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateActivityDTO } from "src/models/request/create-activity-dto";
import { ActivityService } from "src/services/activity-service";

@ApiTags("activity")
@Controller('activity')
export class ActivityController {

    constructor(private activityService: ActivityService) {}

    @Get("/:id/reports")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async getReports(@Param() id: number): Promise<void> {
        const reports = await this.activityService.getReports(id);
    }

    @Post("/activity")
    @ApiBody({
        type: CreateActivityDTO,
        required: true,
        description: 'Add new activity'
    })
    async insertActivity(@Param() activity: CreateActivityDTO): Promise<void> {
        this.activityService.insertActivity(activity);
    }

    @Put("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async deleteProject(@Param("id") id: number): Promise<void> {
        await this.activityService.modifyDeleteDate(id);
        
    }
}