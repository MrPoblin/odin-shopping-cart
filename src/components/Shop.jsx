import NavBar from "./NavBar";
import ShopItems from "./ShopItems";

export default function Shop(){

    return(
        <div className="h-full">
            <NavBar></NavBar>
            <div className="bg-background h-full flex justify-center">
                <div className="w-full max-w-6xl bg-accent h-full flex flex-col items-center">
                    <h1 className="text-primary pt-6 text-3xl font-semibold">Items</h1>
                    <div className="flex justify-center gap-6 p-6 flex-wrap">
                        <ShopItems />
                    </div>
                </div>
            </div>
        </div>
    );
}