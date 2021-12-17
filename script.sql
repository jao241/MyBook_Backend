CREATE TABLE IF NOT EXISTS produtos(
	id integer primary key,
	tipo varchar(255) not null,
	nome varchar(255) not null,
	fabricante varchar(255) not null,
	autor varchar(255) not null,
	volume varchar(255) not null,
	preco real not null,
	descricao text not null,
	likes integer not null,
	data_criacao date not null
);

CREATE TABLE IF NOT EXISTS comentarios(
	id int primary key,
	feed_id int not null,
	usuario varchar(255) not null,
	datetime date not null,
	conteudo text not null
);

INSERT INTO public.produtos (id,tipo,nome,fabricante,autor,volume,preco,descricao,likes,data_criacao) VALUES
	 (1,'Livro','O retorno de Olga Valacio','My Book','Julia Rezende','Unico',8.99,'O ano é 2012 e Olga Valacio está no auge de seu sucesso. Uma série de escândalos, porém, faz com que a atriz mais querida do cinema brasileiro, de repente, passe de mocinha à vilã. Em um momento de impulso, Olga decide se refugiar, em segredo, em sua cidade natal, a qual não visita há anos. Ela sabe que não pode fugir de seus problemas para sempre, mas, de forma inesperada, a pequena cidade começa a parecer cada vez mais com um lar. Por fim, Olga vai perceber que só ela é capaz de fazer sua vida voltar aos eixos e que, talvez, isso não signifique o que ela costumava achar.',9,'2021-11-20'),
	 (2,'Livro','Nona casa','My Book','Leigh Bardugo','Unico',47.47,'Criada nos arredores de Los Angeles por sua mãe hippie, Galaxy “Alex” Stern abandonou a escola cedo e se envolveu no perigoso submundo das drogas, entre namorados traficantes e empregos fracassados. Além de tudo isso, aos vinte anos, ela é a única sobrevivente de um massacre terrível, para o qual a polícia ainda não encontrou qualquer explicação. Alguns podem dizer que Alex jogou sua vida fora. No entanto, a garota acaba recebendo uma proposta inusitada: frequentar Yale, uma das universidades de maior prestígio do mundo... e com uma bolsa integral. Alex é a caloura mais improvável de uma instituição como essa. Por que logo ela? ...',5,'2021-11-20'),
	 (3,'Livro','A rainha aprisionada: Iskari-Vol 2','My Book','Kristen Ciccarelli','2',36.89,'Firgaard foi governada durante décadas por um rei tirano e manipulador, capaz de condenar povos inteiros apenas para aumentar seu poder. Depois de uma grande batalha, Asha, sua filha, conseguiu derrotá-lo. E, assim, Dax, o primogênito, assumiu o poder ao lado de Roa, sua esposa. Roa é uma forasteira vinda das savanas ― um território sob o domínio de Firgaard, que há anos é oprimido e está prestes a entrar em colapso. O maior desejo da nova rainha, mesmo sabendo que não é bem-vinda em seu novo lar, é mudar a vida de seu povo...',7,'2021-11-20'),
	 (4,'Livro','É assim que Acaba','My Book','Colleen Hoover ','Unico',33.76,'O romance mais pessoal da carreira de Colleen Hoover, É assim que acaba discute temas como violência doméstica e abuso psicológico de forma sensível e direta. Em É assim que acaba, Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela...',8,'2021-11-20'),
	 (5,'Livro','A Tecelã do Céu: 3','My Book','Kristen Ciccarelli','3',29.38,'O reino de Firgaard passou por tempos turbulentos desde que Dax assumiu a coroa ao lado de Roa, uma garota nascida em território inimigo. Agora, cabe a Safire, prima de Dax e comandante do Exército real, manter a ordem na cidade. Quando Eris, uma ladra capaz de se deslocar por mundos diferentes, invade o palácio e passa a cometer roubos impunemente, Safire vê diante de si um desafio quase impossível: capturar alguém que consegue desaparecer num piscar de olhos. O que nenhuma das duas esperava era compartilhar o mesmo objetivo: encontrar Asha, irmã de Dax e namsara do reino...',9,'2021-11-20'),
	 (6,'Livro','A caçadora de dragões: 1','My Book','Kristen Ciccarelli','1',28.49,'Primeiro volume de uma trilogia fantástica, em que dragões e humanos estão em guerra ― e cabe a uma garota matar todos eles. Quando era criança, Asha, a filha do rei de Firgaard, era atormentada por sucessivos pesadelos. Para ajudá-la, a única solução que sua mãe encontrou foi lhe contar histórias antigas, que muitos temiam ser capazes de atrair dragões, os maiores inimigos do reino. Envolvida pelos contos, a pequena Asha acabou despertando Kozu, o mais feroz de todos os dragões, que queimou a cidade e matou milhares de pessoas ...',8,'2021-11-20');

INSERT INTO public.comentarios (id,feed_id,usuario,datetime,conteudo) VALUES
	 (1,1,'My book','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'),
	 (5,2,'My book','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (6,2,'My book ','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (7,2,'My book  ','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (8,3,'My book','0201-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (9,3,'My book','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (10,4,'My book ','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (11,5,'My book','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (12,6,'My book','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (13,6,'My book ','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
     (14,7,'My book','2019-01-01','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
	 (2,1,'João','2019-01-01','Teste'),
	 (3,1,'João','2019-01-01','Teste2');
