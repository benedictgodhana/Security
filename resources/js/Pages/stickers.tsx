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
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react"
import { useState } from "react"

export default function StickersPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedSticker, setSelectedSticker] = useState(null)

  const stickers = [
    {
      id: 1,
      code: "STK-001",
      name: "Sticker A",
      description: "A colorful sticker",
      size: "Large",
      color: "Red",
      expirationDate: "2025-12-31",
      status: "Active"
    },
    {
      id: 2,
      code: "STK-002",
      name: "Sticker B",
      description: "A small promotional sticker",
      size: "Small",
      color: "Blue",
      expirationDate: "2024-06-30",
      status: "Inactive"
    },
  ]

  const handleView = (sticker) => {
    setSelectedSticker(sticker)
    setIsViewDialogOpen(true)
  }

  const handleDelete = (sticker) => {
    setSelectedSticker(sticker)
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
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">Stickers</h1>
                <p className="text-muted-foreground mt-1">Manage registered stickers and their details</p>
              </div>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Sticker
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Sticker</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="code">Sticker Code</Label>
                      <Input id="code" placeholder="e.g., STK-001" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="e.g., Sticker A" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="size">Size</Label>
                        <Input id="size" placeholder="e.g., Large" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input id="description" placeholder="Sticker Description" />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                        Add Sticker
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
                <Input placeholder="Search stickers..." className="pl-10" />
              </div>
            </Card>

            {/* Stickers Table */}
            <div className="border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">Sticker Code</TableHead>
                    <TableHead className="font-semibold">Name</TableHead>
                    <TableHead className="font-semibold">Description</TableHead>
                    <TableHead className="font-semibold">Size</TableHead>
                    <TableHead className="font-semibold">Color</TableHead>
                    <TableHead className="font-semibold">Expiration Date</TableHead>
                    <TableHead className="text-right font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stickers.map((sticker) => (
                    <TableRow key={sticker.id}>
                      <TableCell className="font-medium">{sticker.code}</TableCell>
                      <TableCell>{sticker.name}</TableCell>
                      <TableCell>{sticker.description}</TableCell>
                      <TableCell>{sticker.size}</TableCell>
                      <TableCell>{sticker.color}</TableCell>
                      <TableCell>{sticker.expirationDate}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleView(sticker)}
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
                            onClick={() => handleDelete(sticker)}
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

            {/* View Sticker Dialog */}
            <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sticker Details</DialogTitle>
                </DialogHeader>
                {selectedSticker && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Sticker Code</Label>
                        <p className="font-medium">{selectedSticker.code}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Status</Label>
                        <p className="font-medium">{selectedSticker.status}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Name</Label>
                        <p className="font-medium">{selectedSticker.name}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Size</Label>
                        <p className="font-medium">{selectedSticker.size}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Description</Label>
                        <p className="font-medium">{selectedSticker.description}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-muted-foreground">Color</Label>
                        <p className="font-medium">{selectedSticker.color}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-muted-foreground">Expiration Date</Label>
                        <p className="font-medium">{selectedSticker.expirationDate}</p>
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
