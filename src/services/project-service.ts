import { InjectRepository } from "@nestjs/typeorm";
import { paginate } from "nestjs-typeorm-paginate";
import { Project } from "src/entities/project";
import { PaginatedRequest } from "src/models/base-response";
import { NewProject } from "src/models/new-project";
import { Repository } from "typeorm";

export class ProjectService {
    
    constructor(@InjectRepository(Project)
    private projectRepository: Repository<Project>) {

    }

    getAllProjects(pagination: PaginatedRequest<any>) {

        const query = this.projectRepository.createQueryBuilder("p");
        return paginate<Project>(query, {
            limit: 100,
            page: 1,
            countQueries: true
        });

    }

    getProjectById(id: number) {
        return this.projectRepository.find({
            where: { id },
            relations: ['userProjectRole']
        });
    }

    insertProject(project: NewProject) {
        this.projectRepository.insert(project);
    }

    async modifyDeleteDate(id: number) {
        const today = new Date();
        const project = await this.projectRepository.findOne({
            where: { id }
        });
        project.deletedDate = today;
        await this.projectRepository.save({ id: project.id, deletedDate: project.deletedDate });
    }

    getAllReports(id: number) {
        return this.projectRepository.find({
            where: { id },
            relations: ['reports']
        });
    }


}