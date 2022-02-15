import { InjectRepository } from "@nestjs/typeorm";
import { Activity } from "src/entities/activity";
import { NewActivity } from "src/models/new-activity";
import { Repository } from "typeorm";

export class ActivityService {

    constructor(@InjectRepository(Activity)
    private activityRepository: Repository<Activity>) {

    }

    getReports(id: number) {
        return this.activityRepository.find({
            where: { id },
            relations: ['report']
        });
    }

    
    insertActivity(activity: NewActivity) {
        this.activityRepository.insert(activity)
    }

    async modifyDeleteDate(id: number) {
        const today = new Date();
        const activity = await this.activityRepository.findOne({
            where: { id }
        });
        activity.deletedDate = today;
        await this.activityRepository.save({ id: activity.id, deletedDate: activity.deletedDate });
    }

}