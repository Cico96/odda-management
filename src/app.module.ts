import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user';
import { In, Repository } from 'typeorm';
import { Attachment } from './entities/attachment';
import { Contact } from './entities/contact';
import { Project } from './entities/project';
import { ProjectRole } from './entities/projectRole';
import { SystemRole } from './entities/systemRole';
import { Activity } from './entities/activity';
import { Report } from './entities/report';
import { Group } from './entities/group';
import { UserController } from './controllers/user-controller';
import { UserProjectRole } from './entities/user-project-role';
import { UserService } from './services/user-service';
import { typeOrmConfig } from './config/typeorm-config';
import { ProjectController } from './controllers/project-controller';
import { ProjectService } from './services/project-service';
import { ReportService } from './services/report-service';
import { ReportController } from './controllers/report-controller';
import { ActivityService } from './services/activity-service';
import { ActivityController } from './controllers/activity-controller';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([User, Attachment, Contact, Project, ProjectRole, SystemRole, Activity, Report, Group, UserProjectRole])
  ],
  controllers: [AppController, UserController, ProjectController, ReportController, ActivityController],
  providers: [AppService, UserService, ProjectService, ReportService, ActivityService],
})
export class AppModule {

  
}
