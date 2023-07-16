"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cart = useCart();
    const router = useRouter();

    if (!isMounted) return null;

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")} className="bg-black flex items-center rounded-fyll px-4 py-2">
                <ShoppingBag 
                    size={24}
                    color="white" 
                />
                <span className="ml-2 text-sm font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
        </div>
    )
}

export default NavbarActions