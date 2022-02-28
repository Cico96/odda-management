import { InjectRepository } from "@nestjs/typeorm";
import { SystemRole } from "src/entities/systemRole";
import { CreateSystemRoleDTO } from "src/models/request/create-systemRole-dto";
import { Repository } from "typeorm";

export class SystemRoleService {

    constructor(@InjectRepository(SystemRole)
    private systemRoleRepository: Repository<SystemRole>) {}

    insert(systemRole: CreateSystemRoleDTO): void {
        this.systemRoleRepository.insert(systemRole);
    }

    async modifyDeleteDate(id: number) {
        const today = new Date();
        const role = await this.systemRoleRepository.findOne({
            where: { id }
        });
        role.deletedDate = today;
        await this.systemRoleRepository.save({ id: role.id, deletedDate: role.deletedDate });
    }
}