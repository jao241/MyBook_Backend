import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("comentarios")
export default class Comentario{
    @PrimaryColumn('int4')
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