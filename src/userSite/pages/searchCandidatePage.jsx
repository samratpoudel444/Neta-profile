import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SearchBar } from "../components/SearchBar";
import { SearchProvider } from "../../helper/SearchContext"
import { DisplayResults } from "../components/DisplayResults";

export const SearchCandidatePage=()=>
{
    return (
      <SearchProvider>
        <div className="bg-gray-200 h-screen w-screen flex flex-col">
          <Header />
          <SearchBar />
          <DisplayResults />
          <Footer />
        </div>
      </SearchProvider>
    );
}
