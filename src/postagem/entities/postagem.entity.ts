// atributos da entidade (tabela postagem)
import { IsNotEmpty } from "class-validator";
import { Tema } from '../../tema/entities/tema.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagens"})
export class Postagem {
    @ApiProperty() 
    @PrimaryGeneratedColumn()    
    id: number;

    @ApiProperty() 
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string;
    
    @ApiProperty() 
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string;
//updated_timestamp
    @ApiProperty() 
    @UpdateDateColumn()
    data: Date;

    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        // se o tema for deletado, as postagens tbm serão deletadas
        onDelete: "CASCADE",
    })
    tema: Tema;

    @ApiProperty({ type: () => Usuario })  
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
};
// CREATE TABLE tb_postagens (id, titulo, texto, data);nullable(false) = not null