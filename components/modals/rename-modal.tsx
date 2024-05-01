"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogFooter,
    DialogTitle
} from "@/components/ui/dialog"

import { useRemaneModal } from "@/store/use-rename-modal"
import { FormEvent, FormEventHandler, useEffect, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"

export const RenameModal = () => {
    const {mutate, pending} = useApiMutation(api.board.update)
    const { isOpen, initialValues, onClose } = useRemaneModal()
    const [title, setTitle] = useState(initialValues.title)

    useEffect(() => {
        setTitle(initialValues.title)
    }, [initialValues.title])

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        mutate({id: initialValues.id, title})
            .then(() => {
                toast.success('Board renamed')
                setTitle(initialValues.title)
                onClose()
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit board title</DialogTitle>

                </DialogHeader>
                <DialogDescription>
                    Enter a new title for your board.
                </DialogDescription>
                <form onSubmit={onSubmit} className="space-y-4">
                    <Input
                        disabled={pending}
                        required
                        maxLength={60}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Board title" />

                    <DialogFooter>
                        <DialogClose className="flex gap-2" asChild>
                            <Button type="button" variant={"outline"}>
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button type="submit" disabled={pending}>
                                Rename
                            </Button>
                    </DialogFooter>
                </form>

            </DialogContent>
        </Dialog>
    )
}

