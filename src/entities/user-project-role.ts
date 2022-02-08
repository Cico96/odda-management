import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, Unique } from "typeorm";
import { BaseEntityClass } from "./base";
import { Project } from "./project";
import { ProjectRole } from "./projectRole";
import { User } from "./user";

@Entity()
@Unique(['user', 'project', 'projectRole'])
export class UserProjectRole extends BaseEntityClass {

    @ApiProperty({
        type: () => User
    })
    @ManyToOne(() => User, (f) => f.userProjectRole)
    @JoinColumn()
    user: User;

    @ApiProperty({
        type: () => Project
    })
    @ManyToOne(() => Project)
    @JoinColumn()
    project: Project;

    @ApiProperty({
        type: () => ProjectRole
    })
    @ManyToOne(() => ProjectRole)
    @JoinColumn()
    projectRole: ProjectRole;
}