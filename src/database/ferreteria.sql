create database ferreteria;

use ferreteria;

CREATE TABLE categoria(
id_categoria int primary key auto_increment,
categoria varchar(255) not null
);

CREATE TABLE producto(
id_producto int primary key auto_increment,
nombre varchar(100) not null,
id_categoria int not null,
precio float not null,
tamaño varchar(10),
cantidad varchar(10),
estado bit default(1),
foreign key (id_categoria) references categoria(id_categoria)
);

CREATE TABLE rol(
id_rol int primary key auto_increment,
rol varchar(50),
suledo varchar(20)
);

CREATE TABLE empleado(
id_empleado int primary key auto_increment,
usuario varchar(255),
passwor varchar(255),  
nombre varchar(255) not null,
apellido varchar(255) not null,
id_rol int not null,
estado bit default(1),
foreign key (id_rol) references rol(id_rol)
);

CREATE TABLE cliente(
id_cliente  int primary key auto_increment,
nombre VARCHAR(255) not null,
apellido VARCHAR(255) not null,
telefono VARCHAR(20) not null,
cedula VARCHAR(255) not null,
estado BIT DEFAULT(1)
);

ALTER TABLE cliente
     MODIFY COLUMN cedula VARCHAR(255) not null unique;


CREATE TABLE medio_pago(
id_pago int primary key auto_increment,
metodo varchar(50) not null
);

CREATE TABLE factura(
id_factura int primary key auto_increment,
id_cliente int not null,
id_producto int not null,
id_pago int not null,
cantidad int not null,
fecha varchar(255),
total FLOAT DEFAULT NULL,
estado bit default(1),
foreign key (id_cliente) references cliente(id_cliente),
foreign key (id_producto) references producto(id_producto),
foreign key (id_pago) references medio_pago(id_pago)
);

DELIMITER //
CREATE TRIGGER calcular_total BEFORE INSERT ON factura
FOR EACH ROW
BEGIN
    DECLARE precio_producto FLOAT;
    SELECT precio INTO precio_producto FROM producto WHERE id_producto = NEW.id_producto;
    SET NEW.total = NEW.cantidad * precio_producto;
END //
DELIMITER ;

/*TABLA CLIENTE*/
INSERT INTO cliente(nombre, apellido, telefono, cedula) values("Mateo","Movilla","3256410","145206");
INSERT INTO cliente(nombre, apellido, telefono, cedula) values("Alejandro","Mendoza","256304","14520");

/*TABLA ROL*/
INSERT INTO rol(rol,suledo) values("Secretaria","1.700.000");
INSERT INTO rol(rol,suledo) values("Jefe de inventario","2.000.000");
INSERT INTO rol(rol,suledo) values("Administrador","2.900.000");
INSERT INTO rol(rol,suledo) values("Limpieza","1.170.000");
INSERT INTO rol(rol,suledo) values("Celador","1.500.000");

/*TABLA MEDIO DE PAGO*/
INSERT INTO medio_pago (metodo) VALUES ("Efectivo");
INSERT INTO medio_pago (metodo) VALUES ("Tarjeta debito");
INSERT INTO medio_pago (metodo) VALUES ("Tarjeta credito");
INSERT INTO medio_pago (metodo) VALUES ("Cheque");
INSERT INTO medio_pago (metodo) VALUES ("Nequi");
INSERT INTO medio_pago (metodo) VALUES ("DaviPlata");

/*TABLA EMPLEADO*/
INSERT INTO empleado (usuario,passwor,nombre,apellido,id_rol) VALUES ("mafe201","FmariaF","Maria","Fernandez",1);
INSERT INTO empleado (usuario,passwor,nombre,apellido,id_rol) VALUES ("Ramos234","RLuisR","Luis","Ramos",2);
INSERT INTO empleado (nombre,apellido,id_rol) VALUES ("Guillermo","Rodriguez",5);

/*TABLA CATEGORIA*/
INSERT INTO categoria (categoria) VALUES ("Pinturas, esmaltes y barnices");
INSERT INTO categoria (categoria) VALUES ("Herramientas eléctricas y neumáticas ");
INSERT INTO categoria (categoria) VALUES ("Herramientas de mano ");
INSERT INTO categoria (categoria) VALUES ("Herramientas para madera y carpintería");
INSERT INTO categoria (categoria) VALUES ("Herramientas para máquina-herramienta ");
INSERT INTO categoria (categoria) VALUES ("Utensilios de limpieza");