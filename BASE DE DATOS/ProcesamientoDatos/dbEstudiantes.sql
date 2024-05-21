drop database if exists dbEstudiantes;
create database dbEstudiantes;
use dbEstudiantes;
create table Estudiante(ID int not null primary key auto_increment, Nombre varchar (45) not null, NroDocument varchar(45)not null unique, Celular varchar(45) not null);
create table Materia(id int not null primary key auto_increment, nombre varchar (45) not null, NroCreditos  int not null );


INSERT INTO `materia`(`nombre`, `NroCreditos`) VALUES ('Escritura','3');



CREATE TABLE estudiante_materia (
    idEstudianteMateria INT PRIMARY KEY auto_increment,
    id_estudiante_fk INT,
    id_materi_fk INT,
    FOREIGN KEY (id_estudiante_fk) REFERENCES estudiante(ID),
    FOREIGN KEY (id_materi_fk) REFERENCES materia(id)
);
INSERT INTO `estudiante_materia`(`id_estudiante_fk`, `id_materi_fk`, `nota`) VALUES ('4','4','5.0');