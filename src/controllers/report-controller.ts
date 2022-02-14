import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
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
    addReport(@Body() newReport: NewReport) {
        this.reportService.addReport(newReport);
    }

}