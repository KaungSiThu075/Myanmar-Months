"use client";
import {useGetMonthsQuery} from "@/lib/features/months/monthApiSlice";
import MonthList from "@/app/components/months/MonthList";
import {useState} from "react";
import PaginationList from "@/app/components/pagination/Pagination";

export default function HomePage(){
    const {data:monthsStructure,isError,isLoading,isSuccess} = useGetMonthsQuery(undefined);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage = 4;

    const lastIndex = currentPage * itemsPerPage;

    const startIndex = lastIndex - itemsPerPage;

    if(isError){ return (<div>Error</div>)}

    if(isLoading){ return (<div>Loading...</div>)}

    if(isSuccess)
    {
        const totalPages = Math.ceil(monthsStructure.Tbl_Months.length / itemsPerPage);

        const paginatedItems = monthsStructure.Tbl_Months.slice(startIndex,lastIndex);

        return(
            <div className=" flex flex-col items-center justify-between gap-6">
                <h1 className=" text-3xl font-bold my-3">မြန်မာလအသေးစိတ်များ</h1>
                <MonthList months={paginatedItems}/>
                <PaginationList
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        )
    }
}