"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog"

interface ConfirmModalProps {
    children: React.ReactNode
    description?: string
    onConfirm: () => void
    header: string
    disabled?: boolean
}

export const ConfirmModal = ({
    children,
    description,
    onConfirm,
    header,
    disabled
}: ConfirmModalProps) => {
    const handleConfirm = () => {
        onConfirm()}

    return (
        <AlertDialog>
            <AlertDialogTrigger
                asChild
                className="w-full"
            >
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle asChild>{header}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={disabled}
                        onClick={handleConfirm}
                    >Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
