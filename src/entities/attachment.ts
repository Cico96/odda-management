import { BaseEntityClass } from "./base";
import { Entity, Column, ManyToMany, ManyToOne } from 'typeorm'
import { User } from "./user";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Attachment extends BaseEntityClass {

    @ApiProperty({
        type: String
    })
    @Column()
    name: string;

    @ApiProperty({
        type: String
    })
    @Column()
    path: string;

    @ApiProperty({
        type: String
    })
    @Column()
    entity: string;    

    @ApiProperty({
        type: () => User
    })
    @ManyToOne(() => User, a => a.attachments, {nullable: true})
    user;
}