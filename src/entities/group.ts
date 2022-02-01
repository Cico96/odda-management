import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";
import { BaseEntityClass } from "./base";

@Entity()
export class Group extends BaseEntityClass {

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar"
    })
    name: string;
    
}