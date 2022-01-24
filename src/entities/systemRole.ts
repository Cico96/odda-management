import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntityClass } from "./base";
import { User } from "./user";

@Entity()
export class SystemRole extends BaseEntityClass {

    @Column({
        type: "varchar", nullable:true
    })
    type: string;

    @ManyToMany(() => User, user => user.roles)
    user: User;
}