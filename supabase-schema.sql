-- Run this SQL in Supabase SQL Editor (https://supabase.com → SQL Editor)
-- Creates the tables needed for the menu ordering system

-- 1. Menu data — single row (id=1) holding restaurant info, items & categories
CREATE TABLE IF NOT EXISTS menu_data (
  id BIGINT PRIMARY KEY DEFAULT 1,
  restaurant JSONB NOT NULL DEFAULT '{}',
  items JSONB NOT NULL DEFAULT '[]',
  categories JSONB NOT NULL DEFAULT '[]',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Orders — one row per customer order
CREATE TABLE IF NOT EXISTS orders (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  order_id TEXT UNIQUE NOT NULL,
  customer_name TEXT,
  customer_phone TEXT,
  order_type TEXT,
  table_number TEXT,
  address TEXT,
  notes TEXT,
  payment_method TEXT,
  items JSONB DEFAULT '[]',
  subtotal NUMERIC DEFAULT 0,
  delivery_fee NUMERIC DEFAULT 0,
  total NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);

-- 3. Enable real-time for both tables
ALTER PUBLICATION supabase_realtime ADD TABLE menu_data;
ALTER PUBLICATION supabase_realtime ADD TABLE orders;

-- 4. Insert initial empty row (the app will fill it with defaults)
INSERT INTO menu_data (id, restaurant, items, categories)
VALUES (1, '{}'::jsonb, '[]'::jsonb, '[]'::jsonb)
ON CONFLICT (id) DO NOTHING;
