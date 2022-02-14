import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { NewReport } from "src/models/new-report";
import { ReportService } from "src/services/report-service";

@ApiTags("report")
@Controller('report')
export class ReportController {

    constructor(private reportService: ReportService) {}

    @Post('/report')
    @ApiBody({
        type: NewReport,
        required: true,
        description: 'Add new report'
    })
    insertReport(@Body() newReport: NewReport) {
        this.reportService.insertReport(newReport);
    }

    @Put("/:id")
    @ApiParam({
        name: 'id',
        type: Number
    })
    async deleteProject(@Param("id") id: number): Promise<void> {
        await this.reportService.modifyDeleteDate(id);
        
    }

}