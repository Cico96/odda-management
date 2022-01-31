import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntityClass } from "./base";
import { Project } from "./project";
import { Report } from "./report";

@Entity()
export class Activity extends BaseEntityClass {

    @Column({
        type: "varchar"
    })
    name: string;

    @Column({
        type: "float"
    })
    billing: number;

    @ManyToOne(() => Project,)
    project: Project;

    @ManyToOne(() => Report, report => report.activities)
    report: Report;
}