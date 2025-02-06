"use client"

import { DashboardSidebar } from "@/Components/sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Car, Plus, Search, Eye, Pencil, Trash2 } from "lucide-react"
import { useState } from "react"

export default function VehiclesPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  const vehicles = [
    {
      id: 1,
      plateNumber: "KAA 123B",
      make: "Toyota",
      model: "Corolla",
      year: "2020",
      owner: "John Doe",
      color: "Silver",
      registrationDate: "2023-01-15",
      insuranceExpiry: "2024-12-31",
      status: "Active"
    },
    {
      id: 2,
      plateNumber: "KBB 456C",
      make: "Honda",
      model: "Civic",
      year: "2021",
      owner: "Jane Smith",
      color: "Black",
      registrationDate: "2023-03-20",
      insuranceExpiry: "2024-11-30",
      status: "Active"
    },
  ]

  const handleView = (vehicle) => {
    setSelectedVehicle(vehicle)
    setIsViewDialogOpen(true)
  }

  const handleDelete = (vehicle) => {
    setSelectedVehicle(vehicle)
    setIsDeleteDialogOpen(true)
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <main className="p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Vehicles</h1>
                <p className="text-muted-foreground mt-1">Manage registered vehicles and their details</p>
              </div>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Vehicle
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Vehicle</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="plateNumber">Plate Number</Label>
                      <Input id="plateNumber" placeholder="e.g., KAA 123B" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="make">Make</Label>
                        <Input id="make" placeholder="e.g., Toyota" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="model">Model</Label>
                        <Input id="model" placeholder="e.g., Corolla" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="year">Year</Label>
                        <Input id="year" placeholder="e.g., 2020" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="owner">Owner</Label>
                        <Input id="owner" placeholder="Owner's full name" />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                        Add Vehicle
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Search and Filter Section */}
            <Card className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search vehicles..." className="pl-10" />
              </div>
            </Card>

            {/* Vehicles Table */}
            <div className="border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Plate Number</TableHead>
                    <TableHead className="font-semibold">Make</TableHead>
                    <TableHead className="font-semibold">Model</TableHead>
                    <TableHead className="font-semibold">Year</TableHead>
                    <TableHead className="font-semibold">Owner</TableHead>
                    <TableHead className="text-right font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vehicles.map((vehicle) => (
                    <TableRow key={vehicle.id}>
                      <TableCell className="font-medium">{vehicle.plateNumber}</TableCell>
                      <TableCell>{vehicle.make}</TableCell>
                      <TableCell>{vehicle.model}</TableCell>
                      <TableCell>{vehicle.year}</TableCell>
                      <TableCell>{vehicle.owner}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleView(vehicle)}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                          >
                            <Pencil className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            onClick={() => handleDelete(vehicle)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* View Vehicle Dialog */}
            <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Vehicle Details</DialogTitle>
                </DialogHeader>
                {selectedVehicle && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Plate Number</Label>
                        <p className="font-medium">{selectedVehicle.plateNumber}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Status</Label>
                        <p className="font-medium">{selectedVehicle.status}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Make</Label>
                        <p className="font-medium">{selectedVehicle.make}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Model</Label>
                        <p className="font-medium">{selectedVehicle.model}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Year</Label>
                        <p className="font-medium">{selectedVehicle.year}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Owner</Label>
                        <p className="font-medium">{selectedVehicle.owner}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Color</Label>
                        <p className="font-medium">{selectedVehicle.color}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Registration Date</Label>
                        <p className="font-medium">{selectedVehicle.registrationDate}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Insurance Expiry</Label>
                        <p className="font-medium">{selectedVehicle.insuranceExpiry}</p>
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
           

          </div>
        </main>
      </div>
    </div>
  )
}
