import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Activity } from "./activity";
import { BaseEntityClass } from "./base";
import { Report } from "./report";
import { User } from "./user";

@Entity()
export class Project extends BaseEntityClass {

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    name: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    description: string;

    @ApiProperty({
        type: Date
    })
    @Column({
        type: "timestamp", nullable: true
    })
    startDate: Date;

    @ApiProperty({
        type: Date
    })
    @Column({
        type: "timestamp", nullable: true
    })
    endDate: Date;

    @ApiProperty({
        type: Number
    })
    @Column({
        type: "float", nullable: true
    })
    estimatedHours: number;

    @ApiProperty({
        type: Number
    })
    @Column({
        type: "float", nullable: true
    })
    estimatedBudget: number;

    @ApiProperty({
        type: Activity
    })
    @OneToMany(() => Activity, activity => activity.project)
    activities: Activity[];

    @ApiProperty({
        type: Report
    })
    @OneToMany(() => Report, report => report.project)
    reports: Report[];

    @ApiProperty({
        type: () => User
    })
    @ManyToMany(() => User, (p) => p.projects)
    users: User[];
}