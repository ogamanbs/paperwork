'use client'
import { Building, LogOut, MapPin, Scale, User } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const AdminPage = () => {
    const [user, setUser] = useState({
        name: "aman sharma",
        email: "amansharmase100@gmail.com",
        image: "aman.jpeg"
    });
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex">
            <div className="h-screen sticky top-0 w-64 bg-slate-900 text-white border-r border-slate-800">
                <div className="p-4 flex items-center justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center space-x-2">
                                <Scale className="h-8 w-8 text-blue-400" />
                                <span className="text-xl font-semibold text-white">Paperwork</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[88.5vh]">
                    <div className="h-[80vh] w-full flex flex-col justify-center px-10 gap-1">
                        <div className="px-2 py-2 rounded-lg w-full cursor-pointer hover:bg-slate-800 text-sm flex gap-2 transition-all duration-300 hover:transform hover:scale-110">
                            <User className="h-4 w-4" />
                            User Profiles
                        </div>
                        <div className="px-2 py-2 rounded-lg w-full cursor-pointer hover:bg-slate-800 text-sm flex gap-2 transition-all duration-300 hover:transform hover:scale-110">
                            <Building className="h-4 w-4" />
                            Firms
                        </div>
                        <div className="px-2 py-2 rounded-lg w-full cursor-pointer hover:bg-slate-800 text-sm flex gap-2 transition-all duration-300 hover:transform hover:scale-110">
                            <MapPin className="h-4 w-4" />
                            Countries
                        </div>
                    </div>
                    <div className="h-[8.5vh] px-2 py-1">
                        <div className="h-[7vh] hover:bg-slate-800 cursor-pointer flex justify-between items-center px-2 rounded-lg">
                            <div className="flex gap-2 items-center text-sm">
                                <div className="h-9 w-9 rounded-lg bg-slate-500 overflow-hidden">
                                    <Image src={`/${user.image}`} alt={'aman'} height={1440} width={1440}/>
                                </div>
                                <div className="capitalize">{user.name}</div>
                            </div>
                            <div className="pr-2">
                                <LogOut className="text-red-500 w-5 h-5"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-10">
                <div className="text-white flex flex-col gap-5">
                    <h1 className="text-6xl">Hi, <span className="capitalize font-bold text-blue-400">{user.name.split(" ")[0]}</span></h1>
                    <h2 className="text-4xl">Welcome to the dashboard</h2>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full mt-15 text-slate-200">
                    <div className="h-64 w-full bg-slate-900 border border-slate-700 rounded-[20px] py-5 px-10 transition-all duration-300 hover:transform hover:scale-105">
                        <h2 className="text-xl">Users opted for Early Access</h2>
                        <div className="h-full w-full flex items-center justify-center">
                            <h1 className="text-6xl font-bold">0</h1>
                        </div>
                    </div>
                    <div className="h-64 w-full bg-slate-900 border border-slate-700 rounded-[20px] py-5 px-10 transition-all duration-300 hover:transform hover:scale-105">
                        <h2 className="text-xl">Firms</h2>
                        <div className="h-full w-full flex items-center justify-center">
                            <h1 className="text-6xl font-bold">0</h1>
                        </div>
                    </div>
                    <div className="h-64 w-full bg-slate-900 border border-slate-700 rounded-[20px] py-5 px-10 transition-all duration-300 hover:transform hover:scale-105">
                        <h2 className="text-xl">Countries</h2>
                        <div className="h-full w-full flex items-center justify-center">
                            <h1 className="text-6xl font-bold">0</h1>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;