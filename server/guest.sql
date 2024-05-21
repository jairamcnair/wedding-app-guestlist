create database weddingplanningapp;

create table guest(
    guest_id SERIAL PRIMARY KEY,
    guest_name VARCHAR(255),
    guest_address VARCHAR(255),
    guest_phone VARCHAR(255),
    guest_count int,
    guest_needhotel VARCHAR(255),
    guest_kings int,
    guest_queens int,
    guest_rsvp VARCHAR(255)
);