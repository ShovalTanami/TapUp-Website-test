-- Drop table if exists (for development only)
-- DROP TABLE IF EXISTS contact_submissions;

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (length(name) > 0),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone TEXT,
  service TEXT NOT NULL CHECK (length(service) > 0),
  message TEXT NOT NULL CHECK (length(message) > 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
ON contact_submissions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_service 
ON contact_submissions(service);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
ON contact_submissions(email);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Allow read contact submissions" ON contact_submissions;

-- Create policies
CREATE POLICY "Allow insert contact submissions" ON contact_submissions
FOR INSERT WITH CHECK (true);

-- Create a policy for reading (restrict to authenticated users in production)
CREATE POLICY "Allow read contact submissions" ON contact_submissions
FOR SELECT USING (true);

-- Insert a test record to verify everything works
INSERT INTO contact_submissions (name, email, service, message) 
VALUES ('Test User', 'test@example.com', 'automation', 'This is a test message')
ON CONFLICT DO NOTHING;

-- Verify the table was created correctly
SELECT 
  column_name, 
  data_type, 
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'contact_submissions'
ORDER BY ordinal_position;
