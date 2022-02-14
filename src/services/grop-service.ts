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

    getAllUserFromGroup(id: number) {
        return this.groupRepository.find({
            where: { id },
            relations: ['users']
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