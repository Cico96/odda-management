import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntityClass } from "./base";
import { Project } from "./project";
import { User } from "./user";

@Entity()
export class ProjectRole extends BaseEntityClass {

    @Column({
        type: "varchar", nullable: true
    })
    type: string;
    

    
}