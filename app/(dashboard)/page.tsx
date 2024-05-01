"use client"

import { EmptyOrg } from "./_components/empty-org"
import { useOrganization } from "@clerk/nextjs"
import { BoardList } from "./_components/board-list"

interface DashboardRootPageProps {
    searchParams: {
        search? : string,
        favorites? : string
    }
}

const DashboardRootPage = ({searchParams}: DashboardRootPageProps) => {
    const { organization } = useOrganization()
    return (
        <div className="flex-1 h-[calc(100vh-86px)] p-6">
            {!organization ? (<EmptyOrg></EmptyOrg>) : (<BoardList orgId={organization.id} query={searchParams}/>)}
        
        </div>
    )
}

export default DashboardRootPage