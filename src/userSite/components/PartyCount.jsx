import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../helper/ApiInstance";

export const PartyWiseResult = () => {
  const { year } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPartyResults();
  }, [year]);

  const fetchPartyResults = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get(`api/party-result?year=${year}`);
      setResults(res.data.data);
    } catch (err) {
      setError("Failed to load party results.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const totalSeats = results.reduce((sum, r) => sum + r.totalSeats, 0);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-800">
            Party-wise Results
          </h2>
          <p className="text-blue-400 text-sm mt-1">Election Year: {year}</p>
        </div>
        {!loading && results.length > 0 && (
          <div className="text-right">
            <p className="text-xs text-blue-400 uppercase tracking-wide">
              Total Seats
            </p>
            <p className="text-3xl font-bold text-blue-800">{totalSeats}</p>
          </div>
        )}
      </div>

      {/* Party Cards */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-blue-100 rounded-2xl p-5 animate-pulse">
              <div className="h-3 w-16 bg-blue-200 rounded mb-4" />
              <div className="h-8 w-10 bg-blue-200 rounded mb-2" />
              <div className="h-2 w-full bg-blue-200 rounded-full" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-10 text-center">
          <p className="text-blue-500 font-medium">{error}</p>
          <button
            onClick={fetchPartyResults}
            className="mt-3 text-sm text-blue-500 underline hover:text-gray-700"
          >
            Try again
          </button>
        </div>
      ) : results.length === 0 ? (
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center">
          <p className="text-blue-400">No data available for {year}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((item, index) => {
            const percentage = ((item.totalSeats / totalSeats) * 100).toFixed(
              1
            );

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                {/* Rank + percentage */}
                <div className="flex items-center justify-between">
                  <span className="bg-gray-800 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    #{index + 1}
                  </span>
                  <span className="text-xs text-gray-400">{percentage}%</span>
                </div>

                {/* Party Name */}
                <p className="text-sm font-semibold text-gray-700 leading-tight line-clamp-2">
                  {item.partyName}
                </p>

                {/* Seats count */}
                <div>
                  <p className="text-3xl font-extrabold text-gray-800">
                    {item.totalSeats}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">Total Seats</p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-gray-800 h-1.5 rounded-full transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Refresh */}
      {!loading && (
        <div className="mt-5 flex justify-end">
          <button
            onClick={fetchPartyResults}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
};
