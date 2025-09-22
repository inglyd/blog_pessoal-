import { Module } from '@nestjs/common';
import { Postagem } from './postagem/entities/postagem.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from './postagem/postagem.module';  

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
      entities: [Postagem],
      synchronize: true,
      logging: true,
    }),
    PostagemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


// modulo que inicia a aplicação por inteiro, contém o que existe no projeto inteiro 