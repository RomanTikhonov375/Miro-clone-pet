import { Skeleton } from "@/components/ui/skeleton"

export const Info = () => {
    return (
        <div className="absolute top-2 left-2 bg-white px-1.5 rounded-md h-12 flex items-center shadow-md">
            Info
        </div>
    )
}

Info.Skeleton = function InfoSkeleton() {
    return (
        <div className="absolute top-2 left-2 bg-white px-1.5 rounded-md h-12 flex items-center shadow-md w-[300px]">
            <Skeleton className="w-full h-full bg-muted-400"/>
        </div>
    )
}

