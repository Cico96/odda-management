import { Body, Controller, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateReportDTO } from "src/models/request/create-report-dto";
import { ReportService } from "src/services/report-service";

@ApiTags("report")
@Controller('report')
export class ReportController {

    constructor(private reportService: ReportService) {}

    @Post('/report')
    @ApiBody({
        type: CreateReportDTO,
        required: true,
        description: 'Add new report'
    })
    insertReport(@Body() CreateReportDTO: CreateReportDTO) {
        this.reportService.insertReport(CreateReportDTO);
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