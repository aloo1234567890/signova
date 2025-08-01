-- Enable pgcrypto extension for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Fix the create_new_user function with proper password hashing
CREATE OR REPLACE FUNCTION public.create_new_user(user_email text, user_password text, user_metadata jsonb DEFAULT '{}'::jsonb)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
DECLARE
    new_user_id uuid;
BEGIN
    -- Check if user already exists
    IF EXISTS (SELECT 1 FROM auth.users WHERE email = user_email) THEN
        RAISE EXCEPTION 'User with email % already exists', user_email;
    END IF;

    -- Insert new user with correct column names and proper password hashing
    INSERT INTO auth.users (
        id,
        email, 
        encrypted_password, 
        email_confirmed_at,
        raw_user_meta_data,
        created_at,
        updated_at,
        instance_id
    ) VALUES (
        gen_random_uuid(),
        user_email,
        crypt(user_password, gen_salt('bf')),
        NOW(),
        user_metadata,
        NOW(),
        NOW(),
        '00000000-0000-0000-0000-000000000000'
    ) RETURNING id INTO new_user_id;

    RETURN new_user_id;
END;
$$;