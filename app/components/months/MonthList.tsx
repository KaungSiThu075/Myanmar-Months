"use client";
import {MonthInterface} from "@/lib/features/months/monthApiSlice";
import MonthItem from "@/app/components/months/MonthItem";
import React from "react";

export default function MonthList({months}:{months:MonthInterface[]}){

    return (
        <div
            className="3xs:grid-cols-1 grid sm:grid-cols-2 md:grid-cols-4  gap-4"
        >
            {months.map((month) => <MonthItem key={month.Id} month={month}/>)}
        </div>
    )
}