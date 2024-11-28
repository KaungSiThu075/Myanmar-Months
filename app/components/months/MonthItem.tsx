"use client";
import {MonthInterface} from "@/lib/features/months/monthApiSlice";
import {useRouter} from "next/navigation";

export default function MonthItem({month}:{month:MonthInterface}){
    const router = useRouter();

    const monthDetailHandler = () => {
        router.push(`/${month.Id}`);
    }

    return(
        <div
            className=" cursor-pointer relative overflow-hidden group"
            onClick={monthDetailHandler}
        >
            <img
                className=" w-[400px] h-[400px] rounded-lg transition-all duration-300 group-hover:brightness-50"
                src={`img/${month.Id}.jpg`} alt={month.MonthMm}
            />
            <div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-65 transition-opacity duration-200 rounded-lg"></div>
            <p
                className="text-lg absolute inset-0 flex items-center justify-center text-white font-bold transition-all duration-300 group-hover:text-black hover:underline"
            >
                {month.MonthMm}
            </p>
        </div>
    )
}