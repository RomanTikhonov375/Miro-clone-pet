import { Skeleton } from "@/components/ui/skeleton"

export const Toolbar = () => {
    return (
        <div className="absolute top-[50%] left-2 translate-y-[-50%] flex flex-col gap-y-4">
            <div className="bg-white p-1.5 rounded-md flex gap-y-1 flex-col items-center shadow-md">
                <div>Pencil</div>
                <div>Line</div>
                <div>Rectangle</div>
                <div>Oval</div>
                <div>Arrow</div>
                <div>Text</div>
            </div>
            <div className="bg-white p-1.5 rounded-md shadow-md flex flex-col items-center">
                <div>Undo</div>
                <div>Redo</div>
            </div>
        </div>
    )
}

Toolbar.Skeleton = function ToolbarSkeleton() {
    return (
        <div className="rounded-md absolute top-[50%] left-2 translate-y-[-50%] flex flex-col gap-y-4 h-[360px] w-[56px] bg-white shadow-md">
          <Skeleton className="w-full h-full bg-muted-400"/>
        </div>
    )
}