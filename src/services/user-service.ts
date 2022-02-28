import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user";
import { createQueryBuilder, getConnection, getRepository, Repository } from "typeorm";
import {
    paginate,
    Pagination,
    IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { PaginatedRequest, PaginatedResponse } from "src/models/base-response";
import { CreateUserDTO } from "src/models/request/create-user-dto";
import { CreateAttachmentDTO } from "src/models/request/create-attachment-dto";
import { AttachemnentService } from "./attachment-service";
import { Body, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { SystemRole } from "src/entities/systemRole";

export class UserService {

    constructor(@InjectRepository(User)
    private userRepository: Repository<User>,
    private attachmentService: AttachemnentService) { }

    async getAllUsers(pagination: PaginatedRequest<any>): Promise<Pagination<User, PaginatedResponse<any>>> {

        const query = this.userRepository.createQueryBuilder("c");
        //query.where("c.name like :name", { name: "%sac%" })
        query.orderBy('c.name', 'DESC');

        const result = await paginate<User>(query, {
            limit: 100,
            page: 1,
            countQueries: true
        });

        return {
            items: result.items,
            meta: {
                data: [],
                filteredCount: result.items.length,
                pageIndex: result.meta.currentPage,
                pageSize: result.meta.itemsPerPage,
                totalCount: result.meta.totalItems
            }
        };
    }

    getUserById(id): Promise<User[]> {
        return this.userRepository.find({
            where: { id },
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
    }

    getProjects(id): Promise<User> {
        return this.userRepository.findOne({
            where: { id },
            relations: ["projects", "userProjectRole", "userProjectRole.project"]
        });
    }

    getProjectRole(id, pId: number): Promise<User[]> {
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

    getContacts(id): Promise<User> {
        return this.userRepository.findOne({
            where: { id },
            relations: ["contacts"]
        });
    }

    insertUser(user: CreateUserDTO): void {
        this.userRepository.insert(user);
    }

    async modifyDeleteDate(id: number): Promise<void> {
        const today = new Date();
        const user = await this.userRepository.findOne({
            where: { id }
        });
        user.deletedDate = today;
        await this.userRepository.save({ id: user.id, deletedDate: user.deletedDate });
    }

    getGroup(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: { id },
            relations: ['groups']
        });
    }

    getAllReports(id,pId: number): Promise<User> {

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

    @Post('/attachment')
    @ApiBody({
        type: CreateAttachmentDTO,
        required: true,
        description: 'Insert attachment'
    })
    insertAttachment(@Body() attachment: CreateAttachmentDTO): void {
        this.attachmentService.insertAttachment(attachment);
    }


    // async addSystemRole(id: number, role: string): Promise<void> {
    //     const user = await this.userRepository.findOne({
    //         where: { id }
    //     });
    //     user.roles.forEach( (r) => {    
    //         r.type = role;
    //     });
    //     await this.userRepository.save({id: user.id, roles: user.roles});
    // }

    // async addSystemRole(id: number, role: SystemRole): Promise<void> {

    //     const query = await this.userRepository.findOne({id}, {
    //         relations: ['roles']
    //     })

    //     if(query) {
    //         await this.userRepository.save(role)
    //     }
    // }

    async addProjectRole(id: number, role: string) {
        const user = await this.userRepository.findOne({
            where: { id }
        });
        user.userProjectRole.forEach((u) => {
            u.projectRole.type = role;
        });
        await this.userRepository.save({id: user.id, userProjectRole: user.userProjectRole});   
    }


}