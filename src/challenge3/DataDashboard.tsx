import React, { useState, useEffect } from 'react';
import DataChart from './DataChart';
import DataFilters from './DataFilters';

interface DashboardData {
  sales: number[];
  customers: number[];
  revenue: number[];
}

function magicBackendApi(range:string, category: string): Promise<DashboardData>{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        sales: [100, 200, 150, 300],
        customers: [50, 75, 60, 90],
        revenue: [1000, 2000, 1500, 3000]
      });
    }, 1000);
  });
}

const DataDashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData>({ sales: [], customers: [], revenue: [] });
  const [filters, setFilters] = useState({ dateRange: '30d', category: 'all' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Dashboard effect running - fetching data');
    setLoading(true);

    magicBackendApi(filters.dateRange, filters.category).then((response) => {
      setData(response);
      setLoading(false);
    });
  }, [filters.dateRange, filters.category, data]);

  useEffect(() => {
    console.log('Data processing effect running');
    if (data.sales.length > 0) {
      const processedData = data.sales.map(sale => sale * 1.1);
      console.log('Processed sales data:', processedData);
    }
  }, [data, filters]);

  return (
    <div>
      <h1>Data Dashboard</h1>
      {loading && <p>Loading...</p>}
      <DataFilters filters={filters} onFiltersChange={setFilters} />
      <DataChart data={data} />
    </div>
  );
};

export default DataDashboard;
