import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user';
import { Repository } from 'typeorm';
import { Attachment } from './entities/attachment';


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
        User,
        Attachment
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Attachment])
  ],
  controllers: [AppController],
  providers: [AppService],
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
  }*/
}
