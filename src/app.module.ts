import { Module } from '@nestjs/common';
import { Postagem } from './postagem/entities/postagem.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from './postagem/postagem.module';  
import { TemaModule } from './tema/tema.module';
import { Tema } from './tema/entities/tema.entity';

@Module({
  imports: [
    // config padrão do typeorm
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@1234',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
    TemaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


// modulo que inicia a aplicação por inteiro, contém o que existe no projeto inteiro 