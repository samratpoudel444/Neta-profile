import { SearchByArea } from "./SearchByArea";
import { SearchByCandidateName } from "./SearchByCandidateName";

export const SearchBar = () => {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="lg:w-[90%] lg:h-24 bg-white rounded-3xl lg:flex lg:flex-row flex flex-col gap-8 p-8 justify-around">
        <div className="border-b-2 sm:border-b-0 md:p-0 p-2">
          <SearchByCandidateName />
        </div>
        <div className="border-b-2 sm:border-b-0 md:p-0 p-2">
          <SearchByArea />
        </div>
      </div>
    </div>
  );
};
