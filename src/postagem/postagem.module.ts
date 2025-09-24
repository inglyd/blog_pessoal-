import { PostagemService } from './services/postagem.service';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemController } from './controllers/postagem.controller';
import { Tema } from 'src/tema/entities/tema.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}

//sempre terá essas quatro linhas
//forFeatures só pra esse module
 // provedores, classes services