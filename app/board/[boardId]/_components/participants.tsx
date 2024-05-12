import { Skeleton } from "@/components/ui/skeleton";

export const Participants = () => {
    return <div className="absolute top-2 right-2 bg-white p-3 rounded-md h-12 flex items-center shadow-md">Participants</div>;
}

Participants.Skeleton = function ParticipantsSkeleton() {
    return (
        <div className="absolute top-2 right-2 bg-white p-3 rounded-md h-12 flex items-center shadow-md w-[100px]">
            <Skeleton className="w-full h-full bg-muted-400" />
        </div>
    );
}