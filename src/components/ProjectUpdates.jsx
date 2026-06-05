import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";


export default function ProjectUpdates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const updateMessages = [
        "Project created",
        "Navbar completed",
        "Dark mode added",
        "Form validation added",
        "Bug fixed"
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                if (prev + 1 < updateMessages.length) {
                    return prev + 1;
                }
                return 0;
            })
        }, 15000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="flex justify-center items-center">
            <AnimatePresence mode="wait">
                <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-xl dark:text-amber-300">
                    {updateMessages[currentIndex]}
                </motion.p>
            </AnimatePresence>
        </div>
    )
}
