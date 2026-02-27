import { ChartSection } from "../components/ChartSection";
import { Slider } from "../components/FeaturedCandidate";
import { Footer } from "../components/footer";
import { Header } from "../components/header"
import { MapAndData } from "../components/MapAndData";
import { NepalMap } from "../components/NepalMap";


export const HomePage= ()=>
{
    return (
      <div className="bg-gray-200 h-full w-full flex flex-col">
        <Header />
        <MapAndData />
        <Slider />
        <ChartSection />
        <Footer />
      </div>
    );
}