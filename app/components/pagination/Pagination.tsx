"use client";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {ChangeEvent, Dispatch} from "react";

interface PaginationProps {
    totalPages:number,
    setCurrentPage:Dispatch<React.SetStateAction<number>>
}
export default function PaginationList({totalPages,setCurrentPage}:PaginationProps) {

    const paginateHandler = (e:ChangeEvent<unknown>,value:number) => {
        console.log('event ',e);
        setCurrentPage(value);
    }

    return(
        <div>
            <Stack spacing={2}>
                <Pagination onChange={paginateHandler} count={totalPages} />
            </Stack>
        </div>
    )
}

//