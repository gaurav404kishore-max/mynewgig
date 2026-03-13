-- ─────────────────────────────────────────────
-- Run this SQL in Supabase → SQL Editor
-- to set up your two tables
-- ─────────────────────────────────────────────

-- Players table
create table players (
  id uuid default gen_random_uuid() primary key,
  name text not null unique,
  created_at timestamp default now()
);

-- Availability table
create table availability (
  id uuid default gen_random_uuid() primary key,
  player text not null,
  weekend_id text not null,
  available boolean default false,
  updated_at timestamp default now(),
  unique(player, weekend_id)
);

-- Allow anyone to read and write (public app)
alter table players enable row level security;
alter table availability enable row level security;

create policy "Public read players" on players for select using (true);
create policy "Public insert players" on players for insert with check (true);
create policy "Public delete players" on players for delete using (true);

create policy "Public read availability" on availability for select using (true);
create policy "Public upsert availability" on availability for insert with check (true);
create policy "Public update availability" on availability for update using (true);
create policy "Public delete availability" on availability for delete using (true);

-- Seed with your squad (edit these names)
insert into players (name) values
  ('Gaurav'),
  ('Deeksha'),
  ('Shubham'),
  ('Rounak'),
  ('Sameer'),
  ('Saurabh'),
  ('Dev'),
  ('Nikhil'),
  ('Arjun'),
  ('Sanjay'),
  ('Priya'),
  ('Rohit'),
  ('Manish'),
  ('Tarun');