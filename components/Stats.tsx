import React, { useState, useEffect } from 'react';
import { fetchPublicStats, PublicStats } from '../src/services/statsService';

export default function Stats() {
  const [stats, setStats] = useState<PublicStats>({
    total_campaigns: 0,
    total_messages: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchPublicStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to load stats:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
    // Refresh stats every 5 minutes
    const interval = setInterval(loadStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-8 py-12">
        <div className="text-slate-400">Carregando estatísticas...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-12 py-12">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full">
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">
            {formatNumber(stats.total_campaigns)}
          </div>
          <div className="text-slate-400 text-sm md:text-base">
            Campanhas Enviadas
          </div>
        </div>
        
        <div className="hidden md:block w-px h-16 bg-slate-700"></div>
        
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
            {formatNumber(stats.total_messages)}
          </div>
          <div className="text-slate-400 text-sm md:text-base">
            Mensagens Enviadas
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p className="text-slate-400 text-xs md:text-sm italic">
          * Números reais e atualizados em tempo real
        </p>
      </div>
    </div>
  );
}

