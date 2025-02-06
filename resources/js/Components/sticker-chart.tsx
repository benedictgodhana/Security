"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", stickers: 65 },
  { month: "Feb", stickers: 59 },
  { month: "Mar", stickers: 80 },
  { month: "Apr", stickers: 81 },
  { month: "May", stickers: 56 },
  { month: "Jun", stickers: 55 },
  { month: "Jul", stickers: 40 },
]

export function StickerChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sticker Issuance Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="stickers" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

