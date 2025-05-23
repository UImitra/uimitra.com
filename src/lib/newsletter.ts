import { supabase } from './supabase';

// Function to subscribe to newsletter
export const subscribeToNewsletter = async (email: string) => {
  try {
    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email)
      .single();

    if (checkError) {
      console.error('Error checking existing subscriber:', checkError);
      // If error is about no rows found, that's fine - means email isn't subscribed
      if (checkError.code !== 'PGRST116') {
        throw checkError;
      }
    }

    if (existingSubscriber) {
      return { success: false, message: 'You are already subscribed!' };
    }

    // Add new subscriber
    const { data, error: insertError } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, subscribed_at: new Date().toISOString() }]);

    if (insertError) {
      console.error('Error inserting new subscriber:', insertError);
      throw insertError;
    }

    return { success: true, message: 'Successfully subscribed to newsletter!' };
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    // Return more specific error message based on the error type
    if (error.code === '42P01') {
      return { success: false, message: 'Newsletter database not set up properly. Please contact support.' };
    }
    if (error.code === 'PGRST301') {
      return { success: false, message: 'Database connection error. Please try again.' };
    }
    return { 
      success: false, 
      message: error.message || 'Failed to subscribe. Please try again.' 
    };
  }
}; 