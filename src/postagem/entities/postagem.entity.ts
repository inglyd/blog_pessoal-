// atributos da entidade (tabela postagem)
import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_postagens"})
export class Postagem {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string
//updated_timestamp
    @UpdateDateColumn()
    data: Date 
}

// CREATE TABLE tb_postagens (id, titulo, texto, data);nullable(false) = not null