import { BarChart } from "./charts/BarGraph";
import { PieChart } from "./charts/PieChart";



export const ChartSection= ()=>
{
    return (
      <div className="p-8 w-full xl:flex xl:flex-row justify-between items-center flex flex-col md:gap-8 gap-4">
        <div className="xl:w-1/2 w-full">
          <PieChart />
        </div>
        <div className="xl:w-1/2 w-full">
          <BarChart />
        </div>
      </div>
    );
}
