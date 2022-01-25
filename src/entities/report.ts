import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Activity } from "./activity";
import { Attachment } from "./attachment";
import { BaseEntityClass } from "./base";
import { Project } from "./project";
import { User } from "./user";

@Entity()
export class Report extends BaseEntityClass {

    @Column({
        type: "timestamp", nullable: true
    })
    date: Date;

    @Column({
        type: "varchar", nullable: true
    })
    hour: string;

    @Column({
        type: "varchar", nullable: true
    })
    description: string;

    @Column({
        type: "varchar", nullable: true
    })
    tags: string;

    @Column({
        type: "varchar", nullable: true
    })
    note: string;

    @Column({
        type: "int", nullable: true
    })
    rating: number;

    @OneToOne(() => Attachment)
    @JoinColumn()
    attachment: Attachment;

    @ManyToOne(() => Project, project => project.reports)
    project: Project;

    @OneToMany(() => Activity, activity => activity.report)
    activities: Activity[];

    @ManyToOne(() => User, user => user.reports)
    user: User;
}