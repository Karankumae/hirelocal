import React from 'react'
import { Input } from './ui/input'
import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Search } from "lucide-react";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
  import { useState,useEffect } from 'react';
function Dialogcommand() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/categories/');
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []); // <-- Runs only once on mount
  return (
    <>
    <Dialog>
    <div className="w-full flex justify-center mt-4  lg:mt-6">
      <DialogTrigger asChild>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search for a freelancer"
            className="pl-10"
          />
        </div>
      </DialogTrigger>
    </div>
  <DialogContent>
    <DialogHeader>
      <div className='hidden'>
      <DialogTitle>Search By Category</DialogTitle>
      </div>
      <Command>
  <CommandInput placeholder="Search for freelancers" />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Search by category">
{
  categories.map((i)=>{
    return(
      <div key={i.id}>
      <Link href={`/SearchFreelancer/${i.name}`}>
      <CommandItem >{i.name}</CommandItem>
      </Link>
      </div>
    )
  })
}
    </CommandGroup>
  </CommandList>
</Command>

    </DialogHeader>
  </DialogContent>
</Dialog>
    </>
  )
}

export default Dialogcommand