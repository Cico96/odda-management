import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntityClass } from "./base";
import { Project } from "./project";
import { ProjectRole } from "./projectRole";
import { User } from "./user";

@Entity()
export class UserProjectRole extends BaseEntityClass {

    @ApiProperty({
        type: () => User
    })
    @OneToOne(() => User, (f) => f.userProjectRole)
    @JoinColumn()
    user: User;

    @ApiProperty({
        type: () => Project
    })
    @OneToOne(() => Project)
    @JoinColumn()
    project: Project;

    @ApiProperty({
        type: () => ProjectRole
    })
    @OneToOne(() => ProjectRole)
    @JoinColumn()
    projectRole: ProjectRole;
}