import { Sidebar } from "./_components/sidebar"
import { OrgSidebar } from "./_components/org-sidebar"
import { Navbar } from "./_components/navbar"

interface DashboardLyaoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLyaoutProps) => {
    return (
        <main className="h-full">
            <Sidebar />
            <div className="pl-[60px] h-full">
                <div className="flex h-full gap-x-3">
                    <OrgSidebar />
                    <div className="flex-1 h-full">
                        <Navbar/>
                        {children}
                    </div>
                </div>
            </div>

        </main>
    )
}

export default DashboardLayout