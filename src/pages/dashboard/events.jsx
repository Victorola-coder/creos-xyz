import Button from "../../components/button";
import { SearchIcon } from "../../components/svgs";

export default function DashboardEvents() {

    return (
        <div>
            <header className="flex justify-between items-center gap-5">
                <h1 className="text-[36px] font-bold text-primary">
                    Event Dashboard
                </h1>
                <div className="w-full px-[20px] max-w-[576px] h-[62px] rounded-[100px] border-[1px] border-primary flex gap-2 items-center">
                    <input
                        className="outline-none flex-1 placeholder-primary bg-transparent text-[20px] font-medium caret-primary"
                        placeholder="Search Events"
                    />
                    <SearchIcon />
                </div>
                <Button className="w-[229px] bg-primary text-white">
                    Create Events
                </Button>
            </header>
        </div>
    )
}