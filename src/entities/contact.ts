import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntityClass } from "./base";
import { User } from "./user";

@Entity()
export class Contact extends BaseEntityClass {

    @Column({
        type: "varchar", nullable: true
    })
    name: string;

    @Column({
        type: "varchar", nullable: true
    })
    surname: string;

    @Column({
        type: "varchar", nullable: true
    })
    phone: string;

    @Column({
        type: "varchar", nullable: true
    })
    email: string;

    @Column({
        type: "varchar", nullable: true
    })
    registeredOffice: string;

    @ManyToOne(()=>User, u => u.contacts, {nullable: true})
    user: User;
}