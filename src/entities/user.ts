import { BaseEntityClass } from "./base";
import { Entity, Column, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm'
import { Attachment } from "./attachment";
import { Contact } from "./contact";
import { SystemRole } from "./systemRole";
import { Project } from "./project";
import { Report } from "./report";
import { Group } from "./group";
import { ApiProperty } from "@nestjs/swagger";
import { UserProjectRole } from "./user-project-role";

@Entity()
export class User extends BaseEntityClass {

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar"
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
    username: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    password: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    city: string;

    @ApiProperty({
        type: Date
    })
    @Column({
        type: 'timestamp', nullable: true
    })
    date: Date;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    birthplace: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    gender: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    contractType: string;

    @ApiProperty({
        type: Number
    })
    @Column({
        type: "float", nullable: true
    })
    grossAnnualSalary: number;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    businessName: string;

    @ApiProperty({
        type: String
    })
    @Column({
        type: "varchar", nullable: true
    })
    vatNumber: string;

    @ApiProperty({
        type: String
    })
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

    @ManyToMany(() => Project, pr => pr.users)
    @JoinTable()
    projects: Project[];

    @OneToMany(() => Report, report => report.user)
    reports: Report[];

    @ManyToMany(() => Group)
    @JoinTable()
    groups: Group[];

    @OneToMany(() => UserProjectRole, (a) => a.user)
    userProjectRole: UserProjectRole[];
}