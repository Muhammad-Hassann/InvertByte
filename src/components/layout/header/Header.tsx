"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  return (
    <Container>
    <nav className=" fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-300! mx-auto container-tight flex items-center justify-between h-16">
        <Link href="/" className="font-display text-xl font-bold text-foreground tracking-tight">
          Invert<span className="gradient-text">Byte</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
            <Button onClick={() => router.push("/protected")} variant="outline" size="sm">Login</Button>
            <Button onClick={() => router.push("/protected")} variant="secondary" size="sm">Get Started</Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-tight py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Button onClick={() => router.push("/protected")} variant="outline" size="sm">Login</Button>
              <Button onClick={() => router.push("/protected")} variant="secondary" size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
    </Container>
  );
};

export default Header;
