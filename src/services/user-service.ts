import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user";
import { createQueryBuilder, Repository } from "typeorm";
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { PaginatedRequest } from "src/models/base-response";
import { NewUser } from "src/models/new-user";

export class UserService {

    constructor(@InjectRepository(User)
    private userRepository: Repository<User>) { }

    getAllUsers(pagination: PaginatedRequest<any>) {
        console.log(pagination);

        
        const query = this.userRepository.createQueryBuilder("c");
        query.where("c.name like :name", {name: "%sac%"})

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

    getUserProjects(id) {
        return this.userRepository.findOne({
            where: { id },
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
    }

    getUserProjectRole(id, pId: number) {
        const query = this.userRepository.createQueryBuilder("t1")
        .leftJoinAndSelect("t1.userProjectRole", "t2")
        .leftJoinAndSelect("t2.projectRole", "t3")
        .where("t1.id = :user AND t2.projectId = :project", {
            user: id,
            project: pId
        }).getMany();
        console.log(query)
        return query;
        // // return this.userRepository.findOne({
        // //     where: {
        // //         'id': id, 'projects.id': pId
        // //     },
        // //     relations: ["projects", "userProjectRole", "userProjectRole.project"]
        // // });
        // const role = this.userRepository.find({
        //     relations: [
        //         "userProjectRole"
        //     ],
        //     where: [{
        //         id: id
        //     }, {
        //         userProjectRole: {
                    
        //         }
        //     }]
        // });
        // console.log(role);
       
    }

    getUserContacts(id) {
        return this.userRepository.findOne({
            where: { id },
            relations: ["contacts"]
        });
    }

    insertUser(user: NewUser) {
        this.userRepository.insert(user);
    }

    // deleteUser(id: number) {
    //     const user = this.userRepository.findOne({
    //         where: { id }
    //     });
    //     user.then( (u) => {
    //         u.deletedDate;
    //     })
    // }

    getUserGroup(id: number) {
        return this.userRepository.findOne({
            where: { id },
            relations: ['groups']
        });
    }
}