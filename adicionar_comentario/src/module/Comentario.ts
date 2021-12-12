import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("comentarios")
export default class Comentario{
    @PrimaryGeneratedColumn('increment')
    id:number;
    @Column('int4')
    feed_id:number;
    @Column()
    usuario:string;
    @Column()
    datetime:Date;
    @Column()
    conteudo:string;
}