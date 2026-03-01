"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { redirect } from "next/navigation";

const Hero = () => {
  return (
    <Container>
    <section className=" relative section-padding pt-32 md:pt-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full gradient-bg" />
              Now available for Shopify stores
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
              Turn Your Online Store Into an AI-Powered{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Sales Machine</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5.5C40 2 80 2 120 4C160 6 180 3 198 3"
                    stroke="hsl(190,90%,50%)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="gradient-text">.</span>
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Connect your store, unlock AI product insights, and deploy a smart
              chatbot to WhatsApp and your website.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => redirect("/protected")} variant="secondary" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
          </div>

          {/* Right mock dashboard */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
};

const DashboardMock = () => (
  <div className="rounded-2xl border border-border bg-card p-4 glow-border">
    {/* Top bar */}
    <div className="flex items-center gap-2 mb-4">
      <div className="h-3 w-3 rounded-full bg-destructive/60" />
      <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
      <div className="h-3 w-3 rounded-full bg-green-500/60" />
      <div className="flex-1 mx-4 h-6 rounded-lg bg-muted" />
    </div>

    <div className="grid grid-cols-3 gap-3 mb-4">
      {[
        { label: "Revenue", value: "$24,580", change: "+12.5%" },
        { label: "Orders", value: "1,284", change: "+8.2%" },
        { label: "Conversion", value: "3.8%", change: "+0.4%" },
      ].map((stat) => (
        <div key={stat.label} className="rounded-xl bg-muted/50 p-3">
          <p className="text-[10px] text-muted-foreground">{stat.label}</p>
          <p className="font-display font-bold text-sm text-foreground">{stat.value}</p>
          <p className="text-[10px] text-primary">{stat.change}</p>
        </div>
      ))}
    </div>

    {/* Chart mock */}
    <div className="rounded-xl bg-muted/30 p-3 mb-4">
      <div className="flex items-end gap-1 h-20">
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t gradient-bg opacity-60"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>

    {/* Chat preview */}
    <div className="rounded-xl bg-muted/30 p-3">
      <p className="text-[10px] text-muted-foreground mb-2 font-display font-semibold">AI Chat</p>
      <div className="space-y-2">
        <div className="ml-auto w-3/4 rounded-xl rounded-br-sm bg-primary/20 p-2">
          <p className="text-[10px] text-foreground">What are my best-selling products?</p>
        </div>
        <div className="w-3/4 rounded-xl rounded-bl-sm bg-muted p-2">
          <p className="text-[10px] text-muted-foreground">
            Your top 3: Premium Hoodie ($4,200), Classic Tee ($3,800), Denim Jacket ($2,900)
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;

