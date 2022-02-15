import { Query } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { paginate } from "nestjs-typeorm-paginate";
import { Group } from "src/entities/group";
import { PaginatedRequest } from "src/models/base-response";
import { Repository } from "typeorm";

export class GroupService {

    constructor(@InjectRepository(Group)
    private groupRepository: Repository<Group>) {

    }

    getAllGroups(pagination: PaginatedRequest<any>) {
        
        const query = this.groupRepository.createQueryBuilder('q');
        query.orderBy('q.name', 'DESC');

        return paginate<Group>(query, {
            limit: 100,
            page: 1,
            countQueries: true
        });
    }

    getGroupById(id: number) {
        return this.groupRepository.findOne(id);
    }

    async getUsers(id: number, pagination: PaginatedRequest<any>) {
        
        const query = this.groupRepository.createQueryBuilder('q');
        query.innerJoinAndSelect('q.users', 'users')
        .where('q.id = :group', {
            group: id
        })
        .getMany();

        return paginate<Group>(query, {
            limit: 100,
            page: 1,
            countQueries: true
        })
    }

    async modifyDeleteDate(id: number) {
        const today = new Date();
        const group = await this.groupRepository.findOne({
            where: { id }
        });
        group.deletedDate = today;
        await this.groupRepository.save({ id: group.id, deletedDate: group.deletedDate });
    }



}