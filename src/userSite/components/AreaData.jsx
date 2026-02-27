const Data = [
  {
    name: "Total Constituency:",
    value: "165",
  },
  {
    name: "Total Parties:",
    value: "67",
  },
  {
    name: "Total Candidates:",
    value: "3406",
  },
  {
    name: "Male Candidates:",
    value: "3017",
  },
  {
    name: "Female Candidates:",
    value: "388",
  },
  {
    name: "Others Candidates:",
    value: "1",
  },
];

export const AreaData= ()=>
{
    return(
        <div className="sm:grid sm:grid-cols-3 gap-4 grid grid-cols-2 w-full">
            {Data.map((data, index)=>
            {
                return(
                    <div className="xl:h-48 xl:w-48 h-32 w-[100%] lg:h-48 lg:w-[100%] bg-white hover:shadow-md shadow-2xl rounded-2xl h-24 flex flex-col p-4 justify-around">
                        <span className="lg:text-2xl text-xl">{data.name}</span>
                        <span className="lg:text-2xl text-xl">{data.value}</span>
                    </div>
                )
            })}
        </div>
    )
}