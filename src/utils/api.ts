
export const fetchWithErrorHandling = async (
    url: string,
    options: RequestInit = {},
  ) => {
    try {
      const response = await fetch(url, { ...options });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Global fetch error:', error.message);
      }
      throw error;
    }
  };
  