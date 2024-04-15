"use client"

import { Table2 } from "lucide-react";

function Header() {
  return (
    <header className="w-full h-16 bg-foreground text-background flex items-center p-4 gap-1 shadow-lg">
      <Table2 size={24} />
      <h1 className="font-medium h-full leading-[2rem] text-2xl">WhatToDo</h1>
    </header>
  );
}

export default Header;
