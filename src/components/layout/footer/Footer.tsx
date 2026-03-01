const footerColumns = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "API Reference", "Community"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-foreground tracking-tight">
            Store<span className="gradient-text">AI</span>
          </span>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} StoreAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
