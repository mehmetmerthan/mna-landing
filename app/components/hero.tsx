import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to MNA DEFI
            </h1>
            <p className="mt-6 text-xl max-w-3xl">
              Discover the World's first crypto-based Company Acquisition
              platform.
            </p>
            <div className="mt-10 flex items-center">
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
              <span className="ml-4 text-sm font-medium text-blue-100">
                coming soon
              </span>
            </div>
          </div>
          <div className="block md:hidden">
            <Image
              src="/placeholder-logo.png"
              alt="MNA DEFI Logo"
              width={50}
              height={50}
              className="w-auto h-auto"
              style={{ borderRadius: "12px" }}
            />
          </div>
          <div className="hidden md:block">
            <Image
              src="/mna-hero.png"
              alt="MNA DEFI Logo"
              width={200}
              height={200}
              className="w-auto h-auto"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
