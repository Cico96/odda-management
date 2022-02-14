import { Controller, Get, Param, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { NewActivity } from "src/models/new-activity";
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
    async getReportsForActivity(@Param() id: number) {
        const reports = await this.activityService.getReportsForActivity(id);
    }

    @Post("/activity")
    @ApiBody({
        type: NewActivity,
        required: true,
        description: 'Add new activity'
    })
    async insertActivity(@Param() activity: NewActivity) {
        this.activityService.insertActivity(activity);
    }
}