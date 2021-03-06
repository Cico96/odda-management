import { InjectRepository } from "@nestjs/typeorm";
import { Activity } from "src/entities/activity";
import { CreateActivityDTO } from "src/models/request/create-activity-dto";
import { Repository } from "typeorm";

export class ActivityService {

    constructor(@InjectRepository(Activity)
    private activityRepository: Repository<Activity>) {

    }

    getReports(id: number): Promise<Activity[]> {
        return this.activityRepository.find({
            where: { id },
            relations: ['report']
        });
    }

    
    insertActivity(activity: CreateActivityDTO): void {
        this.activityRepository.insert(activity)
    }

    async modifyDeleteDate(id: number): Promise<void> {
        const today = new Date();
        const activity = await this.activityRepository.findOne({
            where: { id }
        });
        activity.deletedDate = today;
        await this.activityRepository.save({ id: activity.id, deletedDate: activity.deletedDate });
    }

}