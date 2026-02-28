const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/images/sri-lanka-emblem.png"
            alt="Emblem of Sri Lanka"
            className="h-12 w-auto opacity-70"
          />
          <div>
            <p className="text-sm font-medium">Department of Examinations</p>
            <p className="text-xs text-footer-foreground/70">Sri Lanka</p>
          </div>
        </div>
        <div className="text-center text-xs text-footer-foreground/70">
          <p>© {new Date().getFullYear()} Department of Examinations, Sri Lanka. All rights reserved.</p>
          <p className="mt-1">Designed & Developed by Information Technology Branch</p>
        </div>
        <div className="text-xs text-footer-foreground/70 text-right">
          <p>Call: 1911</p>
          <p>info@doenets.lk</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
