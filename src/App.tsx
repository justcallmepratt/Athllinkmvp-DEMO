import { useState } from 'react';
import { AthleteOnboarding } from './components/AthleteOnboarding';
import { AthleteApp } from './components/AthleteApp';
import { AthletePayment } from './components/AthletePayment';
import { RecruiterApp } from './components/RecruiterApp';
import { RecruiterSignup } from './components/RecruiterSignup';
import { Button } from './components/ui/button';
import { Rocket, Users, TrendingUp, Globe, Check, Star, Video, Shield, MessageSquare, Award, Target, Clock, DollarSign, BookOpen, BarChart, Zap, Heart, MapPin, ChevronDown, Eye, Scan, Sparkles } from 'lucide-react';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { School } from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'select' | 'athlete-onboarding' | 'athlete-payment' | 'athlete-app' | 'recruiter-signup' | 'recruiter-app'>('select');
  const [athleteProfile, setAthleteProfile] = useState<any>(null);

  const handleAthleteOnboardingComplete = (profile: any) => {
    setAthleteProfile(profile);
    setView('athlete-app');
  };

  const handleAthletePaymentComplete = () => {
    setView('athlete-app');
  };

  const handleRecruiterComplete = () => {
    setView('recruiter-app');
  };

  if (view === 'select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2196F3] via-[#1976D2] to-[#0D47A1]">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF5722] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10 blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-16">
            {/* Logo & Navigation */}
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-3">
                <div className="bg-[#FF5722] p-3 rounded-2xl">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-white">Athlink</h2>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="text-white space-y-6">
                <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  Connecting Athletes Worldwide
                </Badge>
                <h1 className="text-5xl md:text-6xl leading-tight">
                  Launch Your
                  <span className="block text-[#FF5722]">Athletic Career</span>
                </h1>
                <p className="text-xl text-gray-100 max-w-lg">
                  Connect with NCAA recruiters worldwide. Showcase your talent, get discovered, and take your game to the next level.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <p className="text-3xl text-[#FF5722]">150+</p>
                    <p className="text-sm text-gray-200">Universities</p>
                  </div>
                  <div>
                    <p className="text-3xl text-[#FF5722]">12K+</p>
                    <p className="text-sm text-gray-200">Athletes</p>
                  </div>
                  <div>
                    <p className="text-3xl text-[#FF5722]">89%</p>
                    <p className="text-sm text-gray-200">Match Rate</p>
                  </div>
                </div>
              </div>

              {/* CTA Cards */}
              <div className="space-y-6">
                <Card className="p-8 rounded-3xl bg-white/95 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[#FF5722] to-[#F4511E] p-4 rounded-2xl">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-[#2196F3]">For Athletes</h3>
                        <Badge className="bg-green-500 text-white">100% Free</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#FF5722] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">Create professional athletic profile</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#FF5722] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">Upload unlimited highlight videos</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#FF5722] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">Connect with NCAA coaches</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#FF5722] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">AI-powered college matching</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => setView('athlete-onboarding')}
                    className="w-full h-14 bg-gradient-to-r from-[#FF5722] to-[#F4511E] hover:from-[#F4511E] hover:to-[#E64A19] text-white rounded-xl shadow-lg"
                  >
                    Get Started Free
                  </Button>
                </Card>

                <Card className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2196F3] to-[#1976D2] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <School className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-[#2196F3] mb-4">For Coaches & Recruiters</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">AI/AR verified measurements</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">SportsRadar verified statistics</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">Direct messaging with athletes</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">Integrated Zoom video calls</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-gray-700">Transfer Portal add-on available</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => setView('recruiter-signup')}
                    className="w-full h-14 bg-gradient-to-r from-[#2196F3] to-[#1976D2] hover:from-[#1976D2] hover:to-[#1565C0] text-white rounded-xl shadow-lg"
                  >
                    Join as Coach
                  </Button>
                </Card>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="text-center text-white">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-[#FF5722]" />
                </div>
                <h4 className="text-white mb-2">Global Reach</h4>
                <p className="text-gray-200 text-sm">Connect with universities across the United States and beyond</p>
              </div>
              <div className="text-center text-white">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[#FF5722]" />
                </div>
                <h4 className="text-white mb-2">Smart Matching</h4>
                <p className="text-gray-200 text-sm">AI-powered system matches athletes with the right programs</p>
              </div>
              <div className="text-center text-white">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-[#FF5722]" />
                </div>
                <h4 className="text-white mb-2">Fast Results</h4>
                <p className="text-gray-200 text-sm">Get noticed by recruiters within days of creating your profile</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-[#2196F3]/10 text-[#2196F3] border-0 px-4 py-2 mb-4">
                Simple Process
              </Badge>
              <h2 className="text-[#2196F3] mb-4">How Athlink Works</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Get started in minutes and connect with your dream school in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 rounded-2xl border-2 border-[#2196F3]/20 hover:border-[#2196F3] transition-all hover:shadow-xl">
                <div className="bg-gradient-to-br from-[#2196F3] to-[#1976D2] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-xl">1</span>
                </div>
                <h3 className="text-[#2196F3] mb-3">Create Your Profile</h3>
                <p className="text-gray-600 mb-4">
                  Build a comprehensive athletic profile with your stats, highlight videos, academic records, and achievements in just minutes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Upload unlimited videos
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Add performance metrics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Showcase academic excellence
                  </li>
                </ul>
              </Card>

              <Card className="p-8 rounded-2xl border-2 border-[#FF5722]/20 hover:border-[#FF5722] transition-all hover:shadow-xl">
                <div className="bg-gradient-to-br from-[#FF5722] to-[#F4511E] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-xl">2</span>
                </div>
                <h3 className="text-[#2196F3] mb-3">Get Matched</h3>
                <p className="text-gray-600 mb-4">
                  Our AI-powered system analyzes your profile and matches you with NCAA programs that fit your skills, academics, and goals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Smart AI recommendations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Personalized fit scores
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Real-time opportunities
                  </li>
                </ul>
              </Card>

              <Card className="p-8 rounded-2xl border-2 border-[#2196F3]/20 hover:border-[#2196F3] transition-all hover:shadow-xl">
                <div className="bg-gradient-to-br from-[#2196F3] to-[#1976D2] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-xl">3</span>
                </div>
                <h3 className="text-[#2196F3] mb-3">Connect & Sign</h3>
                <p className="text-gray-600 mb-4">
                  Communicate directly with coaches, schedule visits, and receive scholarship offers through our secure messaging platform.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Direct coach messaging
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Virtual campus tours
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#FF5722] mr-2 flex-shrink-0" />
                    Scholarship tracking
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* AI/AR Technology Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Cutting-Edge Technology
              </Badge>
              <h2 className="text-[#2196F3] mb-4">AI/AR Verified Measurements</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                First platform to use artificial intelligence and augmented reality to verify athlete measurements and performance metrics
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Computer Vision */}
              <Card className="p-8 rounded-2xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-xl">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#2196F3] mb-2">AI Computer Vision</h3>
                    <p className="text-gray-600 text-sm">
                      Advanced machine learning analyzes video footage to verify athletic performance
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-800">Frame-by-frame movement analysis</p>
                      <p className="text-xs text-gray-500">AI evaluates technique, speed, and agility in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-800">Automatic stat calculation</p>
                      <p className="text-xs text-gray-500">Extracts performance metrics from game footage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-800">Fraud detection</p>
                      <p className="text-xs text-gray-500">Identifies manipulated or misleading videos</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-xl">
                  <p className="text-xs text-purple-900">
                    <strong>Trained on 500K+ athlete videos</strong> across all major sports
                  </p>
                </div>
              </Card>

              {/* AR Measurements */}
              <Card className="p-8 rounded-2xl shadow-xl border-2 border-blue-100 hover:border-blue-300 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl">
                    <Scan className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#2196F3] mb-2">AR Body Scanning</h3>
                    <p className="text-gray-600 text-sm">
                      Mobile augmented reality technology captures precise physical measurements
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-800">±0.5" accuracy guarantee</p>
                      <p className="text-xs text-gray-500">Height, wingspan, standing reach verified to NCAA standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-800">3D body mapping</p>
                      <p className="text-xs text-gray-500">Creates comprehensive physical profile using LiDAR technology</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-800">Instant verification</p>
                      <p className="text-xs text-gray-500">No need for expensive combine testing or in-person measurements</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-xs text-blue-900">
                    <strong>Works on any smartphone</strong> with AR capability (iOS 12+ / Android 9+)
                  </p>
                </div>
              </Card>
            </div>

            {/* SportsRadar Integration */}
            <Card className="p-8 rounded-2xl shadow-xl bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#2196F3] mb-1">SportsRadar API Integration</h3>
                    <p className="text-gray-600 text-sm">
                      Official partnership with SportsRadar for real-time verified statistics and performance data
                    </p>
                  </div>
                </div>
                <Badge className="bg-blue-600 text-white">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified Partner
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-3xl text-[#2196F3] mb-2">100%</div>
                  <p className="text-sm text-gray-700">Stat Verification Rate</p>
                  <p className="text-xs text-gray-500 mt-1">All stats cross-referenced with SportsRadar API database</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-3xl text-[#2196F3] mb-2">35K+</div>
                  <p className="text-sm text-gray-700">Data Sources</p>
                  <p className="text-xs text-gray-500 mt-1">Connected to SportsRadar's global sports network</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-3xl text-[#2196F3] mb-2">Real-time</div>
                  <p className="text-sm text-gray-700">Stat Updates</p>
                  <p className="text-xs text-gray-500 mt-1">Automatic sync with SportsRadar live game data</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/70 rounded-xl border border-blue-200">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    <strong>Why it matters:</strong> Coaches can trust that all statistics are verified by SportsRadar, the world's leading sports data and content provider. No more inflated stats or unverified claims – every number is backed by official game records and real-time API data from 35,000+ global sources.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Platform Features Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-[#FF5722]/10 text-[#FF5722] border-0 px-4 py-2 mb-4">
                Powerful Features
              </Badge>
              <h2 className="text-[#2196F3] mb-4">Everything You Need to Succeed</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive tools designed specifically for international student-athletes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="bg-[#2196F3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-[#2196F3]" />
                </div>
                <h4 className="text-[#2196F3] mb-2">Video Showcase</h4>
                <p className="text-sm text-gray-600">
                  Upload unlimited highlight reels, game footage, and training videos
                </p>
              </Card>

              <Card className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="bg-[#FF5722]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-[#FF5722]" />
                </div>
                <h4 className="text-[#2196F3] mb-2">Performance Analytics</h4>
                <p className="text-sm text-gray-600">
                  Track your stats and see how you compare to other athletes
                </p>
              </Card>

              <Card className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="bg-[#2196F3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-[#2196F3]" />
                </div>
                <h4 className="text-[#2196F3] mb-2">Direct Messaging</h4>
                <p className="text-sm text-gray-600">
                  Chat with coaches in real-time with multilingual support
                </p>
              </Card>

              <Card className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="bg-[#FF5722]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#FF5722]" />
                </div>
                <h4 className="text-[#2196F3] mb-2">NCAA Compliance</h4>
                <p className="text-sm text-gray-600">
                  Stay compliant with all NCAA recruiting regulations
                </p>
              </Card>

              <Card className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="bg-[#2196F3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#2196F3]" />
                </div>
                <h4 className="text-[#2196F3] mb-2">Smart Matching</h4>
                <p className="text-sm text-gray-600">
                  AI finds the best program fit based on your profile
                </p>
              </Card>

              <Card className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="bg-[#FF5722]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#FF5722]" />
                </div>
                <h4 className="text-[#2196F3] mb-2">Academic Support</h4>
                <p className="text-sm text-gray-600">
                  Guidance on test scores, transcripts, and eligibility
                </p>
              </Card>

              <Card className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="bg-[#2196F3]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#2196F3]" />
                </div>
                <h4 className="text-[#2196F3] mb-2">24/7 Access</h4>
                <p className="text-sm text-gray-600">
                  Manage your recruiting journey anytime, anywhere
                </p>
              </Card>

              <Card className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="bg-[#FF5722]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#FF5722]" />
                </div>
                <h4 className="text-[#2196F3] mb-2">Instant Notifications</h4>
                <p className="text-sm text-gray-600">
                  Get alerts when coaches view your profile or send messages
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-[#2196F3]/10 text-[#2196F3] border-0 px-4 py-2 mb-4">
                Success Stories
              </Badge>
              <h2 className="text-[#2196F3] mb-4">Athletes Living Their Dreams</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join thousands of international athletes who found their perfect college fit
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2196F3] to-[#1976D2] rounded-full flex items-center justify-center text-white text-xl">
                    LS
                  </div>
                  <div>
                    <p className="text-[#2196F3]">Lucas Senna</p>
                    <p className="text-sm text-gray-600">Soccer • Brazil → UCLA</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-[#FF5722] text-[#FF5722]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Athlink connected me with UCLA's coaching staff within 2 weeks. The platform made the entire recruiting process smooth and transparent. Now I'm playing Division I soccer!"
                </p>
                <Badge className="bg-green-500 text-white">Full Scholarship</Badge>
              </Card>

              <Card className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-full flex items-center justify-center text-white text-xl">
                    YT
                  </div>
                  <div>
                    <p className="text-[#2196F3]">Yuki Tanaka</p>
                    <p className="text-sm text-gray-600">Basketball • Japan → Stanford</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-[#FF5722] text-[#FF5722]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The AI matching system found Stanford for me - a perfect fit academically and athletically. The multilingual messaging feature helped me communicate confidently with coaches."
                </p>
                <Badge className="bg-green-500 text-white">Academic + Athletic Scholarship</Badge>
              </Card>

              <Card className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2196F3] to-[#1976D2] rounded-full flex items-center justify-center text-white text-xl">
                    AS
                  </div>
                  <div>
                    <p className="text-[#2196F3]">Ana Senna</p>
                    <p className="text-sm text-gray-600">Volleyball • Brazil → Penn State</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-[#FF5722] text-[#FF5722]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "I received 15 scholarship offers through Athlink! The platform's video showcase feature really helped coaches see my potential. Couldn't be happier at Penn State!"
                </p>
                <Badge className="bg-green-500 text-white">Multiple Offers</Badge>
              </Card>
            </div>
          </div>
        </div>

        {/* Sports Coverage Section */}
        <div className="bg-gradient-to-br from-[#2196F3] via-[#1976D2] to-[#0D47A1] py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 text-white border-0 px-4 py-2 mb-4">
                <Award className="w-4 h-4 mr-2" />
                All Sports Welcome
              </Badge>
              <h2 className="text-white mb-4">Representing 25+ Sports</h2>
              <p className="text-gray-100 text-lg max-w-2xl mx-auto">
                From soccer to swimming, we connect athletes across all NCAA sports
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                'Soccer', 'Basketball', 'Volleyball', 'Baseball', 'Track & Field',
                'Swimming', 'Tennis', 'Golf', 'Softball', 'Lacrosse',
                'Wrestling', 'Gymnastics', 'Cross Country', 'Rowing', 'Field Hockey'
              ].map((sport) => (
                <Card key={sport} className="p-4 rounded-xl text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                  <p className="text-white text-sm">{sport}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats & Impact Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-[#2196F3] mb-4">Making an Impact</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Real numbers from real athletes achieving their dreams
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#2196F3] to-[#1976D2] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl text-[#2196F3] mb-2">12,000+</p>
                <p className="text-gray-600">Active Athletes</p>
                <p className="text-sm text-gray-500 mt-2">From 89 countries</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-[#FF5722] to-[#F4511E] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <School className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl text-[#FF5722] mb-2">150+</p>
                <p className="text-gray-600">Partner Universities</p>
                <p className="text-sm text-gray-500 mt-2">Division I, II, III</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-[#2196F3] to-[#1976D2] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl text-[#2196F3] mb-2">$45M+</p>
                <p className="text-gray-600">Scholarships Awarded</p>
                <p className="text-sm text-gray-500 mt-2">In the last 2 years</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-[#FF5722] to-[#F4511E] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <p className="text-4xl text-[#FF5722] mb-2">89%</p>
                <p className="text-gray-600">Success Rate</p>
                <p className="text-sm text-gray-500 mt-2">Athletes placed in programs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Reach Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-[#FF5722]/10 text-[#FF5722] border-0 px-4 py-2 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Worldwide Network
              </Badge>
              <h2 className="text-[#2196F3] mb-4">Athletes From Around The Globe</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our platform connects talent from every corner of the world with opportunities in the United States
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { country: 'Brazil', flag: '🇧🇷', count: '3,200+' },
                { country: 'Japan', flag: '🇯🇵', count: '1,800+' },
                { country: 'Mexico', flag: '🇲🇽', count: '1,500+' },
                { country: 'Germany', flag: '🇩🇪', count: '1,200+' },
                { country: 'Canada', flag: '🇨🇦', count: '2,100+' },
                { country: 'Australia', flag: '🇦🇺', count: '900+' }
              ].map((item) => (
                <Card key={item.country} className="p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-3">{item.flag}</div>
                  <p className="text-[#2196F3] mb-1">{item.country}</p>
                  <p className="text-2xl text-[#FF5722] mb-1">{item.count}</p>
                  <p className="text-xs text-gray-500">Athletes</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-br from-[#2196F3] via-[#1976D2] to-[#0D47A1] py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-white text-4xl md:text-5xl mb-6">
              Ready to Launch Your Career?
            </h2>
            <p className="text-gray-100 text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of international athletes who are already connecting with NCAA programs. Your journey starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => setView('athlete-onboarding')}
                className="h-16 px-12 bg-[#FF5722] hover:bg-[#F4511E] text-white rounded-xl text-lg shadow-2xl"
              >
                <Rocket className="w-6 h-6 mr-2" />
                Get Started Free
              </Button>
              <Button
                onClick={() => setView('recruiter-signup')}
                variant="outline"
                className="h-16 px-12 bg-white hover:bg-gray-100 text-[#2196F3] rounded-xl text-lg border-2"
              >
                <School className="w-6 h-6 mr-2" />
                Join as Coach
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">100% Free for Athletes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span className="text-sm">Setup in 5 Minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (view === 'athlete-onboarding' && !athleteProfile) {
    return <AthleteOnboarding onComplete={handleAthleteOnboardingComplete} onBack={() => setView('select')} />;
  }

  if (view === 'athlete-payment') {
    return <AthletePayment onComplete={handleAthletePaymentComplete} onBack={() => setView('athlete-onboarding')} />;
  }

  if (view === 'athlete-app') {
    return <AthleteApp profile={athleteProfile} onBack={() => setView('select')} />;
  }

  if (view === 'recruiter-signup') {
    return <RecruiterSignup onComplete={handleRecruiterComplete} onBack={() => setView('select')} />;
  }

  if (view === 'recruiter-app') {
    return <RecruiterApp onBack={() => setView('select')} />;
  }

  return null;
}