// Function to subscribe to newsletter
export const subscribeToNewsletter = async (email: string) => {
  const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
  if (!APPS_SCRIPT_URL) return { success: false, message: 'Newsletter endpoint is not configured' };

  try {
    const payload = {
      email,
      fullName: 'Newsletter Subscriber',
      phone: 'N/A',
      companyName: 'N/A',
      details: 'Subscribed to Newsletter',
      pageName: 'Newsletter Subscriptions'
    };

    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(payload),
    });

    return { success: true, message: 'Successfully subscribed to newsletter!' };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to subscribe. Please try again.' 
    };
  }
}; 