
create table Usuario(
    idUsuario int primary key,
    nick varchar(50)
)

create table Aulas(
    idAula int primary key,
    modulo varchar(3),
    descricao varchar(15)   -- acho q pode até tirar dps
)

create table Conteudo(
    idConteudo int primary key,
    irlVideos varchar(2080),
    irlImagem varchar(2080)
)

create table Conta(
    idConta int primary key,
    idUsuario int not null,
    constraint idUsuario foreign key(idUsuario) references Usuario(idUsuario),
    nome varchar(50) not null,
    email varchar(256) not null,
    cidade varchar(80),
    pontosAcumulados int not null
)

create table Desempenho(
    idDesempenho int primary key,
    estrela int,
    dataDesempenho date,
    descricao varchar(100)
)

-- essa tabela não será usada
create table Exercicios(
    idExercicio int primary key,
    alternativas varchar(5) not null,
    pontos int not null,
    tipo varchar(20),        
    resposta varchar(1)
)

create table AulasConteudo(
    idAulasConteudo int primary key,
    idAula int not null,
    constraint idAula foreign key(idAula) references Aulas(idAula),
    idConteudo int not null,
    constraint idConteudo foreign key(idConteudo) references Conteudo(idConteudo)
)

create table ContaDesempenho(
    idContaDesempenho int primary key,
    idConta int not null,
    constraint idConta foreign key(idConta) references Conta(idConta),
    idDesempenho int not null,
    constraint idDesempenho foreign key(idDesempenho) references Desempenho(idDesempenho)
)

create table AulasExercicios(
    idAulasExercicios int primary key,
    idAulasConteudo int not null,
    constraint idAulasConteudo foreign key(idAulasConteudo) references AulasConteudo(idAulasConteudo),
    idExercicio int not null,
    constraint idExercicio foreign key(idExercicio) references Exercicios(idExercicio)
)

create table ContaExercicios(
    idContaExercicios int primary key,
    idConta int not null,
    constraint idConta foreign key(idConta) references Conta(idConta),
    idExercicio int not null,
    constraint idExercicio foreign key(idExercicio) references Exercicios(idExercicio)
)