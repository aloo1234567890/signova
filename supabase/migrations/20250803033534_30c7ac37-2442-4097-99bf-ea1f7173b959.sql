-- Update the app_role enum to match Signova requirements
DROP TYPE IF EXISTS public.app_role CASCADE;
CREATE TYPE public.app_role AS ENUM ('founder', 'co_founder', 'senior_member', 'member', 'muted');

-- Update user_roles table structure
DROP TABLE IF EXISTS public.user_roles CASCADE;
CREATE TABLE public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null unique,
    role public.app_role not null default 'member',
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

-- Create inquiries table for pending approvals
CREATE TABLE public.inquiries (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text not null,
    phone text,
    message text,
    status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
    created_at timestamp with time zone not null default now(),
    reviewed_by uuid references auth.users(id),
    reviewed_at timestamp with time zone
);

-- Create badges table for achievements
CREATE TABLE public.badges (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    description text,
    icon text,
    color text default '#8B5CF6',
    created_at timestamp with time zone not null default now()
);

-- Create user_badges junction table
CREATE TABLE public.user_badges (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    badge_id uuid references public.badges(id) on delete cascade not null,
    earned_at timestamp with time zone not null default now(),
    unique(user_id, badge_id)
);

-- Create secret_ops table for notes and plans
CREATE TABLE public.secret_ops (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    content text,
    author_id uuid references auth.users(id) not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

-- Enable RLS on all tables
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.secret_ops ENABLE ROW LEVEL SECURITY;

-- Create security definer function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(user_id uuid)
RETURNS text
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
    SELECT role::text FROM public.user_roles WHERE user_roles.user_id = $1;
$$;

-- RLS Policies for user_roles
CREATE POLICY "Users can view all roles" ON public.user_roles FOR SELECT USING (true);
CREATE POLICY "Only founders can modify roles" ON public.user_roles FOR ALL USING (
    public.get_user_role(auth.uid()) = 'founder'
);

-- RLS Policies for inquiries
CREATE POLICY "Senior members and above can view inquiries" ON public.inquiries FOR SELECT USING (
    public.get_user_role(auth.uid()) IN ('founder', 'co_founder', 'senior_member')
);
CREATE POLICY "Founders can manage inquiries" ON public.inquiries FOR ALL USING (
    public.get_user_role(auth.uid()) = 'founder'
);

-- RLS Policies for badges
CREATE POLICY "Everyone can view badges" ON public.badges FOR SELECT USING (true);
CREATE POLICY "Founders can manage badges" ON public.badges FOR ALL USING (
    public.get_user_role(auth.uid()) = 'founder'
);

-- RLS Policies for user_badges
CREATE POLICY "Users can view all user badges" ON public.user_badges FOR SELECT USING (true);
CREATE POLICY "Senior members and above can assign badges" ON public.user_badges FOR INSERT USING (
    public.get_user_role(auth.uid()) IN ('founder', 'co_founder', 'senior_member')
);

-- RLS Policies for secret_ops
CREATE POLICY "Members and above can view secret ops" ON public.secret_ops FOR SELECT USING (
    public.get_user_role(auth.uid()) IN ('founder', 'co_founder', 'senior_member', 'member')
);
CREATE POLICY "Senior members and above can create secret ops" ON public.secret_ops FOR INSERT WITH CHECK (
    public.get_user_role(auth.uid()) IN ('founder', 'co_founder', 'senior_member') AND
    auth.uid() = author_id
);
CREATE POLICY "Authors can update their own secret ops" ON public.secret_ops FOR UPDATE USING (
    auth.uid() = author_id
);

-- Update timestamp trigger
CREATE TRIGGER update_user_roles_updated_at
    BEFORE UPDATE ON public.user_roles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_secret_ops_updated_at
    BEFORE UPDATE ON public.secret_ops
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some default badges
INSERT INTO public.badges (name, description, icon, color) VALUES
('Founding Member', 'One of the original Signova members', '👑', '#8B5CF6'),
('ASL Learner', 'Completed basic ASL learning modules', '🤟', '#6366F1'),
('Recruiter', 'Successfully referred new members', '🎯', '#8B5CF6'),
('Elite Hacker', 'Advanced technical contributions', '💻', '#6B46C1');

-- Set the founder role for existing user (update with actual user email)
-- This will need to be run after user creation
-- UPDATE public.user_roles SET role = 'founder' WHERE user_id = (SELECT id FROM auth.users WHERE email = 'ayankmishra165@gmail.com');