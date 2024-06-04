drop table expenses;

create table expenses(
    expense_id SERIAL PRIMARY KEY,
    expense_date VARCHAR(255),
    expense_name VARCHAR(255),
    expense_cost decimal
);

--created table on 5/31/2024