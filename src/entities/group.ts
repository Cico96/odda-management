import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntityClass } from "./base";
import { User } from "./user";

@Entity()
export class Group extends BaseEntityClass {

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar"
    })
    name: string;

    @ApiProperty({
        type: () => User
    })
    @ManyToMany(() => User, (u) => u.groups)
    users: User[];
    
}