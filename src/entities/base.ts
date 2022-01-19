import { PrimaryGeneratedColumn, Column } from 'typeorm'

export abstract class BaseEntityClass {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        default: ""
    })
    guid?: string;

    @Column({
        type: "timestamp",
        default: new Date().toISOString()
    })
    creationDate: Date;

    @Column({
        type: "timestamp",
        nullable: true
    })
    deletedDate?: Date;

    @Column({
        type: "timestamp",
        nullable: true
    })
    lastUpdate?: Date;

    @Column({
        type: "varchar",
        nullable: true
    })
    createdBy?: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    updatedBy?: string;
}