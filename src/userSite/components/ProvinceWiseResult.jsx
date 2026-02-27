import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../helper/ApiInstance";
import logo from "../../assets/images.png"
export const ProvinceWiseResult = () => {
  const { year } = useParams();

  const provinces = [
    { name: "Koshi Province" },
    { name: "Madesh Province" },
    { name: "Bagmati Province" },
    { name: "Gandaki Province" },
    { name: "Lumbini Province" },
    { name: "Karnali Province" },
    { name: "Sudurpaschim Province" },
  ];

  const [selectedProvince, setSelectedProvince] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleProvinceClick = async (province) => {
    setSelectedProvince(province);
    setLoading(true);

    try {
      const res = await api.get(
        `api/province-result?year=${year}&province=${province}`
      );
      setResults(res.data.data);
    } catch (error) {
      console.log(error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Election Year: {year}</h2>

      <div className="flex flex-wrap gap-4 mb-6">
        {provinces.map((province, index) => (
          <button
            key={index}
            onClick={() => handleProvinceClick(province.name)}
            className={`px-4 py-2 rounded-xl text-white transition-colors ${
              selectedProvince === province.name
                ? "bg-blue-700"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {province.name}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : results.length > 0 ? (
          <>
            <h3 className="font-bold text-lg mb-4">
              Results for {selectedProvince}
            </h3>
            {results.map((item, index) => (
              <div
                key={index}
                className="border-b py-3 flex justify-between items-center"
              >
                <div className="flex flex-row items-center gap-4">
                  <img
                    src={item.partyLogo ? item.partyLogo : logo}
                    alt={item.partyName}
                    className="w-8"
                  />
                  <h3 className="text-sm text-gray-500">{item.partyName}</h3>
                </div>
                <span className="font-bold text-blue-600">
                  {item.totalSeats} seats
                </span>
              </div>
            ))}
          </>
        ) : selectedProvince ? (
          <p className="text-gray-500">No data found for {selectedProvince}</p>
        ) : (
          <p className="text-gray-400">Select a province to view results</p>
        )}
      </div>
    </div>
  );
};
