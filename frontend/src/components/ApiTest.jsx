import React, { useState, useEffect } from 'react';
import apiService from '../services/api';

const ApiTest = () => {
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      const response = await apiService.healthCheck();
      setConnected(true);
      console.log('API connected:', response);
    } catch (error) {
      setConnected(false);
      console.error('API connection failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={{ color: 'var(--text-primary)' }}>Testing connection...</div>;
  }

  return (
    <div className="p-4 rounded" style={{ 
      background: connected ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
      border: `1px solid ${connected ? '#00FF00' : '#FF0000'}`
    }}>
      <h3 style={{ color: 'var(--text-primary)' }}>
        API Status: {connected ? '✅ Connected' : '❌ Disconnected'}
      </h3>
      <p style={{ color: 'var(--text-secondary)' }}>
        Backend URL: {process.env.REACT_APP_API_URL || 'http://localhost:8000/api'}
      </p>
    </div>
  );
};

export default ApiTest;