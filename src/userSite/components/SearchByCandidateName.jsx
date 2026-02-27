import { useSearch } from "../../helper/SearchContext";
import api from "../../helper/ApiInstance";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { FaSearch } from "react-icons/fa";

export const SearchByCandidateName = () => {
  const [name, setName] = useState("");
  const { setResults, setLoading, setError } = useSearch(); 

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get(`/api/search-candidate?name=${name}`);
      setResults(res.data.data);
    } catch (err) {
      setError("No candidates found.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-4">
      <TextField
        size="small"
        label="Search Candidates"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        onClick={handleSearch}
        className="w-16 bg-blue-500 px-2 rounded-xl hover:bg-blue-600 flex items-center justify-center"
      >
        <FaSearch className="text-white" />
      </button>
    </div>
  );
};
