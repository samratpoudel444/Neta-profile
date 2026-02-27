import { useSearch } from "../../helper/SearchContext";
import image from "../../assets/images.png"; // fixed import

export const DisplayResults = () => {
  const { results, loading, error } = useSearch();

  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (error) return <p className="text-center p-4 text-red-500">{error}</p>;
  if (results.length === 0) return null;

  return (
    <div className="p-6 overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Candidate Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Party Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Party Logo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Academic Qualification
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Constituency
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {results.map((candidate, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {candidate.candidateName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {candidate.sex}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {candidate.partyName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <img
                  src={candidate.partyLogo ? candidate.partyLogo : image}
                  alt={candidate.partyName}
                  className="w-8 h-8 object-contain"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {candidate.academicQualification}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">
                {candidate.constituency}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
