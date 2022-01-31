import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntityClass } from "./base";
import { Project } from "./project";
import { ProjectRole } from "./projectRole";
import { User } from "./user";

@Entity()
export class UserProjectRole extends BaseEntityClass {

    @OneToOne(() => User)
    @JoinColumn()
    user: User;

    @OneToOne(() => Project)
    @JoinColumn()
    project: Project;

    @OneToOne(() => ProjectRole)
    @JoinColumn()
    projectRole: ProjectRole;
}