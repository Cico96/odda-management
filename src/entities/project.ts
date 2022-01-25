import { report } from "process";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Activity } from "./activity";
import { BaseEntityClass } from "./base";
import { ProjectRole } from "./projectRole";
import { Report } from "./report";

@Entity()
export class Project extends BaseEntityClass {

    @Column({
        type: "varchar", nullable: true
    })
    name: string;

    @Column({
        type: "varchar", nullable: true
    })
    description: string;

    @Column({
        type: "timestamp", nullable: true
    })
    startDate: Date;

    @Column({
        type: "timestamp", nullable: true
    })
    endDate: Date;

    @Column({
        type: "float", nullable: true
    })
    estimatedHours: number;

    @Column({
        type: "float", nullable: true
    })
    estimatedBudget: number;

    @OneToMany(() => Activity, activity => activity.project)
    activities: Activity[];

    @OneToMany(() => Report, report => report.project)
    reports: Report[]
}