import { Column, Entity } from "typeorm";
import { BaseEntityClass } from "./base";

@Entity()
export class Group extends BaseEntityClass {

    @Column({
        type: "varchar"
    })
    name: string;
    
}