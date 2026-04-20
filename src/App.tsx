/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  BookOpen, 
  Users, 
  Home, 
  Briefcase, 
  Gavel,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-navy-900' : 'text-navy-900'}`}>
            ΕΛΙΣΣΑΒΕΤ Κ. ΛΙΑΝΟΥ
          </span>
          <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${scrolled ? 'text-navy-800/60' : 'text-navy-900/60'}`}>
            Δικηγορικό Γραφείο • LLM
          </span>
        </div>
        
        <div className="hidden md:flex space-x-10 text-xs font-medium uppercase tracking-widest">
          {['Αρχική', 'Υπηρεσίες', 'Αξιολογήσεις', 'Επικοινωνία'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-gold-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="αρχική" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-900 pointer-events-none hidden lg:block" />
    
    <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center space-x-2 text-gold-500 mb-6">
          <div className="w-8 h-[1px] bg-gold-500" />
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold">Προσωπική Προσέγγιση</span>
        </div>
        
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-navy-900 mb-8">
          Πάντα <span className="italic text-navy-800/80">δίπλα</span> στον πελάτη.
        </h1>
        
        <p className="text-lg text-slate-600 max-w-lg mb-10 leading-relaxed">
          Με εξειδικευμένη γνώση στο Διοικητικό και Φορολογικό Δίκαιο, παρέχουμε 
          λύσεις που συνδυάζουν τη μεθοδικότητα με την ανθρώπινη προσέγγιση.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#επικοινωνία" className="bg-navy-900 text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-navy-800 transition-all text-center">
            Προγραμματισμός Ραντεβού
          </a>
          <a href="#υπηρεσίες" className="border border-navy-900 text-navy-900 px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-navy-900 hover:text-white transition-all text-center">
            Οι Υπηρεσίες μας
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden lg:flex justify-center items-center"
      >
        <div className="relative">
          <div className="w-[450px] h-[550px] border-[1px] border-white/20 absolute -top-10 -left-10 z-0" />
          <div className="w-[450px] h-[550px] bg-navy-800 flex flex-col justify-center p-16 relative z-10 shadow-2xl">
            <Scale className="text-gold-500 w-12 h-12 mb-8" />
            <h2 className="font-serif text-4xl text-white mb-6">Εξειδίκευση &<br/>Μεθοδικότητα</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              "Η νομική επιστήμη απαιτεί ψυχραιμία, ακρίβεια και βαθιά 
              κατανόηση των διοικητικών διαδικασιών."
            </p>
            <div className="mt-auto pt-8 border-t border-white/10">
              <span className="text-white text-sm font-serif">Ελισσάβετ Κ. Λιανού</span>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Lawyer LLM</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Διοικητικό Δίκαιο",
      desc: "Εξειδίκευση σε Φορολογικό, Υπαλληλικό δίκαιο και Πολεοδομικές παραβάσεις.",
      details: ["Φορολογικοί έλεγχοι", "Υπαλληλικές προσφυγές", "Πολεοδομικά πρόστιμα"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Οικογενειακό Δίκαιο",
      desc: "Διαχείριση ευαίσθητων ζητημάτων επιμέλειας και οικογενειακών διαφορών.",
      details: ["Επιμέλεια τέκνων", "Διαζύγια", "Διατροφή"]
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Μισθώσεις & Ακίνητα",
      desc: "Νομική υποστήριξη σε μισθωτικές διαφορές και θέματα Κτηματολογίου.",
      details: ["Ανείσπρακτα ενοίκια", "Εξώσεις", "Διορθώσεις Κτηματολογίου"]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Διεθνείς Διαγωνισμοί",
      desc: "Νομική καθοδήγηση σε διαγωνιστικές διαδικασίες και δημόσιες συμβάσεις.",
      details: ["Προδικαστικές προσφυγές", "Συμβατικά τεύχη", "Ενστάσεις"]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Εξωδικαστική Επίλυση",
      desc: "Μεθοδική προσέγγιση για την αποφυγή μακροχρόνιων δικαστικών αγώνων.",
      details: ["Διαπραγματεύσεις", "Συμβιβασμοί", "Διαμεσολάβηση"]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Γενική Συμβουλευτική",
      desc: "Συνεχής νομική υποστήριξη για ιδιώτες και επιχειρήσεις.",
      details: ["Νομικές γνωμοδοτήσεις", "Συμβάσεις", "Εκπροσώπηση"]
    }
  ];

  return (
    <section id="υπηρεσίες" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold mb-4 block underline underline-offset-8">Τομείς Εξειδίκευσης</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-900">Υπηρεσίες Υψηλού Επιπέδου</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-10 border border-slate-200 hover:border-gold-500/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-navy-900 mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
                {s.icon}
              </div>
              <h3 className="font-serif text-2xl text-navy-900 mb-4">{s.title}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2">
                {s.details.map((d, j) => (
                  <li key={j} className="text-[11px] uppercase tracking-widest text-navy-800 flex items-center">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 opacity-50" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Maria Papakonstantinou",
      text: "Εξαιρετική επαγγελματίας, ευσυνείδητη και με βαθιά γνώση του αντικειμένου. Η καθαρότητα των απαντήσεών της και η μεθοδικότητα που επέδειξε ήταν καθοριστικής σημασίας.",
      role: "Πελάτης"
    },
    {
      name: "Anna Iakovidou",
      text: "Άμεση ανταπόκριση και εξαιρετική επικοινωνία. Με βοήθησε να κατανοήσω πλήρως τη διαδικασία χωρίς περιττές περιπλοκές. Τη συστήνω ανεπιφύλακτα.",
      role: "Πελάτης"
    },
    {
      name: "Dimitris Nikolaidis",
      text: "Μεθοδικότητα και ψυχραιμία ακόμα και στις πιο δύσκολες στιγμές. Μια δικηγόρος που είναι πραγματικά δίπλα στον πελάτη.",
      role: "Πελάτης"
    }
  ];

  return (
    <section id="αξιολογήσεις" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold mb-4 block">Εμπιστοσύνη</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-900">Τι λένε οι πελάτες μας</h2>
          </div>
          <div className="text-slate-400 text-xs tracking-widest flex items-center uppercase italic">
            <Quote className="w-4 h-4 mr-2" />
            Πραγματικές κριτικές Google
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col h-full bg-slate-50 p-10 border-l-4 border-navy-900">
              <div className="mb-8 block">
                {[1, 2, 3, 4, 5].map(star => (
                   <span key={star} className="text-gold-500 text-sm">★</span>
                ))}
              </div>
              <p className="text-navy-900/80 italic leading-relaxed mb-10 flex-grow font-serif">"{r.text}"</p>
              <div>
                <p className="font-bold text-navy-900 tracking-tight">{r.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="επικοινωνία" className="py-24 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold mb-4 block">Επικοινωνία</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-12">Είμαστε εδώ για εσάς</h2>
          
          <div className="space-y-10">
            <div className="flex items-start">
              <div className="bg-white/5 p-4 rounded-full mr-6">
                <MapPin className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Διεύθυνση</p>
                <p className="text-xl font-serif">Δωδεκανήσου 19Α, Τ.Κ. 546 26,<br/>Θεσσαλονίκη</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white/5 p-4 rounded-full mr-6">
                <Phone className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Τηλέφωνο</p>
                <p className="text-xl font-serif">6982 314159</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white/5 p-4 rounded-full mr-6">
                <Mail className="w-6 h-6 text-gold-500" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Email</p>
                <p className="text-xl font-serif hover:text-gold-500 transition-colors">
                  <a href="mailto:ellilianou@gmail.com">ellilianou@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-[500px] w-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.797434771804!2d22.9366601!3d40.6354833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83850cb05c865%3A0x6b09315d97e376a9!2sDodekanisou%2019%2C%20Thessaloniki%20546%2026!5e0!3m2!1sen!2sgr!4v1713534567890!5m2!1sen!2sgr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.92)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="shadow-2xl"
          ></iframe>
          <div className="absolute top-8 left-8 bg-gold-500 text-navy-900 p-4 text-[10px] uppercase tracking-widest font-bold">
            Κέντρο Θεσσαλονίκης
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <span className="font-serif text-lg font-bold text-navy-900 tracking-tight">
          ΕΛΙΣΣΑΒΕΤ Κ. ΛΙΑΝΟΥ
        </span>
        <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-medium">
          LLM • ΔΙΚΗΓΟΡΟΣ ΘΕΣΣΑΛΟΝΙΚΗ
        </span>
      </div>
      
      <div className="flex space-x-8 text-[11px] uppercase tracking-widest text-slate-500">
        <a href="#αρχική" className="hover:text-navy-900 transition-colors">Αρχική</a>
        <a href="#υπηρεσίες" className="hover:text-navy-900 transition-colors">Υπηρεσίες</a>
        <a href="#επικοινωνία" className="hover:text-navy-900 transition-colors">Επικοινωνία</a>
      </div>
      
      <div className="text-slate-400 text-[10px] uppercase tracking-widest">
        © {new Date().getFullYear()} • ALL RIGHTS RESERVED
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="antialiased selection:bg-gold-500/30 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
