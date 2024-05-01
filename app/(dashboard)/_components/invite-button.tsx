import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";


export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Invite members
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 border-none bg-transparent max-w-[880px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    );
}