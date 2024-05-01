"use client"
import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { toast } from "sonner"

interface NewBoardButtonProps {
    orgId: string
    disabled?: boolean
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
    const { mutate, pending } = useApiMutation(api.board.create)

    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled",
        })
        .then((id) => {
            toast.success("Board created")
        })
        .catch((error) => {
            toast.error(error.message)
        })
    }
    return (
        <button
            disabled={pending || disabled}
            className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
                (pending ||disabled) && "cursor-not-allowed opacity-75 hover:bg-blue-600")}
            onClick={onClick}
        >

            <Plus className="w-12 h-12 text-white stroke-1" />

            <p className="text-white text-sm">Create new board</p>
        </button>
    )
}