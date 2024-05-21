create database weddingplanningapp;

create table guest(
    guest_id SERIAL PRIMARY KEY,
    guest_name VARCHAR(255),
    guest_address VARCHAR(255),
    guest_phone VARCHAR(255),
    guest_count VARCHAR(255),
    guest_needhotel VARCHAR(255),
    guest_kings VARCHAR(255),
    guest_queens VARCHAR(255),
    guest_rsvp VARCHAR(255)
);