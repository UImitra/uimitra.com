// Function to subscribe to newsletter
export const subscribeToNewsletter = async (email: string) => {
  const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

  try {
    const payload = {
      email,
      fullName: 'Newsletter Subscriber',
      phone: 'N/A',
      companyName: 'N/A',
      details: 'Subscribed to Newsletter',
      pageName: 'Newsletter Subscriptions'
    };

    console.log('Submitting newsletter subscription:', payload);

    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return { success: true, message: 'Successfully subscribed to newsletter!' };
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return { 
      success: false, 
      message: error.message || 'Failed to subscribe. Please try again.' 
    };
  }
}; 