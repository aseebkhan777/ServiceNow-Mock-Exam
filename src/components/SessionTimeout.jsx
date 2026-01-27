import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EVENTS = ["mousemove", "keydown", "click", "scroll", "touchstart"];

const SessionTimeout = ({ timeout = 900000 }) => { // Default 15 mins
    const navigate = useNavigate();

    useEffect(() => {
        let timer;

        const resetTimer = () => {
            if (timer) clearTimeout(timer);

            // Only set timeout if we are authenticated
            if (sessionStorage.getItem("isAuthenticated") === "true") {
                timer = setTimeout(() => {
                    handleLogout();
                }, timeout);
            }
        };

        const handleLogout = () => {
            sessionStorage.removeItem("isAuthenticated");
            sessionStorage.removeItem("per"); // Clear name if used
            navigate("/");
        };

        // Listen for events
        EVENTS.forEach((event) => {
            window.addEventListener(event, resetTimer);
        });

        // Start timer on mount
        resetTimer();

        return () => {
            if (timer) clearTimeout(timer);
            EVENTS.forEach((event) => {
                window.removeEventListener(event, resetTimer);
            });
        };
    }, [navigate, timeout]);

    return null; // This component renders nothing
};

export default SessionTimeout;
