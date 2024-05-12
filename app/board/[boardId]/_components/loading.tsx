import { Loader } from "lucide-react";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";


export const Loading = () => {
    return (
        <main className="h-screen w-full relative bg-neutral-100 touch-none flex items-center justify-center">
            <Loader className="w-10 h-10 animate-spin text-muted-foreground" />
            <Info.Skeleton />
            <Participants.Skeleton />
            <Toolbar.Skeleton />
        </main>
    )
       
    
}