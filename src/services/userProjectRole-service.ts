import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "src/entities/project";
import { ProjectRole } from "src/entities/projectRole";
import { User } from "src/entities/user";
import { UserProjectRole } from "src/entities/user-project-role";
import { CreateUserProjectRoleDTO } from "src/models/request/create-userProjectRole-dto";
import { Repository } from "typeorm";

export class UserProjectRoleService {

    constructor(
        @InjectRepository(UserProjectRole)
        private uprRepository: Repository<UserProjectRole>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(ProjectRole)
        private prjRoleRepository: Repository<ProjectRole>,
        @InjectRepository(Project)
        private prjRepository: Repository<Project>
    ) {

    }

    async addNewRole(userProjectRole: CreateUserProjectRoleDTO) {
        const user = await this.userRepository.findOne(userProjectRole.idUser);
        const project = await this.prjRepository.findOne(userProjectRole.idProject);
        const projectRole = await this.prjRoleRepository.findOne(userProjectRole.idProjectRole);
        
        const newUserProjectRole: UserProjectRole = { user, project, projectRole, id: 0, creationDate: undefined }; 
        return await this.uprRepository.insert(newUserProjectRole)
    }

}