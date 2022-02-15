import { InjectRepository } from "@nestjs/typeorm";
import { Report } from "src/entities/report";
import { CreateReportDTO } from "src/models/request/create-report-dto";
import { Repository } from "typeorm";

export class ReportService {
    
    constructor(@InjectRepository(Report)
    private reportRepository: Repository<Report>) {

    }

    insertReport(report: CreateReportDTO) {
        this.reportRepository.insert(report);
    }

    async modifyDeleteDate(id: number) {
        const today = new Date();
        const report = await this.reportRepository.findOne({
            where: { id }
        });
        report.deletedDate = today;
        await this.reportRepository.save({ id: report.id, deletedDate: report.deletedDate });
    }


    
}