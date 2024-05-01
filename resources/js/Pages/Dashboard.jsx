import AppBody from "@/Components/AppBody";
import AppHeader from "@/Components/AppHeader";
import { DashContext } from "@/Contexts";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ auth, show, posts }) {
    const [dash, setDash] = useState({
        show: show,
        posts: posts,
    });

    return (
        <>
            <Head title="Dashboard" />
            <DashContext.Provider value={dash}>
                <AppHeader />
                <AppBody />
            </DashContext.Provider>
        </>
    );
}
