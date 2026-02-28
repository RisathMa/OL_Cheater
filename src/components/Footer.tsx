import { MapPin, Mail, Phone, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Emblem */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/sri-lanka-emblem.png"
              alt="Emblem of Sri Lanka"
              className="h-36 w-auto"
            />
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-destructive mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-destructive shrink-0" />
                <span>Department of Examinations Sri Lanka, Pelawatta, Battaramulla, Sri Lanka.</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-destructive shrink-0" />
                <span>E-Mail : exams@doenets.lk</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-destructive shrink-0" />
                <span>Hotline : 1911</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-destructive shrink-0" />
                <span>Telephone Number : +94 11 2786200, +94 11 2784203-4</span>
              </li>
            </ul>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h3 className="text-lg font-bold text-footer-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-destructive transition-colors">School Exam Results</a></li>
              <li><a href="#" className="hover:text-destructive transition-colors">Exam Calendar</a></li>
              <li><a href="#" className="hover:text-destructive transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="text-lg font-bold text-footer-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-destructive transition-colors">Downloads</a></li>
              <li><a href="#" className="hover:text-destructive transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-destructive transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-foreground/20 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-footer-foreground/70">
          <div className="flex items-center gap-2">
            <span>Developed By</span>
            <span className="font-bold text-destructive text-sm">INOVA</span>
          </div>
          <p>Copyright © {new Date().getFullYear()} - Department of Examinations, Sri Lanka. All Rights Reserved</p>
          <div className="flex items-center gap-2">
            <span>Powered By</span>
            <span className="font-bold text-primary text-sm">Dialog</span>
            <span className="font-bold text-destructive text-sm">headstart</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
