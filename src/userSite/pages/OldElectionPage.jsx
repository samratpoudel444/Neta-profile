import { ElectedCandidate } from "../components/ElectedCandidateLists";
import { Footer } from "../components/footer";
import { Header } from "../components/header"
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

