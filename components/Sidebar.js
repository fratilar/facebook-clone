import { CalendarIcon, ClockIcon, HeartIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/outline";
import { BookmarkIcon, ChevronDownIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import React from "react";
import SidebarRow from "./SidebarRow";

function Sidebar() {
   const [session] = useSession();

   return (
      <div className="max-w-[600px] xl:min-w-[300px] p-2 mt-4">
         <SidebarRow src={session.user.image} title={session.user.name} />
         <SidebarRow Icon={HeartIcon} title="COVID-19: Centrul de informatii" />
         <SidebarRow Icon={UsersIcon} title="Prieteni" />
         <SidebarRow Icon={UserGroupIcon} title="Grupuri" />
         <SidebarRow Icon={ShoppingCartIcon} title="Marketplace" />
         <SidebarRow Icon={PlayIcon} title="Watch" />
         <SidebarRow Icon={CalendarIcon} title="Evenimente" />
         <SidebarRow Icon={ClockIcon} title="Amintiri" />
         <SidebarRow Icon={BookmarkIcon} title="Salvate" />
         <SidebarRow Icon={ChevronDownIcon} title="Vezi mai mult" />
      </div>
   );
}

export default Sidebar;
