import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
    isFavorite: boolean
    title: string
    createdAtLabel: string
    authorLabel: string
    disabled: boolean
    onClick: () => void
}

export const Footer = ({ isFavorite, title, createdAtLabel, authorLabel, disabled, onClick }: FooterProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation()
        event.preventDefault()
        onClick()
    }
    return (
        <div className="relative bg-white p-3 ">
            <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">{createdAtLabel} by {authorLabel}</p>
            <button
                disabled={disabled}
                onClick={handleClick}
                className={cn("absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity hover:text-blue-600",
                    disabled && "cursor-not-allowed opacity-75")}>
                <Star className={cn("w-4 h-4", isFavorite && "text-blue-600 fill-blue-600")} />
            </button>
        </div>
    )
}