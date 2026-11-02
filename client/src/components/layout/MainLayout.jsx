import { Outlet } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import AppSidebar from "./app-sidebar";
import { ModeToggle } from "../ui/mode-toggle";
import { ThemeProvider } from "../ui/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

function MainLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider delay={0} closeDelay={0}>
        <SidebarProvider
          style={{
            "--sidebar-width": "350px",
          }}
        >
          <AppSidebar />

          <SidebarInset className="min-w-0 bg-[#0B0B0D] text-white">
            <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center border-b border-white/10 bg-[#0B0B0D]/80 px-4 backdrop-blur-md supports-backdrop-filter:bg-[#0B0B0D]/60">
              {/* Sidebar Toggle */}
              <SidebarTrigger className="mr-3 -ml-1 shrink-0 cursor-pointer rounded-md text-white/70 transition-colors hover:bg-white/5 hover:text-white" />

              {/* Custom Vertical Divider */}
              <div
                aria-hidden="true"
                className="mr-3 h-5 w-px shrink-0 self-center bg-white/15"
              />

              {/* Breadcrumbs */}
              <Breadcrumb className="min-w-0">
                <BreadcrumbList className="flex items-center gap-1.5 text-sm sm:gap-2">
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink
                      href="#"
                      className="cursor-pointer rounded-sm px-1 py-0.5 text-white/50 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      All Inboxes
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="hidden text-white/25 md:block" />

                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-medium text-white">
                      Inbox
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              {/* Right Actions */}
              <div className="ml-auto flex shrink-0 items-center gap-2">
                <div className="cursor-pointer rounded-md transition-colors hover:bg-white/5">
                  <ModeToggle />
                </div>
              </div>
            </header>

            {/* Page Content */}
            <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 h-screen">
              <Outlet />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default MainLayout;
