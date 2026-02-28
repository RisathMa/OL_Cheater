import { Search } from "lucide-react";
import netsTriangle from "@/assets/nets-triangle.png";

const navItems = [
  { label: "Home", href: "#" },
  { label: "School Exam Results", href: "#" },
  { label: "Exam Calendar", href: "#" },
  { label: "Certificates / Verification of Results", href: "#" },
  { label: "Contact Us", href: "#" },
];

const Header = () => {
  return (
    <header>
      {/* Top Banner */}
      <div
        className="py-4 px-4"
        style={{
          background:
            "linear-gradient(135deg, hsl(340,60%,92%) 0%, hsl(0,0%,98%) 40%, hsl(220,60%,92%) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left emblem */}
          <img
            src="/images/sri-lanka-emblem.png"
            alt="Emblem of Sri Lanka"
            className="h-28 w-auto"
          />

          {/* Center title */}
          <div className="flex-1 text-center px-4">
            <p className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "'Noto Sans Sinhala', sans-serif" }}>
              ශ්‍රී ලංකා විභාග දෙපාර්තමේන්තුව
            </p>
            <p className="text-lg md:text-2xl font-bold text-foreground italic" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
              இலங்கைப் பரீட்சைத் திணைக்களம்
            </p>
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              Department of Examinations, Sri Lanka
            </p>
          </div>

          {/* Right - NETS triangle image */}
          <div className="hidden md:flex flex-col items-center">
            <img
              src={netsTriangle}
              alt="NETS - Curriculum, Assessment, Evaluation, Teaching, Learning"
              className="h-24 w-auto"
            />
            <div className="border-2 border-destructive px-4 py-0.5 mt-1">
              <span className="text-sm font-bold text-foreground tracking-wider">NETS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 flex-wrap gap-2">
          <ul className="flex items-center gap-1 flex-wrap">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="pl-8 pr-3 py-1.5 text-sm border border-input rounded bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div className="flex items-center gap-1 text-sm">
              <button className="px-2 py-1 text-muted-foreground hover:text-foreground">සිංහල</button>
              <button className="px-2 py-1 text-muted-foreground hover:text-foreground">தமிழ்</button>
              <button className="px-2 py-1 border border-foreground rounded text-xs font-medium text-foreground">
                English
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
