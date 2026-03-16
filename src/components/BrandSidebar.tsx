import { Home, Target, Image, Palette, Type, FileText } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const sections = [
  { title: "Обложка", url: "/", icon: Home },
  { title: "Миссия и ценности", url: "/mission", icon: Target },
  { title: "Логотип", url: "/logo", icon: Image },
  { title: "Цвета", url: "/colors", icon: Palette },
  { title: "Типографика", url: "/typography", icon: Type },
  { title: "Носители", url: "/stationery", icon: FileText },
];

export function BrandSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarContent className="pt-8">
        {!collapsed && (
          <div className="px-6 pb-6 mb-4 border-b border-sidebar-border">
            <p className="text-xs uppercase tracking-[0.3em] text-sidebar-foreground/60 font-sans-n">
              Брендбук
            </p>
            <h2 className="text-lg font-sans-n font-semibold text-sidebar-primary mt-1">
              Группа Смарт
            </h2>
          </div>
        )}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-sidebar-accent/50 transition-colors"
                      activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    >
                      <item.icon className="mr-3 h-4 w-4 shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
