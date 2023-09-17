"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/ui/sidebar";
import { toast } from "sonner";
import Navbar from "@/ui/navbar";

export default function JournalLayout({ children }) {

  return (
    <div className="flex flex-col items-center h-screen">
      <Navbar />
      <div className="w-full m-4 flex">
        <Sidebar />
        <div className="w-5/6">{children}</div>
      </div>
    </div>
  );
}