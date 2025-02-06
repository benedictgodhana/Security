import {
    LayoutDashboard,
    Users,
    Car,
    AlertTriangle,
    Settings,
    LogOut,
    ChevronDown,
    Key,
    FileText,
    LogIn,
    CheckIcon as CheckOut,
    ClipboardList,
    Sticker,
    Repeat,
    Database,
    PlusCircle,
    List,
    BarChart,
    ShieldCheck,
  } from "lucide-react"
  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarNav,
    SidebarNavItem,
  } from "@/components/ui/sidebar"
  import { useState } from "react"
  import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
  import { Inertia } from '@inertiajs/inertia';
  import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
  export function DashboardSidebar() {
    const [openModule, setOpenModule] = useState<string | null>(null)

    const toggleModule = (moduleName: string) => {
      setOpenModule(openModule === moduleName ? null : moduleName)
    }

    const { post } = useForm();

    const handleLogout = () => {
      post(route("logout"));
    };



    return (
      <Sidebar className="bg-[#0A1F44] text-gray-100">
        <SidebarHeader className="bg-[#0A1F44] p-6 border-b border-[#F97316]">
          <div className="flex flex-col items-center space-y-4">
            <img src="/images/University-Logo-Vertical-01.png" alt="Strathmore University Logo" className="h-34 w-auto" />
            <h2 className="text-lg font-bold text-center">Security Management System</h2>
          </div>
        </SidebarHeader>

        <SidebarContent className="py-6">
          <SidebarNav>
            <SidebarNavItem
              href="/dashboard"
              className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md"
            >
              <LayoutDashboard className="h-4 w-4 mr-3" />
              Dashboard
            </SidebarNavItem>

            <Collapsible open={openModule === "visitor"} onOpenChange={() => toggleModule("visitor")}>
              <CollapsibleTrigger className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md w-full flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-3" />
                  Visitors
                </div>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarNavItem
                  href="/visitor/check-in"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <LogIn className="h-4 w-4 mr-3" />
                  Check-In
                </SidebarNavItem>
                <SidebarNavItem
                  href="/visitor/check-out"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <CheckOut className="h-4 w-4 mr-3" />
                  Check-Out
                </SidebarNavItem>
                <SidebarNavItem
                  href="/visitor/logs"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <ClipboardList className="h-4 w-4 mr-3" />
                  Visitor Logs
                </SidebarNavItem>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openModule === "carSticker"} onOpenChange={() => toggleModule("carSticker")}>
              <CollapsibleTrigger className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md w-full flex items-center justify-between">
                <div className="flex items-center">
                  <Car className="h-4 w-4 mr-3" />
                  Car Sticker
                </div>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarNavItem
                  href="/car-sticker/issue"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <Sticker className="h-4 w-4 mr-3" />
                  Issue Sticker
                </SidebarNavItem>
                <SidebarNavItem
                  href="/car-sticker/renew"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <Repeat className="h-4 w-4 mr-3" />
                  Renew Sticker
                </SidebarNavItem>
                <SidebarNavItem
                  href="/car-sticker/vehicles"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <Database className="h-4 w-4 mr-3" />
                  Registered Vehicles
                </SidebarNavItem>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openModule === "incident"} onOpenChange={() => toggleModule("incident")}>
              <CollapsibleTrigger className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md w-full flex items-center justify-between">
                <div className="flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-3" />
                  Incident
                </div>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarNavItem
                  href="/incident/report"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <PlusCircle className="h-4 w-4 mr-3" />
                  Report Incident
                </SidebarNavItem>
                <SidebarNavItem
                  href="/incident/view"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <List className="h-4 w-4 mr-3" />
                  View Incidents
                </SidebarNavItem>
                <SidebarNavItem
                  href="/incident/analytics"
                  className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
                >
                  <BarChart className="h-4 w-4 mr-3" />
                  Incident Analytics
                </SidebarNavItem>
              </CollapsibleContent>
            </Collapsible>

            <SidebarNavItem
              href="/reports"
              className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md"
            >
              <FileText className="h-4 w-4 mr-3" />
              Reports
            </SidebarNavItem>

            <SidebarNavItem
              href="/users"
              className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md"
            >
              <Users className="h-4 w-4 mr-3" />
              Users
            </SidebarNavItem>

            <Collapsible open={openModule === "role"} onOpenChange={() => toggleModule("role")}>
  <CollapsibleTrigger className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md w-full flex items-center justify-between">
    <div className="flex items-center">
      <Key className="h-4 w-4 mr-3" />
      Roles
    </div>
    <ChevronDown className="h-4 w-4" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <SidebarNavItem
      href="/roles/add"
      className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
    >
      <PlusCircle className="h-4 w-4 mr-3" />
      Add Role
    </SidebarNavItem>
    <SidebarNavItem
      href="/roles/assign"
      className="hover:bg-[#F97316] transition-colors duration-200 ml-6 px-4 py-2 rounded-md"
    >
      <Users className="h-4 w-4 mr-3" />
      Assign Role
    </SidebarNavItem>
  </CollapsibleContent>
</Collapsible>


            <SidebarNavItem
              href="/permissions"
              className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md"
            >
              <ShieldCheck className="h-4 w-4 mr-3" />
              Permissions
            </SidebarNavItem>

            <SidebarNavItem
              href="/settings"
              className="hover:bg-[#F97316] transition-colors duration-200 mx-3 px-4 py-3 rounded-md"
            >
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </SidebarNavItem>
          </SidebarNav>
        </SidebarContent>

        <SidebarFooter className="bg-[#0A1F44] border-t border-[#F97316] p-4">
        <Button
  onClick={handleLogout}
  className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-200 flex items-center px-4 py-3 rounded-md"
>
  <LogOut className="h-4 w-4 mr-3" />
  Logout
</Button>

        </SidebarFooter>
      </Sidebar>
    )
  }
