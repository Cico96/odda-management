import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntityClass } from "./base";
import { Project } from "./project";
import { Report } from "./report";

@Entity()
export class Activity extends BaseEntityClass {

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar"
    })
    name: string;

    @ApiProperty({
        type: Number
    })
    @Column({
        type: "float"
    })
    billing: number;

    @ApiProperty({
        type: () => Project
    })    
    @ManyToOne(() => Project, project => project.activities)
    project: Project;

    @ApiProperty({
        type: () => Report
    })
    @ManyToOne(() => Report, report => report.activities)
    report: Report;
}