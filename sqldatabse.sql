--\? for commands
--\l for showing the databases
--\c to connect to database
--create database
--\d for seeing all tables
--\d tablename for viewing table
--bigserial increment by 1
--not null constraint



alter table products
add column featured BOOLEAN;

alter table products
drop column featured;

drop table products;

CREATE table Restaurants(
    id bigserial Primary key,
    Restaurant_name varchar(30) not null,
    location varchar(50) not null,
    price_rangeofRestaurants int not null check(price_rangeofRestaurants>=1 and price_rangeofRestaurants<=5)
);

insert into restaurants (id, Restaurant_name, Location, price_rangeofRestaurants) values (123,'shinwari', 'johar', '3');

select * from restaurants
