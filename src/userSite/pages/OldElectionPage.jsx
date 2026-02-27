import { ElectedCandidate } from "../components/ElectedCandidateLists";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header"
import { PartyWiseResult } from "../components/PartyCount";
import { ProvinceWiseResult } from "../components/ProvinceWiseResult";


export const OldElectionPage=()=>
{
    return (
      <div>
        <Header />
        <ProvinceWiseResult />
        <PartyWiseResult />
        <ElectedCandidate />
        <Footer/>
      </div>
    );
}

