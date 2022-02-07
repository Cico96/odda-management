import { InjectRepository } from "@nestjs/typeorm";
import { pid } from "process";
import { User } from "src/entities/user";
import { Repository } from "typeorm";

export class UserService {

    constructor(@InjectRepository(User)
    private userRepository: Repository<User>) { }

    getAllUsers() {
        return this.userRepository.find();
    }

    getUserById(id) {
        return this.userRepository.find({
            where: { id },
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
    }

    getUserProjects(id) {
        return this.userRepository.findOne({
            where: { id },
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
    }

    getUserProjectRole(id, pId) {
        return this.userRepository.findOne({
            where: {
                'id': id, 'projects.id': pId
            },
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
    }
}