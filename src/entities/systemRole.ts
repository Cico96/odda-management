import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToMany } from "typeorm";
import { BaseEntityClass } from "./base";
import { User } from "./user";

@Entity()
export class SystemRole extends BaseEntityClass {

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable:true
    })
    type: string;

    @ApiProperty({
        type: () => User
    })
    @ManyToMany(() => User, user => user.roles)
    user: User;
}