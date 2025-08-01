-- Fix the create_new_user function with correct column names
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

    -- Insert new user with correct column names
    INSERT INTO auth.users (
        email, 
        encrypted_password, 
        email_confirmed_at,
        raw_user_meta_data,
        created_at,
        updated_at
    ) VALUES (
        user_email,
        crypt(user_password, gen_salt('bf')),
        NOW(),
        user_metadata,
        NOW(),
        NOW()
    ) RETURNING id INTO new_user_id;

    RETURN new_user_id;
END;
$$;