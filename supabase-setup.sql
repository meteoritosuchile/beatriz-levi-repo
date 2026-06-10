-- Run this SQL in your Supabase project SQL Editor (https://supabase.com > SQL Editor > New Query)

-- 1. Create the observations table
CREATE TABLE observations (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  sample_code TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Anonymous',
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Create the files table
CREATE TABLE files (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  sample_code TEXT NOT NULL,
  filename TEXT NOT NULL,
  file_type TEXT NOT NULL CHECK (file_type IN ('photo', 'dpt')),
  storage_path TEXT NOT NULL,
  uploaded_by TEXT DEFAULT 'web',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Enable Row Level Security (optional — open access for now)
ALTER TABLE observations ENABLE ROW LEVEL SECURITY;
ALTER TABLE files ENABLE ROW LEVEL SECURITY;

-- 4. Create open access policies (you can restrict these later with auth)
CREATE POLICY "Open read access" ON observations FOR SELECT USING (true);
CREATE POLICY "Open insert access" ON observations FOR INSERT WITH CHECK (true);
CREATE POLICY "Open delete access" ON observations FOR DELETE USING (true);
CREATE POLICY "Open read access" ON files FOR SELECT USING (true);
CREATE POLICY "Open insert access" ON files FOR INSERT WITH CHECK (true);
CREATE POLICY "Open delete access" ON files FOR DELETE USING (true);
