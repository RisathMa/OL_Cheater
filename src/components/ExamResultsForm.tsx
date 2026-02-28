import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const exams = [
  "G.C.E. (A/L) EXAMINATION-(After Rescrutiny)",
  "G.C.E (O/L) Examination (After Rescrutiny)",
  "GRADE 5 SCHOLARSHIP EXAMINATION (After Appeals)",
];

const years = ["2024", "2023", "2022", "2021", "2020", "2019"];

const indexTypes = ["Index", "NIC"];

const ExamResultsForm = () => {
  const [selectedExam, setSelectedExam] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedIndex, setSelectedIndex] = useState("Index");
  const [searchValue, setSearchValue] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only
    alert("This is a demo clone. Form submission is not connected to a real backend.");
  };

  const handleReset = () => {
    setSelectedExam("");
    setSelectedYear("");
    setSelectedIndex("Index");
    setSearchValue("");
    setCaptchaVerified(false);
  };

  return (
    <section className="bg-secondary py-8 px-4">
      <div className="max-w-5xl mx-auto bg-card rounded shadow-sm border border-border p-6">
        {/* Title */}
        <h1 className="text-center text-xl font-bold text-foreground mb-6 tracking-wide">
          FIND YOUR EXAM RESULTS HERE
        </h1>

        {/* Red notice */}
        <div className="border-2 border-notice bg-notice/10 rounded p-4 mb-4">
          <p className="text-xs text-center text-foreground leading-relaxed mb-2">
            විභාග ප්‍රතිඵල ශ්‍රී ලංකා රජය සතු දේපලක් වන අතර, නිසි අවසරයකින් තොරව අයදුම්කරුගේ නොවන ප්‍රතිඵල උපුටා ගැනීම, ළඟ තබා ගැනීම, වෙබ් අඩවියක හෝ සමාජ මාධ්‍ය ජාලවල පල කිරීම හෝ වෙනත් ආකාරයකින් ප්‍රසිද්ධ කිරීම සපුරා තහනම් වන අතර, දඬුවම් ලැබිය හැකි වරදකි.
          </p>
          <p className="text-[10px] text-center text-foreground uppercase tracking-wider leading-relaxed mb-2">
            Examination results are the property of the Government of Sri Lanka, and copying, keeping, posting on a website or social media networks or otherwise publicizing the results which are not belong to the candidate without proper permission is strictly prohibited and is a punishable offence.
          </p>
          <p className="text-xs text-center text-foreground leading-relaxed">
            பரீட்சைப் பெறுபேறுகள் இலங்கை அரசாங்கத்தின் சொத்தாகும். உரிய அனுமதியின்றி பரீட்சார்த்திகளுக்கு உரியதல்லாத பெறுபேறுகளை பிரதிசெய்தல், தம்வசம் வைத்திருத்தல், இணையத்தளமொன்றிற்குள்ளோ அல்லது சமூக வலைத்தளங்களிலோ பதிவேற்றம் செய்தல் முற்றாகத் தடைசெய்யப்பட்டுள்ளதுடன் தண்டனைக்குரிய குற்றமுமாகும்.
          </p>
        </div>

        {/* Yellow certificate notice */}
        <div className="bg-warning text-warning-foreground rounded p-4 mb-6">
          <p className="text-xs text-center leading-relaxed mb-1">
            ඔබගේ සහතිකපත්‍රය මාර්ගගතව ලබා ගැනීම සඳහා{" "}
            <code className="bg-foreground/10 px-1 rounded text-xs">www.doenets.lk</code>{" "}
            ඔස්සේ විභාග දෙපාර්තමේන්තු නිල වෙබ් අඩවිය වෙත ගොස් "Online Certificate (G.C.E (O/L) and G.C.E (A/L))" වෙත පිවිසෙන්න.
          </p>
          <p className="text-[10px] text-center uppercase tracking-wider leading-relaxed mb-1">
            To obtain your certificate online, kindly visit the official website of the Department of Examinations via{" "}
            <code className="bg-foreground/10 px-1 rounded text-[10px]">www.doenets.lk</code>{" "}
            and then click on "Online Certificate (G.C.E. (O/L) and G.C.E. (A/L))".
          </p>
          <p className="text-xs text-center leading-relaxed">
            உங்கள் பரீட்சைச் சான்றிதழை நிகழ்நிலையில் பெற்றுக்கொள்ள{" "}
            <code className="bg-foreground/10 px-1 rounded text-xs">www.doenets.lk</code>{" "}
            ஊடாக இலங்கைப் பரீட்சைத் திணைக்களத்தின் உத்தியோகபூர்வ இணையத்தளமான "Online Certificate (G.C.E. (O/L) and G.C.E. (A/L))" இற்குப் பிரவேசிக்கவும்.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dropdowns row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="border border-input rounded px-3 py-2.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <option value="">Select the Exam</option>
              {exams.map((exam) => (
                <option key={exam} value={exam}>{exam}</option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-input rounded px-3 py-2.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <option value="">Select the year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>

            <select
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(e.target.value)}
              className="border border-input rounded px-3 py-2.5 text-sm bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            >
              {indexTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search By ..."
              className="border border-input rounded px-3 py-2.5 text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>

          {/* Captcha placeholder */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setCaptchaVerified(!captchaVerified)}
              className="flex items-center gap-3 border border-input rounded px-6 py-4 bg-card hover:bg-muted transition-colors"
            >
              <div
                className={`w-7 h-7 rounded border-2 flex items-center justify-center transition-colors ${
                  captchaVerified
                    ? "bg-primary border-primary"
                    : "border-input bg-card"
                }`}
              >
                {captchaVerified && (
                  <CheckCircle className="w-5 h-5 text-primary-foreground" />
                )}
              </div>
              <span className="text-sm text-foreground">I am human</span>
              <div className="ml-4 text-xs text-muted-foreground">
                <div className="font-medium">hCaptcha</div>
                <div className="text-[10px]">Privacy - Terms</div>
              </div>
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              type="submit"
              className="px-16 py-2.5 bg-submit text-submit-foreground hover:opacity-90 rounded font-medium"
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={handleReset}
              className="px-16 py-2.5 bg-reset text-reset-foreground hover:opacity-90 rounded font-medium"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>

      {/* Bottom actions */}
      <div className="max-w-5xl mx-auto flex justify-end gap-3 mt-4">
        <button className="border border-input rounded px-4 py-1.5 text-sm text-foreground bg-card hover:bg-muted transition-colors">
          Print
        </button>
        <button className="border border-primary rounded px-4 py-1.5 text-sm text-primary bg-card hover:bg-primary/5 transition-colors">
          Other Examination Results
        </button>
      </div>
    </section>
  );
};

export default ExamResultsForm;
