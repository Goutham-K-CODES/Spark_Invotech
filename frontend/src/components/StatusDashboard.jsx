import React, { useState, useEffect } from 'react';
import apiService from '../services/api';

const StatusDashboard = () => {
  const [statusChecks, setStatusChecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newClientName, setNewClientName] = useState('');

  // Fetch status checks on component mount
  useEffect(() => {
    fetchStatusChecks();
  }, []);

  const fetchStatusChecks = async () => {
    try {
      setLoading(true);
      const data = await apiService.getStatus();
      setStatusChecks(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch status checks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createStatusCheck = async (e) => {
    e.preventDefault();
    if (!newClientName.trim()) return;

    try {
      await apiService.createStatusCheck(newClientName);
      setNewClientName('');
      fetchStatusChecks(); // Refresh the list
    } catch (err) {
      setError('Failed to create status check');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg" style={{ color: 'var(--text-primary)' }}>
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="p-8" style={{ background: 'var(--bg-primary)' }}>
      <h2 className="text-3xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
        Status Dashboard
      </h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Create new status check */}
      <form onSubmit={createStatusCheck} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={newClientName}
            onChange={(e) => setNewClientName(e.target.value)}
            placeholder="Enter client name"
            className="flex-1 px-4 py-2 rounded border"
            style={{
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)'
            }}
          />
          <button
            type="submit"
            className="px-6 py-2 rounded font-medium"
            style={{
              background: 'var(--brand-primary)',
              color: 'var(--bg-primary)'
            }}
          >
            Add Status Check
          </button>
        </div>
      </form>

      {/* Status checks list */}
      <div className="space-y-4">
        {statusChecks.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)' }}>
            No status checks found.
          </p>
        ) : (
          statusChecks.map((check) => (
            <div
              key={check.id}
              className="p-4 rounded border"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                  {check.client_name}
                </h3>
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {new Date(check.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StatusDashboard;