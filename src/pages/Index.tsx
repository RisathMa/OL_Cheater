import Header from "@/components/Header";
import ExamResultsForm from "@/components/ExamResultsForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ExamResultsForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
