import { InjectRepository } from "@nestjs/typeorm";
import { SystemRole } from "src/entities/systemRole";
import { CreateSystemRoleDTO } from "src/models/request/create-systemRole-dto";
import { Repository } from "typeorm";

export class SystemRoleService {

    constructor(@InjectRepository(SystemRole)
    private systemRoleRepository: Repository<SystemRole>) {}

    insertSystemRole(systemRole: CreateSystemRoleDTO): void {
        this.systemRoleRepository.insert(systemRole);
    }
}