import { CreateProjectDTO } from "./models/request/create-project-dto";
import { ProjectService } from "./services/project-service";

export class Seeder {

    date = new Date();

    project: CreateProjectDTO = {
        name: "Odda Web Develop",
        description: "Develop web experience",
        startDate: this.date,
        endDate: this.date,
        estimatedHours: 0,
        estimatedBudget: 0
    }

    constructor(private projectService: ProjectService) {
    
    }

    insert() {
        this.projectService.insertProject(this.project);
    }



}