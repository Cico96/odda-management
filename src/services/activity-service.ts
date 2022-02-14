import { InjectRepository } from "@nestjs/typeorm";
import { Activity } from "src/entities/activity";
import { NewActivity } from "src/models/new-activity";
import { Repository } from "typeorm";

export class ActivityService {

    constructor(@InjectRepository(Activity)
    private activityRepository: Repository<Activity>) {

    }

    getReportsForActivity(id: number) {
        return this.activityRepository.find({
            where: { id },
            relations: ['report']
        });
    }

    
    insertActivity(activity: NewActivity) {
        this.activityRepository.insert(activity)
    }
}