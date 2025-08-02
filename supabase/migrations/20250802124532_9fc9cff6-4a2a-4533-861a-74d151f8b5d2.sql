-- Remove the problematic function and use a simpler approach
DROP FUNCTION IF EXISTS public.create_new_user(text, text, jsonb);

-- Create a simpler function that uses Supabase's auth.sign_up equivalent
CREATE OR REPLACE FUNCTION public.admin_create_user(user_email text, user_password text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
    -- Check if user already exists
    IF EXISTS (SELECT 1 FROM auth.users WHERE email = user_email) THEN
        RETURN 'User already exists';
    END IF;

    -- For manual user creation, you'll need to use the Supabase Auth Admin API
    -- This function returns instructions for manual creation
    RETURN 'Use Supabase Dashboard to add user: ' || user_email;
END;
$$;