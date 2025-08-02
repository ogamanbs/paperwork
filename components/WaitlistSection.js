'use client'
import React, { useEffect, useState } from 'react';
import { Mail, User, Building, MapPin, X, Check } from 'lucide-react';
import axios from 'axios';

const WaitlistSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [firmName, setFirmName] = useState('');
  const [country, setCountry] = useState(''); 
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(response !== '') {
      setTimeout(() => {
        setResponse('');
      }, 10000);
    }
  },[response]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = {
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      firmName: firmName.toLowerCase(),
      country: country.toLowerCase()
    }
    
    try {
      const response = await axios.post('http://localhost:8000/users', user);
      // const response = await axios.post('http://localhost:8000/users', user);
      if(response) {
        const data = response.data;
        if(data) {
          console.log(data.message);
          setResponse(data.message);
        }
      }
    } catch(err) {
      setResponse('User failed to be added in the early access list');
      // console.error('Error uploading the data ', err.message);
    }

    setIsLoading(false);
    // after saving the data removing from the form
    setName('');
    setEmail('');
    setFirmName('');
    setCountry('');
  };

  if (response === 'successfully added to early access list') {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">You&#39;re on the list!</h2>
            <p className="text-slate-300 text-lg">
              Thank you for your interest. We&#39;ll notify you as soon as Paperwork is ready to transform your law firm operations.
            </p>
          </div>
        </div>
        <div className="mx-10 sm:mx-20 md:mx-30 lg:mx-50 mt-20 text-center text-slate-200">
          Facing challenges in your legal practice? We&#39;d love to hear from you. Share your insights at <a href="mailto:amansharmase100@gmail.com?subject=Paperwork - Feedback on Legal Ops&body=Hi, I'd like to share a few insights on the operational challenges we face at our law firm: " className="text-blue-400 cursor-pointer">amansharmase100@gmail.com</a> and help us build the future of law firm management.
        </div>
      </section>
    );
  }

  if (response === 'User failed to be added in the early access list') {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="w-10 h-10 text-white"/>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Sorry! Unable to put you on list</h2>
            <p className="text-slate-300 text-lg">
              Thank you for your interest. Please try again later, we are having some server issues. Sorry for the inconvenience.
            </p>
          </div>
        </div>
        <div className="mx-10 sm:mx-20 md:mx-30 lg:mx-50 mt-20 text-center text-slate-200">
          Facing challenges in your legal practice? We&#39;d love to hear from you. Share your insights at <a href="mailto:amansharmase100@gmail.com?subject=Paperwork - Feedback on Legal Ops&body=Hi, I'd like to share a few insights on the operational challenges we face at our law firm: " className="text-blue-400 cursor-pointer">amansharmase100@gmail.com</a> and help us build the future of law firm management.
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Early Access
          </h2>
          <p className="text-xl text-slate-300">
            Join the waitlist to be among the first to experience the future of legal operations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="firmName"
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
                placeholder="Law Firm Name"
                required
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                name="firmName"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
                required
                className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg hover:from-blue-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {isLoading ? 'Joining...' : 'Get Early Access'}
            </button>
          </div>
        </form>
      </div>
      <div className="mx-10 sm:mx-20 md:mx-30 lg:mx-50 mt-20 text-center text-slate-200">
        Facing challenges in your legal practice? We&#39;d love to hear from you. Share your insights at <a href="mailto:amansharmase100@gmail.com?subject=Paperwork - Feedback on Legal Ops&body=Hi, I'd like to share a few insights on the operational challenges we face at our law firm: " className="text-blue-400 cursor-pointer">amansharmase100@gmail.com</a> and help us build the future of law firm management.
      </div>
    </section>
  );
};

export default WaitlistSection;