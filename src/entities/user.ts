import { BaseEntityClass } from "./base";
import { Entity, Column, OneToMany } from 'typeorm'
import { Attachment } from "./attachment";

@Entity()
export class User extends BaseEntityClass {

    @Column()
    name: string;


    @OneToMany(() => Attachment, f => f.user, {nullable: true})
    attachments: Attachment[];
}