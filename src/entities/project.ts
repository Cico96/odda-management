import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntityClass } from "./base";
import { ProjectRole } from "./projectRole";

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

    @ManyToMany(() => ProjectRole, role => role.project)
    roles: ProjectRole[];
}