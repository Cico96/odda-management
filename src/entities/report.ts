import { Column, Entity } from "typeorm";
import { BaseEntityClass } from "./base";

@Entity()
export class Report extends BaseEntityClass {

    @Column({
        type: "timestamp"
    })
    date: Date;

    @Column({
        type: "varchar"
    })
    hour: string;

    @Column({
        type: "varchar"
    })
    description: string;

    @Column({
        type: "varchar"
    })
    tags: string;

    @Column({
        type: "varchar"
    })
    note: string;

    @Column({
        type: "int"
    })
    rating: number;

}