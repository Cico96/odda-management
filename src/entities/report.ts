import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Activity } from "./activity";
import { Attachment } from "./attachment";
import { BaseEntityClass } from "./base";
import { Project } from "./project";
import { User } from "./user";

@Entity()
export class Report extends BaseEntityClass {

    @ApiProperty({
        type: Date
    })
    @Column({
        type: "timestamp", nullable: true
    })
    date: Date;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    hour: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    description: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    tags: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    note: string;

    @ApiProperty({
        type: Number
    })
    @Column({
        type: "int", nullable: true
    })
    rating: number;

    @ApiProperty({
        type: () => Attachment
    })
    @OneToOne(() => Attachment)
    @JoinColumn()
    attachment: Attachment;

    @ApiProperty({
        type: () => Project
    })
    @ManyToOne(() => Project, project => project.reports)
    project: Project;

    @ApiProperty({
        type: () => Activity
    })
    @OneToMany(() => Activity, activity => activity.report)
    activities: Activity[];

    @ApiProperty({
        type: () => User
    })
    @ManyToOne(() => User, user => user.reports)
    user: User;
}