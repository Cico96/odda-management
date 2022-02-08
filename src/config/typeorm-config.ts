import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { Activity } from "src/entities/activity";
import { Attachment } from "src/entities/attachment";
import { Contact } from "src/entities/contact";
import { Group } from "src/entities/group";
import { Project } from "src/entities/project";
import { ProjectRole } from "src/entities/projectRole";
import { Report } from "src/entities/report";
import { SystemRole } from "src/entities/systemRole";
import { User } from "src/entities/user";
import { UserProjectRole } from "src/entities/user-project-role";

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'odda-management',
    entities: [
      User, Attachment, Contact, Project, ProjectRole, SystemRole, Activity, Report, Group, UserProjectRole
    ],
    synchronize: true,
}



