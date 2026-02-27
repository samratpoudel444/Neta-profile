import { useState } from "react";
import { useSearch } from "../../helper/SearchContext"
import api from "../../helper/ApiInstance";

const provincesData = {
  "Koshi Province": {
    districts: {
      Taplejung: ["Taplejung-1", "Taplejung-2"],
      Sankhuwasabha: ["Sankhuwasabha-1", "Sankhuwasabha-2"],
      Solukhumbu: ["Solukhumbu-1", "Solukhumbu-2"],
      Okhaldhunga: ["Okhaldhunga-1"],
      Khotang: ["Khotang-1", "Khotang-2"],
      Bhojpur: ["Bhojpur-1", "Bhojpur-2"],
      Dhankuta: ["Dhankuta-1"],
      Terhathum: ["Terhathum-1"],
      Panchthar: ["Panchthar-1", "Panchthar-2"],
      Ilam: ["Ilam-1", "Ilam-2"],
      Jhapa: ["Jhapa-1", "Jhapa-2", "Jhapa-3", "Jhapa-4"],
      Morang: ["Morang-1", "Morang-2", "Morang-3", "Morang-4", "Morang-5"],
      Sunsari: ["Sunsari-1", "Sunsari-2", "Sunsari-3"],
    },
  },
  "Madesh Province": {
    districts: {
      Saptari: ["Saptari-1", "Saptari-2", "Saptari-3"],
      Siraha: ["Siraha-1", "Siraha-2", "Siraha-3"],
      Dhanusha: ["Dhanusha-1", "Dhanusha-2", "Dhanusha-3", "Dhanusha-4"],
      Mahottari: ["Mahottari-1", "Mahottari-2", "Mahottari-3"],
      Sarlahi: ["Sarlahi-1", "Sarlahi-2", "Sarlahi-3", "Sarlahi-4"],
      Rautahat: ["Rautahat-1", "Rautahat-2", "Rautahat-3"],
      Bara: ["Bara-1", "Bara-2", "Bara-3"],
      Parsa: ["Parsa-1", "Parsa-2", "Parsa-3"],
    },
  },
  "Bagmati Province": {
    districts: {
      Sindhuli: ["Sindhuli-1", "Sindhuli-2"],
      Ramechhap: ["Ramechhap-1", "Ramechhap-2"],
      Dolakha: ["Dolakha-1", "Dolakha-2"],
      Sindhupalchok: ["Sindhupalchok-1", "Sindhupalchok-2", "Sindhupalchok-3"],
      Kavrepalanchok: [
        "Kavrepalanchok-1",
        "Kavrepalanchok-2",
        "Kavrepalanchok-3",
      ],
      Lalitpur: ["Lalitpur-1", "Lalitpur-2", "Lalitpur-3"],
      Bhaktapur: ["Bhaktapur-1", "Bhaktapur-2"],
      Kathmandu: [
        "Kathmandu-1",
        "Kathmandu-2",
        "Kathmandu-3",
        "Kathmandu-4",
        "Kathmandu-5",
        "Kathmandu-6",
        "Kathmandu-7",
        "Kathmandu-8",
        "Kathmandu-9",
        "Kathmandu-10",
      ],
      Nuwakot: ["Nuwakot-1", "Nuwakot-2"],
      Rasuwa: ["Rasuwa-1"],
      Dhading: ["Dhading-1", "Dhading-2"],
      Makwanpur: ["Makwanpur-1", "Makwanpur-2"],
      Chitwan: ["Chitwan-1", "Chitwan-2", "Chitwan-3"],
    },
  },
  "Gandaki Province": {
    districts: {
      Gorkha: ["Gorkha-1", "Gorkha-2"],
      Lamjung: ["Lamjung-1"],
      Tanahu: ["Tanahu-1", "Tanahu-2"],
      Syangja: ["Syangja-1", "Syangja-2"],
      Kaski: ["Kaski-1", "Kaski-2", "Kaski-3"],
      Manang: ["Manang-1"],
      Mustang: ["Mustang-1"],
      Myagdi: ["Myagdi-1"],
      Parbat: ["Parbat-1"],
      Baglung: ["Baglung-1", "Baglung-2"],
      Nawalpur: ["Nawalpur-1", "Nawalpur-2"],
    },
  },
  "Lumbini Province": {
    districts: {
      Rupandehi: ["Rupandehi-1", "Rupandehi-2", "Rupandehi-3", "Rupandehi-4"],
      Kapilvastu: ["Kapilvastu-1", "Kapilvastu-2", "Kapilvastu-3"],
      Arghakhanchi: ["Arghakhanchi-1", "Arghakhanchi-2"],
      Gulmi: ["Gulmi-1", "Gulmi-2"],
      Palpa: ["Palpa-1", "Palpa-2"],
      Dang: ["Dang-1", "Dang-2", "Dang-3"],
      Banke: ["Banke-1", "Banke-2"],
      Bardiya: ["Bardiya-1", "Bardiya-2"],
      Rolpa: ["Rolpa-1", "Rolpa-2"],
      "Rukum East": ["Rukum East-1"],
      Pyuthan: ["Pyuthan-1", "Pyuthan-2"],
      "Nawalparasi West": ["Nawalparasi West-1", "Nawalparasi West-2"],
    },
  },
  "Karnali Province": {
    districts: {
      Dolpa: ["Dolpa-1"],
      Mugu: ["Mugu-1"],
      Humla: ["Humla-1"],
      Jumla: ["Jumla-1"],
      Kalikot: ["Kalikot-1"],
      Dailekh: ["Dailekh-1", "Dailekh-2"],
      Jajarkot: ["Jajarkot-1", "Jajarkot-2"],
      "Rukum West": ["Rukum West-1", "Rukum West-2"],
      Salyan: ["Salyan-1", "Salyan-2"],
      Surkhet: ["Surkhet-1", "Surkhet-2"],
    },
  },
  "Sudurpaschim Province": {
    districts: {
      Bajura: ["Bajura-1"],
      Bajhang: ["Bajhang-1", "Bajhang-2"],
      Darchula: ["Darchula-1"],
      Baitadi: ["Baitadi-1", "Baitadi-2"],
      Dadeldhura: ["Dadeldhura-1"],
      Doti: ["Doti-1", "Doti-2"],
      Achham: ["Achham-1", "Achham-2"],
      Kailali: ["Kailali-1", "Kailali-2", "Kailali-3", "Kailali-4"],
      Kanchanpur: ["Kanchanpur-1", "Kanchanpur-2", "Kanchanpur-3"],
    },
  },
};

export const SearchByArea = () => {
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedConstituency, setSelectedConstituency] = useState("");

  const { setResults, setLoading, setError } = useSearch();

  const districtOptions = selectedProvince
    ? Object.keys(provincesData[selectedProvince]?.districts || {})
    : [];

  const constituencyOptions =
    selectedProvince && selectedDistrict
      ? provincesData[selectedProvince]?.districts[selectedDistrict] || []
      : [];

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedDistrict("");
    setSelectedConstituency("");
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedConstituency("");
  };

  const handleConstituencyChange = (e) => {
    setSelectedConstituency(e.target.value);
  };

  const handleSearch = async () => {
    if (!selectedProvince) return;
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (selectedProvince) params.append("province", selectedProvince);
      if (selectedDistrict) params.append("district", selectedDistrict);
      if (selectedConstituency)
        params.append("constituency", selectedConstituency);

      const res = await api.get(`/api/search-candidate?${params.toString()}`);
      setResults(res.data.data);
    } catch (err) {
      setError("No candidates found for the selected area.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:flex md:flex-row flex flex-col gap-8">
      {/* Province */}
      <select
        value={selectedProvince}
        onChange={handleProvinceChange}
        className="border p-2"
      >
        <option value="">Select a Province</option>
        {Object.keys(provincesData).map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>

      <select
        value={selectedDistrict}
        onChange={handleDistrictChange}
        className="border p-2"
        disabled={!selectedProvince}
      >
        <option value="">Select a District</option>
        {districtOptions.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>

      <select
        value={selectedConstituency}
        onChange={handleConstituencyChange}
        className="border p-1"
        disabled={!selectedDistrict}
      >
        <option value="">Select a Constituency</option>
        {constituencyOptions.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button
        onClick={handleSearch}
        disabled={!selectedProvince}
        className="rounded-2xl p-2 bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </div>
  );
};
