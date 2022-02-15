import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user";
import { createQueryBuilder, Repository } from "typeorm";
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { PaginatedRequest } from "src/models/base-response";
import { CreateUserDTO } from "src/models/request/create-user-dto";

export class UserService {

    constructor(@InjectRepository(User)
    private userRepository: Repository<User>) { }

    getAllUsers(pagination: PaginatedRequest<any>) {

        const query = this.userRepository.createQueryBuilder("c");
        //query.where("c.name like :name", { name: "%sac%" })
        query.orderBy('c.name', 'DESC');

        return paginate<User>(query, {
            limit: 100,
            page: 1,
            countQueries: true
        });
    }

    getUserById(id) {
        return this.userRepository.find({
            where: { id },
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
    }

    getProjects(id) {
        return this.userRepository.findOne({
            where: { id },
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
    }

    getProjectRole(id, pId: number) {
        const query = this.userRepository.createQueryBuilder("t1")
            .leftJoinAndSelect("t1.userProjectRole", "t2")
            .leftJoinAndSelect("t2.projectRole", "t3")
            .where("t1.id = :user AND t2.projectId = :project", {
                user: id,
                project: pId
            }).getMany();
        console.log(query)
        return query;
    }

    getContacts(id) {
        return this.userRepository.findOne({
            where: { id },
            relations: ["contacts"]
        });
    }

    insertUser(user: CreateUserDTO) {
        this.userRepository.insert(user);
    }

    async modifyDeleteDate(id: number) {
        const today = new Date();
        const user = await this.userRepository.findOne({
            where: { id }
        });
        user.deletedDate = today;
        await this.userRepository.save({ id: user.id, deletedDate: user.deletedDate });
    }

    getGroup(id: number) {
        return this.userRepository.findOne({
            where: { id },
            relations: ['groups']
        });
    }

    getAllReports(id,pId: number) {
        const query = this.userRepository.createQueryBuilder('user')
        .innerJoinAndSelect("user.projects", "project")
        .innerJoinAndSelect("project.reports", "reports")
        .where("user.id = :user AND project.id = :project", {
            user: id,
            project: pId
        })
        .take(1)
        .getOne();
        return query;
    }
}