import { BaseEntityClass } from "./base";
import { Entity, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { Attachment } from "./attachment";
import { Contact } from "./contact";
import { SystemRole } from "./systemRole";
import { Project } from "./project";
import { Report } from "./report";
import { Group } from "./group";

@Entity()
export class User extends BaseEntityClass {

    @Column({
        type: "varchar"
    })
    name: string;

    @Column({
        type: "varchar", nullable: true
    })
    surname: string;

    @Column({
        type: "varchar", nullable: true
    })
    username: string;

    @Column({
        type: "varchar", nullable: true
    })
    password: string;

    @Column({
        type: "varchar", nullable: true
    })
    city: string;

    @Column({
        type: 'timestamp', nullable: true
    })
    date: string;

    @Column({
        type: "varchar", nullable: true
    })
    birthplace: string;

    @Column({
        type: "varchar", nullable: true
    })
    gender: string;

    @Column({
        type: "varchar", nullable: true
    })
    contractType: string;

    @Column({
        type: "float", nullable: true
    })
    grossAnnualSalary: number;

    @Column({
        type: "varchar", nullable: true
    })
    businessName: string;

    @Column({
        type: "varchar", nullable: true
    })
    vatNumber: string;

    @Column({
        type: "varchar", nullable: true
    })
    attorny: string;


    @OneToMany(() => Attachment, f => f.user, {nullable: true})
    attachments: Attachment[];

    @OneToMany(()=> Contact, c=> c.user, {nullable: true})
    contacts: Contact[];

    @ManyToMany(() => SystemRole, role => role.user)
    @JoinTable()
    roles: SystemRole[];

    @ManyToMany(() => Project)
    @JoinTable()
    projects: Project[];

    @OneToMany(() => Report, report => report.user)
    reports: Report[];

    @ManyToMany(() => Group)
    @JoinTable()
    groups: Group[];
}