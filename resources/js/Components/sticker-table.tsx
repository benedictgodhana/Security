import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const stickers = [
  { id: "001", vehicleNumber: "ABC123", type: "Resident", expiryDate: "2024-12-31", status: "Active" },
  { id: "002", vehicleNumber: "XYZ789", type: "Visitor", expiryDate: "2023-06-30", status: "Expired" },
  { id: "003", vehicleNumber: "DEF456", type: "Employee", expiryDate: "2024-09-30", status: "Active" },
  { id: "004", vehicleNumber: "GHI789", type: "Resident", expiryDate: "2024-03-31", status: "Active" },
  { id: "005", vehicleNumber: "JKL012", type: "Visitor", expiryDate: "2023-12-31", status: "Active" },
]

export function StickerTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sticker ID</TableHead>
          <TableHead>Vehicle Number</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Expiry Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stickers.map((sticker) => (
          <TableRow key={sticker.id}>
            <TableCell>{sticker.id}</TableCell>
            <TableCell>{sticker.vehicleNumber}</TableCell>
            <TableCell>{sticker.type}</TableCell>
            <TableCell>{sticker.expiryDate}</TableCell>
            <TableCell>
              <Badge variant={sticker.status === "Active" ? "default" : "destructive"}>{sticker.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

