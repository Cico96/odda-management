import { InjectRepository } from "@nestjs/typeorm";
import { Report } from "src/entities/report";
import { NewReport } from "src/models/new-report";
import { Repository } from "typeorm";

export class ReportService {
    
    constructor(@InjectRepository(Report)
    private reportRepository: Repository<Report>) {

    }

    addReport(report: NewReport) {
        this.reportRepository.insert(report);
    }

    
}