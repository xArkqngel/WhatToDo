"use client"
import Link from "next/link";
import { AlarmClock } from "lucide-react";

import { Table2 } from "lucide-react";

function Header() {
  return (
    <header className="w-full h-16 bg-foreground text-background flex items-center justify-between p-4 gap-1 shadow-lg">
      <Link href={'/'} className='flex gap-1 items-center'>
        <Table2 size={24} />
        <h1 className="font-medium h-full leading-[1.9rem] text-2xl">Trello</h1>
      </Link>

      <Link href="/pomodoro" className="flex gap-1 items-center">
        <AlarmClock size={24} />
      </Link>
    </header>
  );
}

export default Header;
