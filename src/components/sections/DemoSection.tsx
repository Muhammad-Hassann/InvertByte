import React from "react";

const DemoSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <div className="text-center mb-14">
          <p className="text-sm text-primary font-medium mb-3">Preview</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            A smarter dashboard for your store
          </h2>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 glow-border max-w-4xl mx-auto">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
            <div className="flex-1 mx-4 h-7 rounded-lg bg-muted flex items-center px-3">
              <span className="text-[10px] text-muted-foreground">app.storeai.com/dashboard</span>
            </div>
          </div>

          {/* Sidebar + main */}
          <div className="grid grid-cols-[200px_1fr] gap-4">
            {/* Sidebar */}
            <div className="rounded-xl bg-muted/30 p-4 space-y-3">
              <div className="font-display text-sm font-bold text-foreground mb-4">
                Store<span className="gradient-text">AI</span>
              </div>
              {["Dashboard", "Products", "Analytics", "Chatbot", "Settings"].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`rounded-lg px-3 py-2 text-xs ${
                      i === 0
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            {/* Main */}
            <div className="space-y-4">
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { label: "Total Revenue", value: "$142,580" },
                  { label: "Orders Today", value: "284" },
                  { label: "Conversion Rate", value: "4.2%" },
                  { label: "Active Chats", value: "37" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-muted/40 p-3">
                    <p className="text-[9px] text-muted-foreground mb-1">{s.label}</p>
                    <p className="font-display font-bold text-sm text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Chart + AI insights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-muted/20 p-4">
                  <p className="text-[10px] text-muted-foreground font-medium mb-3">Revenue Trend</p>
                  <div className="flex items-end gap-1.5 h-24">
                    {[30, 50, 45, 70, 55, 80, 65, 90, 75, 95, 85, 100].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t gradient-bg opacity-50"
                          style={{ height: `${h}%` }}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-xl bg-muted/20 p-4">
                  <p className="text-[10px] text-muted-foreground font-medium mb-3">AI Insights</p>
                  <div className="space-y-2">
                    {[
                      "Premium Hoodie demand up 23% this week",
                      "Recommend restocking Classic Tee — low inventory",
                      "WhatsApp bot resolved 89% of queries",
                    ].map((insight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full gradient-bg shrink-0" />
                        <p className="text-[10px] text-muted-foreground leading-snug">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
