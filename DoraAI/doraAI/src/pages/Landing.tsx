import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Logo section */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 backdrop-blur-sm flex items-center justify-center shadow-2xl">
            {/* Placeholder for your custom logo image */}
            <img 
              src={Logo}
              alt="Logo" 
              className="rounded-full object-contain"
            />
            <div className="text-white font-bold text-lg hidden">DoraAI</div>
          </div>
        </div>

        {/* Badge */}
        <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none px-4 py-2 text-sm font-medium">
          ✨ Welcome to the Future
        </Badge>

        {/* Hero text */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6 leading-tight">
            Explore the
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              World
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Turn imagination into visuals with DoraAI — your creative partner for generating stunning AI-powered content. Join thousands already exploring the future.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link to='/signup'>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              Signup
            </Button>
          </Link>
          <Link to='login'>
            <Button 
              size="lg" 
              className="border-white/20 text-white  px-8 py-4 text-lg font-semibold backdrop-blur-sm cursor-pointer"
            >
              Login
            </Button>
          </Link>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Built for speed and performance that scales with your needs.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Secure & Reliable</h3>
              <p className="text-gray-400">Enterprise-grade security with 99.9% uptime guarantee.</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Made with Love</h3>
              <p className="text-gray-400">Crafted with attention to detail and user experience in mind.</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50M+</div>
            <div className="text-gray-400">Projects Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}