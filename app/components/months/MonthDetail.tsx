"use client";
import {MonthInterface} from "@/lib/features/months/monthApiSlice";
import BackToPreviousButton from "@/app/components/BackToPreviousButton";

export default function MonthDetail({month}:{month:MonthInterface}){

    return(
        <div className=" flex flex-col items-center my-4 gap-3">
            <p className=" text-2xl font-semibold text-center">{month.MonthMm} <span>({month.MonthEn})</span></p>
            <p className="text-2xl font-semibold text-center" >{month.FestivalMm} <span>({month.FestivalEn})</span></p>

            <BackToPreviousButton/>

            <div className=" flex 3xs:flex-col md:flex-row items-start justify-center gap-5">
                <p>{month.Description}</p>
                <p>{month.Detail}</p>
            </div>
        </div>
    )
}