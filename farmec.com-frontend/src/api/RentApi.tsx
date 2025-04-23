import { SearchState } from "@/pages/SearchPage"
import {  Rent, RentSearchResponse } from "@/types"
import { useQuery } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useGetRent = (rentId?:  string) =>{
    const getRentByIdRequest = async ():  Promise<Rent> =>{

        const response = await fetch(`${API_BASE_URL}/api/rent/${rentId}`);
        if (!response.ok){
            throw new Error("Failed to get rent")
    }
    return response.json()

    
    }

    const {data:rent,isLoading} = useQuery(
        "fetchrent",
        getRentByIdRequest,{
            enabled: !!rentId,
        }
        
    
    )

        return{rent,isLoading}

}

export const useSearchRents = (searchState: SearchState, town?: string) =>{
    const createSearchRequest = async ():Promise<RentSearchResponse> =>{
        const params = new URLSearchParams();
        params.set("searchQuery", searchState. searchQuery)
        params.set("page",  searchState.page.toString())
        params.set("selectedMachines",searchState.selectedMachines.join(","))
        params.set("sortOption",searchState.sortOption)
        const response = await fetch (`${API_BASE_URL}/api/rent/search/${town}?${params.toString()}`)
        if(!response.ok){
            throw new Error("Failed to get rent")
        }
        return response.json()
    }
    const {data:results, isLoading} = useQuery(
        ["searchRents",searchState],

        createSearchRequest,
        {enabled: !!town}
    )
    return{
        results,
        isLoading,
        
    }

}