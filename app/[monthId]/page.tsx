"use client";
import React from "react";
import {useGetMonthsQuery} from "@/lib/features/months/monthApiSlice";
import MonthDetail from "@/app/components/months/MonthDetail";

export default function page({params}:{params:{monthId:string}}){
    // const monthIdFromParams:{monthId:string} = React.use(params);
    const monthId = params.monthId;

    const {month} = useGetMonthsQuery(undefined,{
        selectFromResult:({data})=>({
            month:data?.Tbl_Months.find(m=>m.Id === +monthId)
        })
    })

    if(month)
    {
        return(
            <MonthDetail month={month}/>
        )
    }
    else
    {
        return (
            <div>
                Loading...
            </div>
        )
    }
}