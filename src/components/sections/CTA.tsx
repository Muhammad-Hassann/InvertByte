"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="relative rounded-2xl border border-border bg-card p-10 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[400px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 max-w-2xl mx-auto leading-tight">
              Let AI Handle Your Store Intelligence & Customer Questions.
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start for free. No credit card required. Set up in under 5 minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              {/* <SiteInput placeholder="Enter your email" type="email" /> */}
              <Button onClick={() => redirect("/protected")} variant="secondary" size="lg" className="shrink-0 w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
