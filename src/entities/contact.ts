import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntityClass } from "./base";
import { User } from "./user";

@Entity()
export class Contact extends BaseEntityClass {

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
    surname: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    phone: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    email: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    registeredOffice: string;

    @ApiProperty({
        type: () => User
    })
    @ManyToOne(()=>User, u => u.contacts, {nullable: true})
    user: User;
}