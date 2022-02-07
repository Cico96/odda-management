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


@Module({
  imports: [
    TypeOrmModule.forRoot({
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
  }),
    TypeOrmModule.forFeature([User, Attachment, Contact, Project, ProjectRole, SystemRole, Activity, Report, Group, UserProjectRole])
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {

  /*constructor(@InjectRepository(User)
  private usersRepository: Repository<User>,
  @InjectRepository(Attachment)
  private attachmentRepository: Repository<Attachment>) {
    this.seed().then();
  }


  async seed (){
    const user = await this.usersRepository.insert({
      name: "Jacopo"
    });

    await this.attachmentRepository.insert({
      user: user.generatedMaps[0],
      path: "vattelapesca",
      name: "CV",
      entity: "USER"
    })
  }

 

  async setUserProjectRole(){

    const id = 1;
    const id_user = 4;

    const user = await this.userRepository.findOne(id_user);
    const project = await this.projectRepository.findOne(id);
    const projectRole = await this.projectRoleRepository.findOne(id);

    await this.userPrRepository.insert({
      user: user,
      project: project,
      projectRole: projectRole
    })

  }*/
  constructor(@InjectRepository(User)
  private userRepository: Repository<User>,
  @InjectRepository(Project)
  private projectRepository: Repository<Project>,
  @InjectRepository(ProjectRole)
  private projectRoleRepository: Repository<ProjectRole>,
  @InjectRepository(UserProjectRole)
  private userPrRepository: Repository<UserProjectRole>) {
    //this.setUserProjectRole().then();
    //this.test().then()
  }

  // async test() {
  //   const result = await this.userRepository.find({
  //     relations: ['projects', 'userProjectRole' ,'userProjectRole.user', 'userProjectRole.project' , 'projects.users']
  //   })


  //   console.log(JSON.stringify(result));
  // }

  
}
