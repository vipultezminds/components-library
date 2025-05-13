import React, { useState, useMemo } from 'react';

/**
 * @param {{
 *   data: Array<object>,
 *   columns: Array<{ key: string, label: string }>,
 *   pageSize?: number
 * }} props
 */

const DataTable = ({ data, columns, pageSize = 5 }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(columnKey);
      setSortOrder('asc');
    }
  };

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery]);

  const sortedData = useMemo(() => {
    if (!sortBy) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortBy, sortOrder]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                style={{ cursor: 'pointer', borderBottom: '1px solid #ccc', padding: '0.5rem', textAlign: 'left' }}
              >
                {col.label}
                {sortBy === col.key ? (sortOrder === 'asc' ? ' ▲' : ' ▼') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;