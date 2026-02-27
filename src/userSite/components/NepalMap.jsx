import map from "../../assets/Nepal.png";

export const NepalMap= ()=>
{
    return (
    
        <div className="xl:h-[100%] w-[100%] shadow-2xl hover:shadow-md bg-white p-4 rounded-2xl">
            <img src={map} className="w-full h-full" />
        </div>
    );
}