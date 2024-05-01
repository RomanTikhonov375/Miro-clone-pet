"use clinet"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator
} from "./ui/dropdown-menu"
import { Link2, Pencil, Trash2 } from "lucide-react"
import { toast } from "sonner"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { api } from "@/convex/_generated/api"
import { ConfirmModal } from "./confirm-modal"
import { Button } from "./ui/button"
import { useRemaneModal } from "@/store/use-rename-modal"
interface ActionProps {
    children: React.ReactNode
    side?: DropdownMenuContentProps["side"]
    sideOffset?: DropdownMenuContentProps["sideOffset"]
    title: string
    id: string
}

export const Actions = ({ children, side, sideOffset, title, id }: ActionProps) => {

    const { onOpen } = useRemaneModal()

    const { mutate, pending } = useApiMutation(api.board.remove)
    const onCopyLink: () => Promise<void> = () => {
        return navigator.clipboard.writeText(`${window.location.origin}/board/${id}`)
            .then(() => {
                toast.success('Link copied')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    const onDelete = () => {
        mutate({ id })
            .then(() => {
                toast.success('Board deleted')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent side={side} sideOffset={sideOffset} className="w-56" onClick={e => e.stopPropagation()}>
                <DropdownMenuItem id={id} className="p-3 cursor-pointer" onClick={onCopyLink}>
                    <Link2 className="mr-2 h-4 w-4" />
                    Copy board link
                </DropdownMenuItem>
                <DropdownMenuItem id={id} className="p-3 cursor-pointer" onClick={() => onOpen(id, title)}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Rename
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <ConfirmModal header="Delete board" description="Are you sure you want to delete this board?" onConfirm={onDelete} disabled={pending}>
                    <Button
                        variant={"ghost"}
                        id={id}
                        className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
                    // onClick={onDelete}
                    >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                    </Button>
                </ConfirmModal>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}