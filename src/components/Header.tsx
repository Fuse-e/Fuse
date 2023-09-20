import Link from "next/link";
import ThemeButton from "./ThemeButton";

export function Header() {
    return (
        <main>
            <div className="h-9 bg-stone-950 bg-opacity-90">
                <div className="flex justify-center text-center space-x-5 p-1">
                    <div className="text-white font-semibold md:text-left left-0"><Link href="/">Flame⚡</Link></div>
                    <div className="text-center text-white"><Link href="/">Home</Link></div>
                    <div className="text-center text-orange-500 font-normal ">Dev</div>
                    <div className="text-center text-orange-500  font-normal ">Browse</div>
                    <div className="text-center text-orange-500 font-normal "><Link href="/">Profile</Link></div>
                </div>
            </div>
            <ThemeButton />

        </main>
    )
}