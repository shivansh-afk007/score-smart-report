
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CreditCard, TrendingUp, FileText, Users, DollarSign, ChartBar } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isReportVisible, setIsReportVisible] = useState(false);

  const features = [
    {
      icon: CreditCard,
      title: "Instant Credit Score Prediction",
      description: "Get your predicted credit score in seconds using our advanced AI algorithms"
    },
    {
      icon: FileText,
      title: "Comprehensive Financial Report",
      description: "Detailed analysis of your financial health with actionable insights"
    },
    {
      icon: TrendingUp,
      title: "Score Improvement Tips",
      description: "Personalized recommendations to boost your credit score"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "CreditWise helped me understand my credit profile and secure a business loan at the best rate possible."
    },
    {
      name: "Michael Chen",
      role: "First-time Home Buyer",
      content: "The financial report was incredibly detailed and helped me prepare for my mortgage application."
    },
    {
      name: "Emma Davis",
      role: "Financial Advisor",
      content: "I recommend CreditWise to all my clients. The accuracy and insights are exceptional."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">CreditWise</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#report" className="text-gray-700 hover:text-blue-600 transition-colors">Sample Report</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            </nav>
            <Button variant="outline" className="hidden md:block">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                AI-Powered Credit Analysis
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Predict Your Credit Score & 
                <span className="text-blue-600"> Unlock Better Loans</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get instant credit score predictions and comprehensive financial reports to secure the best loan rates and improve your financial future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => setIsReportVisible(!isReportVisible)}
                >
                  Get Free Credit Report
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Watch Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>50,000+ users trust us</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <span>95% accuracy rate</span>
                </div>
              </div>
            </div>
            
            {/* Credit Score Preview */}
            <div className="relative">
              <Card className="bg-white shadow-2xl border-0">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-gray-800">Your Predicted Credit Score</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                      <div className="text-4xl font-bold text-white">742</div>
                    </div>
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800">
                      Excellent
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Approval Probability</span>
                      <span className="text-sm font-semibold">94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Est. Interest Rate</span>
                      <span className="text-sm font-semibold text-green-600">3.2% - 4.1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Credit Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced AI technology provides accurate credit predictions and detailed financial insights to help you make informed decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Financial Report Section */}
      {isReportVisible && (
        <section id="report" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Sample Financial Report
              </h2>
              <p className="text-xl text-gray-600">
                See what insights you'll receive in your personalized financial analysis
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Credit Score Breakdown */}
              <Card className="bg-white shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ChartBar className="h-5 w-5 mr-2 text-blue-600" />
                    Credit Score Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Payment History (35%)</span>
                      <span className="text-sm font-semibold text-green-600">Excellent</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Credit Utilization (30%)</span>
                      <span className="text-sm font-semibold text-yellow-600">Good</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Credit History Length (15%)</span>
                      <span className="text-sm font-semibold text-green-600">Excellent</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Credit Mix (10%)</span>
                      <span className="text-sm font-semibold text-blue-600">Very Good</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">New Credit (10%)</span>
                      <span className="text-sm font-semibold text-green-600">Excellent</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Financial Recommendations */}
              <Card className="bg-white shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                    Improvement Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-900 mb-2">Priority Action</h4>
                    <p className="text-sm text-blue-800">
                      Reduce credit utilization to below 30% to potentially increase your score by 15-25 points.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-900 mb-2">Good Practice</h4>
                    <p className="text-sm text-green-800">
                      Continue making on-time payments. Your payment history is excellent and positively impacts your score.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-900 mb-2">Consider</h4>
                    <p className="text-sm text-yellow-800">
                      Keep old credit accounts open to maintain your credit history length.
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Potential Score Increase</span>
                      <span className="text-lg font-bold text-green-600">+20-35 points</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      Following our recommendations within 3-6 months
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about their experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Improve Your Credit Score?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your free credit report and personalized recommendations today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Start Free Analysis
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No credit card required • Secure & confidential • Instant results
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <CreditCard className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">CreditWise</span>
              </div>
              <p className="text-gray-400">
                Empowering financial decisions through accurate credit predictions and comprehensive analysis.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Credit Score Prediction</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Loan Matching</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Credit Monitoring</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CreditWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
