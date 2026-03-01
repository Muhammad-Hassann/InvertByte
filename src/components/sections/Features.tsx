import React from "react";
import {
  BarChart3,
  LineChart,
  MessageSquare,
  Send,
  Lightbulb,
  PackageSearch,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const features = [
  {
    icon: BarChart3,
    title: "AI Product Insights",
    description:
      "Deep analytics on product performance, demand trends, and competitive positioning.",
  },
  {
    icon: LineChart,
    title: "Revenue & Conversion Analytics",
    description:
      "Track revenue funnels, conversion rates, and identify optimization opportunities.",
  },
  {
    icon: MessageSquare,
    title: "Smart Customer Q&A Bot",
    description:
      "An AI chatbot trained on your store data that answers customer questions instantly.",
  },
  {
    icon: Send,
    title: "WhatsApp & Website Deployment",
    description:
      "Deploy your chatbot to WhatsApp and embed it on your storefront in one click.",
  },
  {
    icon: Lightbulb,
    title: "Automated Recommendations",
    description:
      "AI-generated product recommendations based on customer behavior and purchase patterns.",
  },
  {
    icon: PackageSearch,
    title: "Product-focused Intelligence",
    description:
      "Understand which products drive growth and which need attention with AI analysis.",
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="text-sm text-primary font-medium mb-3">Features</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Everything you need to scale smarter
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="group">
              <CardHeader>
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>

                <CardTitle className="font-display">{f.title}</CardTitle>

                <CardDescription className="leading-relaxed">
                  {f.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
