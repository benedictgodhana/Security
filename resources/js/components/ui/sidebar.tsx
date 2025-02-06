'use client'

import * as React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="fixed inset-y-0 flex w-64 flex-col overflow-y-auto bg-background border-r border-border">
      {children}
    </aside>
  )
}

export const SidebarTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Trigger asChild>{children}</Dialog.Trigger>
  )
}

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-1 flex-col">{children}</div>
}

export const SidebarHeader = ({ children }: { children: React.ReactNode }) => {
  return <header className="px-6 py-4">{children}</header>
}

export const SidebarFooter = ({ children }: { children: React.ReactNode }) => {
  return <footer className="px-6 py-4">{children}</footer>
}

export const SidebarNav = ({ children }: { children: React.ReactNode }) => {
  return <nav className="space-y-1 px-6">{children}</nav>
}

export const SidebarNavItem = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
  return (
    <a
      href={href}
      className={`flex items-center gap-x-2 p-2 rounded-lg ${className}`}
    >
      {children}
    </a>
  )
}

export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog.Root>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed inset-y-0 left-0 z-50 h-full w-3/4 max-w-sm bg-background p-6 shadow-lg animate-in slide-in-from-left">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
