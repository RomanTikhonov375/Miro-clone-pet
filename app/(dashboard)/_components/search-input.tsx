"use client"

import qs from "query-string"
import { Search } from "lucide-react"
import { useDebounceValue, useDebounceCallback } from "usehooks-ts"
import { useRouter } from "next/navigation"
import { useState, useEffect, ChangeEvent } from "react"
import { Input } from "@/components/ui/input"



export const SearchInput = () => {
    const router = useRouter()
    const [value, setValue] = useState("")
    const [debouncedValue, setDebouncedValue] = useDebounceValue(value, 500)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
               search: debouncedValue
            }
        }, { skipEmptyString: true, skipNull: true })
        router.push(url)
    },[debouncedValue, router])
    return (
       <div className="w-full relative">
        <Search 
        className="absolute left-3 top-1/2 trasform -translate-y-1/2 text-muted-foreground h-4 w-4"/>
        <Input className="w-full max-w-[516px] pl-9" placeholder="Search boards" onChange={handleChange} />
       </div> 
    ) }
