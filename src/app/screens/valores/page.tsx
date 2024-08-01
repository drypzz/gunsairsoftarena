"use client";

import React, { useEffect, useState } from "react";

import LoadinScreen from "@/app/components/loading";
import Navbar from "@/app/components/navbar";

const ValuesPage = () => {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);

    return (
        <>
            {loading ?
                <LoadinScreen />
            :
                <main>
                    <Navbar number={1} />
                </main>
            }
        </>
    );
};

export default ValuesPage;