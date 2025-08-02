import React from 'react';

export const metadata = {
    title: "Dashboard",
    description: "Dashboard for managing paperwork and operations"
}

const DashboardLayout = ({children}) => {
    return (
        <div className="">
            {children}
        </div>
    )
}

export default DashboardLayout;