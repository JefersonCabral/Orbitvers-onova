// Service to fetch public statistics from the stats server
export interface PublicStats {
  total_campaigns: number;
  total_messages: number;
}

// Stats server URL - uses webhook API
// Configure VITE_STATS_WEBHOOK_URL no arquivo .env.local com a URL real de produção
const getStatsServerUrl = (): string => {
  // @ts-ignore - Vite env variables
  const webhookUrl = import.meta.env?.VITE_STATS_WEBHOOK_URL;
  // @ts-ignore - Vite env variables
  const envUrl = import.meta.env?.VITE_STATS_SERVER_URL;

  if (envUrl) {
    return envUrl;
  }

  // In production, use webhook API
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    if (!webhookUrl) {
      console.warn('⚠️ VITE_STATS_WEBHOOK_URL não configurada. Defina no arquivo .env.local');
      return '';
    }
    return webhookUrl;
  }

  // Development: use localhost:3001 directly
  return 'http://localhost:3001';
};

const STATS_SERVER_URL = getStatsServerUrl();

export async function fetchPublicStats(): Promise<PublicStats> {
  try {
    const isProduction = typeof window !== 'undefined' && 
                         window.location.hostname !== 'localhost' && 
                         window.location.hostname !== '127.0.0.1';
    
    // In production, use webhook API directly (returns array)
    // In development, use /stats endpoint
    const url = isProduction 
      ? STATS_SERVER_URL  // Full webhook URL
      : `${STATS_SERVER_URL}/stats`;  // localhost:3001/stats
      
    console.log('📊 Fetching stats from:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('📊 Stats response:', data);
    
    // Webhook API returns array with object inside
    if (Array.isArray(data) && data.length > 0 && data[0].success && data[0].data) {
      return data[0].data;
    }
    
    // Fallback for direct stats endpoint format
    if (data.success && data.data) {
      return data.data;
    }
    
    throw new Error('Invalid response format');
  } catch (error) {
    console.error('❌ Error fetching public stats:', error);
    // Return default values on error
    return {
      total_campaigns: 0,
      total_messages: 0
    };
  }
}

