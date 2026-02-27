import { AreaData } from "./AreaData";
import { NepalMap } from "./NepalMap"


export const MapAndData= ()=>
{
    return (
      <div className="p-8 w-full xl:flex xl:flex-row justify-around items-center flex flex-col md:gap-8 gap-4">
        <div className="xl:w-1/2 w-full ">
          <NepalMap />
        </div>
        <div className="xl:w-1/2 w-full ">
          <AreaData />
        </div>
      </div>
    );
}
