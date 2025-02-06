import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Navbar } from "@/Components/navbar"
import type { ReactNode } from "react"


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar username="John Doe" />
            <div className="flex-1 flex">{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}

