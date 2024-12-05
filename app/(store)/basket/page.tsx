"use client";

import useBasketStore from "@/lib/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BasketPage = () => {
  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (groupedItems.length === 0) {
    return (
      <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Your basket</h1>
        <p className="text-gray-600 text-lg">Your basket is empty</p>
      </div>
    );
  }

  console.log("Basket contents", groupedItems);

  return <div>BasketPage</div>;
};

export default BasketPage;
