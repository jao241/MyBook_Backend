import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("produtos")
export default class Produtos{
    @PrimaryColumn()
    id:number;
    @Column()
    tipo:string;
    @Column()
    nome:string;
    @Column()
    fabricante:string;
    @Column()
    autor:string;
    @Column()
    volume:string;
    @Column('float')
    preco:number;
    @Column()
    descricao:string;
    @Column('int4')
    likes:number;
    @Column('date')
    data_criacao:Date;
}