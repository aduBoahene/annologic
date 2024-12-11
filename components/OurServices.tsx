import { Activity, Brain, BrainCircuit, Database, Eye, Layers, LucideProps, MessageSquare, Repeat, ShieldAlert, TrendingUp } from "lucide-react";
import { title } from "process";

export function OurServices() {

    const services = [
        { title: "Generative AI", icon: Brain }, // Represents AI and cognitive processes
        { title: "Data Annotation", icon: Layers }, // Layers for organizing and labeling data
        { title: "Sentiment Analysis", icon: MessageSquare }, // Message for analyzing text sentiments
        { title: "Computer Vision", icon: Eye }, // Eye symbolizing vision and image processing
        { title: "Predictive Analytics", icon: Activity }, // Activity for predicting trends
        { title: "Fraud Detection", icon: ShieldAlert }, // Shield for protection/security
        { title: "Churn Prediction", icon: Repeat }, // Repeat symbolizing customer retention cycles
        { title: "Demand Forecasting", icon: TrendingUp }, // Upward trend for forecasting growth
        { title: "Data Warehousing", icon: Database }, // Database representing data storage
      ];
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 md:w-[80%] md:mx-auto md:mt-12">
      {services.map(item=> <ServiceCard title={item.title} icon={item.icon} />
)}
    </div>
  );
}

interface ServiceCardProps {
    title: string;
    icon: React.ComponentType<LucideProps>;
  }

  function ServiceCard({ title, icon: Icon }: ServiceCardProps) {
    return (
      <div className="border border-2 p-4 transition-colors duration-300 hover:bg-purple-600 hover:border-purple-600 group">
        <Icon className="transition-colors duration-300 group-hover:text-white" size="30" />
        <div className="mt-2">
          <h4 className="text-2xl font-bold transition-colors duration-300 group-hover:text-white" style={{fontFamily:"Montserrat-Light"}}>
            {title}
          </h4>
        </div>
      </div>
    );
  }
  