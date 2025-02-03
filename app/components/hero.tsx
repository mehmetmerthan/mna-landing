import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:hidden mb-8 order-first">
            <Image
              src="/mna-hero.png"
              alt="MNA DEFI Logo"
              width={150}
              height={150}
              className="mx-auto"
              style={{ borderRadius: "12px" }}
            />
          </div>
          <div className="md:max-w-xl lg:max-w-2xl text-center md:text-left order-last md:order-none">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to MNA DEFI
            </h1>
            <p className="mt-6 text-xl max-w-3xl">
              Discover the World's first crypto-based Company Acquisition
              platform.
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start">
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
              <span className="ml-4 text-sm font-medium text-blue-100">
                coming soon
              </span>
            </div>
          </div>
          <div className="hidden md:block md:ml-8 lg:ml-16 order-last">
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
