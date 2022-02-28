import { InjectRepository } from "@nestjs/typeorm";
import { ProjectRole } from "src/entities/projectRole";
import { CreateSystemRoleDTO } from "src/models/request/create-systemRole-dto";
import { Repository } from "typeorm";

export class ProjectRoleService {

    constructor(@InjectRepository(ProjectRole)
    private projectRoleRepository: Repository<ProjectRole>) {}

    insert(systemRole: CreateSystemRoleDTO): void {
        this.projectRoleRepository.insert(systemRole);
    }

    async modifyDeleteDate(id: number) {
        const today = new Date();
        const role = await this.projectRoleRepository.findOne({
            where: { id }
        });
        role.deletedDate = today;
        await this.projectRoleRepository.save({ id: role.id, deletedDate: role.deletedDate });
    }
}