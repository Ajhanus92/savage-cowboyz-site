
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen p-4 font-mono">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Savage Cowboyz</h1>
        <Button variant="outline">Connect Wallet</Button>
      </header>

      <section className="text-center mb-8">
        <h2 className="text-3xl font-extrabold mb-2">Fuel the Future. Live the Legend.</h2>
        <p className="text-lg text-gray-400">
          Energy. Crypto. Culture. Welcome to the Savage Cowboyz tribe.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Button>Shop Energy Drinks</Button>
          <Button variant="secondary">Join the Tribe</Button>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-bold mb-4">Our Drinks</h3>
        <div className="grid grid-cols-2 gap-4">
          {['Savage Original', 'Midnight Rodeo', 'Electric Prairie', 'Special Edition'].map((flavor, i) => (
            <Card key={i} className="p-4 bg-gray-900">
              <p className="font-bold text-lg">{flavor}</p>
              <p className="text-sm text-gray-400">High energy, low crash.</p>
              <Button className="mt-2 w-full">Buy Now</Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">$COWBOYZ Token</h3>
        <p className="text-gray-400 mb-2">Earn tokens every time you sip or shop.</p>
        <Button variant="secondary">View Tokenomics</Button>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-bold mb-2">NFT Memberships</h3>
        <p className="text-gray-400 mb-2">Mint your cowboy. Unlock perks.</p>
        <Button>Mint an NFT</Button>
      </section>

      <footer className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 Savage Cowboyz. All rights reserved.
      </footer>
    </main>
  );
}
