"use client";

import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Crown, Flame, Bird, Sword, Search } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { SideNav } from "./SideNav";
import gods from "@/data/gods";
import creatures from "@/data/creatures";

import logo from "/logo.svg";

const data = {
  user: {
    name: "Sai Prithvi",
    email: "saiprithvitech@gmail.com",
    avatar: "/avatar.png",
  },

  navMain: [
    { title: "Home", url: "/", icon: Home },
    { title: "Gods", url: "/gods", icon: Crown },
    { title: "Demons", url: "/demons", icon: Flame },
    { title: "Creatures", url: "/creatures", icon: Bird },
    { title: "Heroes", url: "/heroes", icon: Sword },
  ],
};

// Map each top-level section to its data source + the URL prefix
// used when generating detail links.
const sections = {
  "/": { items: gods, basePath: "/gods" },
  "/gods": { items: gods, basePath: "/gods" },
  "/creatures": { items: creatures, basePath: "/creatures" },
  // "/demons" and "/heroes" intentionally have no data yet.
};

export function AppSidebar({ ...props }) {
  const location = useLocation();
  const { setOpen } = useSidebar();

  const [search, setSearch] = React.useState("");

  // Active navigation item
  const activeItem = React.useMemo(() => {
    return (
      data.navMain.find((item) => {
        if (item.url === "/") {
          return location.pathname === "/";
        }

        return (
          location.pathname === item.url ||
          location.pathname.startsWith(`${item.url}/`)
        );
      }) || data.navMain[0]
    );
  }, [location.pathname]);

  // Resolve the current section's data + base path.
  // Falls back to an empty list for sections without data yet
  // (Demons / Heroes).
  const section = sections[activeItem.url] ?? { items: [], basePath: "" };
  const showArchive = section.items.length > 0 || activeItem.url === "/gods";

  const filteredItems = React.useMemo(() => {
    if (section.items.length === 0) return [];

    const query = search.toLowerCase().trim();
    if (!query) return section.items;

    return section.items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.mythology.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query),
    );
  }, [section.items, search]);

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      {/* FIRST SIDEBAR: ICON RAIL */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
      >
        {/* Logo */}
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                render={<Link to="/" />}
                tooltip={{ children: "LoreTown" }}
                className="md:h-8 md:p-0"
              >
                <div className="flex aspect-square size-8 items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={logo}
                    alt="LoreTown"
                    className="h-5 w-5 object-contain"
                  />
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* Navigation */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu className="gap-2">
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={
                        <Link to={item.url} onClick={() => setOpen(true)} />
                      }
                      tooltip={{ children: item.title }}
                      isActive={activeItem.title === item.title}
                      className="cursor-pointer px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* User Menu */}
        <SidebarFooter>
          <SideNav user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* SECOND SIDEBAR: CONTENT */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          {/* Header */}
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <span className="text-base font-semibold text-foreground">
                LoreTown
              </span>

              <span className="text-xs text-muted-foreground">/</span>

              <span className="truncate text-sm font-medium text-muted-foreground">
                {activeItem.title}
              </span>
            </div>

            <span className="shrink-0 rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-amber-400/80">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "entry" : "entries"}
            </span>
          </div>

          {/* Search — only rendered when the section actually has data */}
          {showArchive && (
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-white/30" />

              <SidebarInput
                placeholder="Search by name, mythology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
              />
            </div>
          )}
        </SidebarHeader>

        {/* Archive Content */}
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {!showArchive ? (
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                  <span className="text-3xl text-amber-400/30">✧</span>

                  <p className="mt-4 text-sm text-white/40">
                    The {activeItem.title} archive is being prepared.
                  </p>
                </div>
              ) : filteredItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                  <span className="text-3xl text-amber-400/30">✧</span>

                  <p className="mt-4 text-sm text-white/40">
                    No entities match "{search}".
                  </p>
                </div>
              ) : (
                filteredItems.map((entry) => (
                  <Link
                    to={`${section.basePath}/${entry.slug}`}
                    key={entry.id}
                    className="group flex cursor-pointer flex-col items-start gap-2 border-b border-white/[0.06] p-4 text-sm leading-tight transition-colors last:border-b-0 hover:bg-amber-500/[0.04]"
                  >
                    <div className="flex w-full items-center gap-2">
                      <span className="font-semibold text-white/90 transition-colors group-hover:text-amber-400">
                        {entry.name}
                      </span>

                      <span className="ml-auto shrink-0 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/40">
                        {entry.mythology}
                      </span>
                    </div>

                    <span className="text-xs font-medium text-amber-400/80">
                      {entry.title}
                    </span>

                    <span className="line-clamp-2 text-xs text-white/40">
                      {entry.introduction}
                    </span>
                  </Link>
                ))
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}

export default AppSidebar;
