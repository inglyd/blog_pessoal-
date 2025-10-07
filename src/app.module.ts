import { Module } from '@nestjs/common';
import { Postagem } from './postagem/entities/postagem.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from './postagem/postagem.module';  
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { ProdService } from './data/services/prod.service';

@Module({
  imports: [
    // config padrão do typeorm
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService,
        imports: [ConfigModule],
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {};


// modulo que inicia a aplicação por inteiro, contém o que existe no projeto inteiro 