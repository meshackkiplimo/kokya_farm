import { useSearchRents } from "@/api/RentApi";
import MachineFilter from "@/components/MachineFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import { SearchState } from '@/pages/SearchPage';

export type SearchState = {
  searchQuery: string;
  page:number;
  selectedMachines: string[];
  sortOption:string

}

const SearchPage = () => {
  const {town} = useParams()
  const [searchState,setSearchState] = useState<SearchState>({
    searchQuery:  "",
    page:1,
    selectedMachines:[],
    sortOption:"bestMatch",
  })
  const [isExpanded,setIsExpanded] = useState<boolean>(false)
  const {results, isLoading} = useSearchRents(searchState,town)

  const setSortOption = (sortOption:string) =>{
    setSearchState((prevState)=>({

      ...prevState,
      sortOption,
      page:1,
    }))

  }



  const setSelectedMachines = (selectedMachines:string[]) =>{
    setSearchState((prevState)=>({
      ...prevState,
      selectedMachines,
      page:1
    }))
  }

  const setPage = (page:number) =>{
    setSearchState((prevState)=>({
      
      ...prevState,page}))
    

  }

  const setSearchQuery = (searchFormData:SearchForm) =>{
    setSearchState((prevState)=> ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page:1,


    }));
  }
    const resetSearch = () =>{
      
      setSearchState((prevState)=> ({
        ...prevState,
        searchQuery: "",
        page:1,
  
  
      }));
    }

    

  
  if(isLoading){
    <span>Loading....</span>
  }

  if(!results?.data || !town){
    return <span>No results found</span>
  }


  return(
  <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] ">

    <div id="machines-list" >
      <MachineFilter 
        selectedMachines={searchState.selectedMachines}
        onChange={setSelectedMachines}
        isExpanded={isExpanded}
        onExpandedClick={()=>setIsExpanded((prevIsExpanded)=> !prevIsExpanded)}
      
      />
    </div>
    <div id="main-content" className="flex flex-col gap-5">
      <SearchBar 
      searchQuery = {searchState.searchQuery}
      onsubmit={setSearchQuery} 
      placeHolder="search by Machine or Rent Name" 
      onReset = {resetSearch}
      
      />
      <div className="flex justify-between flex-col gap-3 lg:flex-row">
      <SearchResultInfo total={results.pagination.total} town={town} />
      <SortOptionDropdown sortOption={searchState.sortOption} onChange={(value)=>setSortOption(value)} />
      </div>

        
        {results.data.map((rent)=>(
        <SearchResultCard rent={rent} />
        ))}
        <PaginationSelector 
         page={results.pagination.page}
         pages={results.pagination.pages} 
         onPageChange={setPage}
        
        />
    </div>
  </div>
  )  
}


export default SearchPage;