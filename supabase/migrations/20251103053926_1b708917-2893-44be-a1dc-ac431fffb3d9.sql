-- Create contacts table to store contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact form" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading (only admins should read in future)
CREATE POLICY "No public read access" 
ON public.contacts 
FOR SELECT 
USING (false);

-- Create index for better performance on created_at
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);