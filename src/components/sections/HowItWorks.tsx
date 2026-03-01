import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { ShoppingBag, Brain, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ShoppingBag,
    title: "Connect Shopify",
    description:
      "Link your Shopify store in one click. We securely sync your products, orders, and customer data.",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Analyzes Your Store",
    description:
      "Our AI engine processes your data to generate actionable insights, trends, and recommendations.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Deploy Chatbot Everywhere",
    description:
      "Launch your trained AI chatbot on WhatsApp and your website to engage customers 24/7.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="text-sm text-primary font-medium mb-3">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Up and running in minutes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <Card key={s.step} className="relative group">
              {/* Step Number */}
              <span className="absolute top-4 right-4 font-display text-4xl font-bold text-border group-hover:text-primary/20 transition-colors">
                {s.step}
              </span>

              <CardHeader>
                {/* Icon */}
                <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center mb-5">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>

                {/* Title */}
                <CardTitle className="font-display text-lg">
                  {s.title}
                </CardTitle>

                {/* Description */}
                <CardDescription className="leading-relaxed">
                  {s.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
