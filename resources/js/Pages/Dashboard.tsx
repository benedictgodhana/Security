import { DashboardSidebar } from "@/Components/sidebar"
import { StatCard } from "@/Components/stat-card"
import { StickerTable } from "@/Components/sticker-table"
import { StickerChart } from "@/Components/sticker-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Car,
  Sticker,
  Users,
  AlertTriangle,
  UserCheck,
  Clock,
  ShieldAlert,
  CheckCircle
} from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Stickers",
      value: "1,234",
      description: "Active stickers in the system",
      icon: <Sticker className="h-4 w-4 text-primary" />,
    },
    {
      title: "Registered Vehicles",
      value: "987",
      description: "Vehicles with active stickers",
      icon: <Car className="h-4 w-4 text-primary" />,
    },
    {
      title: "Active Visitors",
      value: "45",
      description: "Currently checked-in visitors",
      icon: <UserCheck className="h-4 w-4 text-green-500" />,
    },
    {
      title: "Total Users",
      value: "456",
      description: "Registered users in the system",
      icon: <Users className="h-4 w-4 text-primary" />,
    },
    {
      title: "Pending Incidents",
      value: "12",
      description: "Incidents awaiting resolution",
      icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    },
    {
      title: "Recent Visits",
      value: "189",
      description: "Visitors in last 24 hours",
      icon: <Clock className="h-4 w-4 text-blue-500" />,
    }
  ]

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <main className="p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Dashboard
              </h1>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat) => (
                <StatCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                  icon={stat.icon}
                />
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Sticker Distribution */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Sticker Distribution</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <StickerChart />
                </CardContent>
              </Card>

              {/* Incident Status */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Incident Status</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <ShieldAlert className="h-5 w-5 text-red-500" />
                        <span>Critical Incidents</span>
                      </div>
                      <span className="font-bold text-red-500">3</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <span>Pending Investigation</span>
                      </div>
                      <span className="font-bold text-yellow-500">7</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>Resolved Today</span>
                      </div>
                      <span className="font-bold text-green-500">15</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tables Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Recent Stickers */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Recent Stickers</CardTitle>
                </CardHeader>
                <CardContent>
                  <StickerTable />
                </CardContent>
              </Card>

              {/* Active Visitors */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Active Visitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border-b">
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">Meeting Room A</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Check-in: 09:30 AM</p>
                        <p className="text-sm text-gray-500">Expected duration: 2h</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border-b">
                      <div>
                        <p className="font-medium">Jane Smith</p>
                        <p className="text-sm text-gray-500">Conference Room</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Check-in: 10:15 AM</p>
                        <p className="text-sm text-gray-500">Expected duration: 1h</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <div>
                        <p className="font-medium">Robert Johnson</p>
                        <p className="text-sm text-gray-500">IT Department</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Check-in: 11:00 AM</p>
                        <p className="text-sm text-gray-500">Expected duration: 3h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
