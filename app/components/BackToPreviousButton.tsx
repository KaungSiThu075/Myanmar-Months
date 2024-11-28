"use client";
import {useRouter} from "next/navigation";

export default function BackToPreviousButton(){
    const router = useRouter();
    const btnBackToPreviousPageHandler = () => {
        router.back();
    }
    return(
        <button
            className=" border border-black rounded my-1 py-2 px-3 hover:bg-gray-100"
            type={"button"}
            onClick={btnBackToPreviousPageHandler}
        >
            BACK
        </button>
    )
}