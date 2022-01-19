import { BaseEntityClass } from "./base";
import { Entity, Column, OneToMany } from 'typeorm'
import { Attachment } from "./attachment";

@Entity()
export class User extends BaseEntityClass {

    @Column({
        type: "varchar"
    })
    name: string;

    @Column({
        type: "varchar"
    })
    surname: string;

    @Column({
        type: "varchar"
    })
    username: string;

    @Column({
        type: "varchar"
    })
    password: string;

    @Column({
        type: "varchar"
    })
    city: string;

    @Column({
        type: 'timestamp'
    })
    date: string;

    @Column({
        type: "varchar"
    })
    birthplace: string;

    @Column({
        type: "varchar"
    })
    gender: string;

    @Column({
        type: "varchar"
    })
    contractType: string;

    @Column({
        type: "float"
    })
    grossAnnualSalary: number;

    @Column({
        type: "varchar"
    })
    businessName: string;

    @Column({
        type: "varchar"
    })
    vatNumber: string;

    @Column({
        type: "varchar"
    })
    attorny: string;


    @OneToMany(() => Attachment, f => f.user, {nullable: true})
    attachments: Attachment[];
}