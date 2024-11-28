import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface MonthInterface {
    Id:number,
    MonthMm:string,
    MonthEn:string,
    FestivalMm:string,
    FestivalEn:string,
    Description:string,
    Detail:string
}

export interface MonthsResponseInterface {
    Tbl_Months: MonthInterface[]
}

export const monthApiSlice =  createApi({
    baseQuery:fetchBaseQuery({baseUrl:`/`}),
    reducerPath:'monthsApi',
    tagTypes:['Months'],
    endpoints:(build)=>({
        getMonths:build.query<MonthsResponseInterface,undefined>({
            query:()=>`MyanmarMonths.json`
        })
    })
})

export const {useGetMonthsQuery} = monthApiSlice