import { BaseEntityClass } from "./base";
import { Entity, Column, ManyToMany, ManyToOne } from 'typeorm'
import { User } from "./user";

@Entity()
export class Attachment extends BaseEntityClass {
    @Column()
    name: string;

    @Column()
    path: string;

    @Column()
    entity: string;    

    @ManyToOne(() => User, a => a.attachments, {nullable: true})
    user;
}