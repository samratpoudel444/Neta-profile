import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../helper/ApiInstance"; 
import defaultLogo from "../../assets/images.png"; 

export const ElectedCandidate = () => {
  const { year } = useParams();
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (year) fetchWinners();
  }, [year]);

  const fetchWinners = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get(`/api/elected-candidates?year=${year}`);
      setWinners(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load elected candidates.");
      setWinners([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Elected Candidates of {year}</h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : winners.length === 0 ? (
        <p className="text-gray-400">No winners found for {year}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {winners.map((candidate, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={candidate.partyLogo || defaultLogo}
                  alt={candidate.partyName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{candidate.candidateName}</p>
                  <p className="text-sm text-gray-500">{candidate.partyName}</p>
                </div>
              </div>
              <span className="font-bold text-blue-600">
                {candidate.totalVotes} Votes
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
