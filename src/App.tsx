import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  FileText, 
  Building2, 
  ShieldCheck, 
  Clock, 
  Award, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  CheckCircle2,
  Globe
} from 'lucide-react';

const translations = {
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      freeConsultation: "Reservar Cita",
      schedule: "Agendar Cita"
    },
    hero: {
      badge: "Preparadores Certificados por el IRS",
      title: "Maximiza tu Reembolso con Expertos en Taxes",
      subtitle: "Preparación de impuestos personales y corporativos rápida, segura y 100% precisa. No dejes dinero en la mesa este año fiscal.",
      ctaPrimary: "Comienza tu Declaración",
      ctaSecondary: "Ver Servicios"
    },
    stats: {
      years: "Años de Experiencia",
      clients: "Clientes Satisfechos",
      refunds: "En Reembolsos",
      guarantee: "Garantía de Precisión"
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales de impuestos y contabilidad diseñadas para individuos y empresas en todo Estados Unidos.",
      personal: {
        title: "Impuestos Personales",
        desc: "Preparación de formas 1040, W-2, 1099. Maximizamos tus deducciones legales para asegurar el mayor reembolso posible.",
        bullet1: "E-file rápido y seguro",
        bullet2: "Revisión de años anteriores"
      },
      corporate: {
        title: "Impuestos Corporativos",
        desc: "Servicios para LLCs, S-Corps, C-Corps y Partnerships. Mantén tu negocio en cumplimiento con el IRS y el estado.",
        bullet1: "Formas 1120, 1120S, 1065",
        bullet2: "Planificación fiscal anual"
      },
      itin: {
        title: "Trámite de ITIN",
        desc: "¿No tienes Seguro Social? Te ayudamos a tramitar o renovar tu Número de Identificación Personal del Contribuyente (ITIN).",
        bullet1: "Agentes Aceptadores Certificados",
        bullet2: "Proceso guiado paso a paso"
      }
    },
    whyUs: {
      title: "¿Por qué miles de latinos confían en nosotros cada año?",
      subtitle: "Entendemos que el sistema de impuestos en USA puede ser complicado. Nuestro equipo bilingüe está dedicado a educarte y proteger tus intereses financieros.",
      expert: {
        title: "Expertos Certificados",
        desc: "Nuestros preparadores están registrados y autorizados por el IRS (PTIN holders)."
      },
      fast: {
        title: "Proceso Rápido y Moderno",
        desc: "Firma tus documentos electrónicamente desde tu teléfono. Sin filas ni esperas innecesarias."
      },
      security: {
        title: "Seguridad de Datos",
        desc: "Utilizamos encriptación de grado bancario para proteger tu información personal y financiera."
      },
      badge: {
        title: "E-File Autorizado",
        desc: "Proveedor oficial del IRS"
      }
    },
    contact: {
      title: "Hablemos hoy",
      subtitle: "Haga su pregunta. Estamos listos para ayudarte con tus impuestos.",
      call: "Llámanos",
      email: "Email",
      office: "Oficina Principal",
      formTitle: "Haga su pregunta",
      name: "Nombre completo",
      phone: "Teléfono",
      service: "Servicio de interés",
      message: "Mensaje (Opcional)",
      send: "Enviar Solicitud",
      privacy: "Al enviar este formulario, aceptas nuestra política de privacidad. Tus datos están seguros.",
      options: [
        "Impuestos Personales",
        "Impuestos Corporativos / Negocio",
        "Trámite de ITIN",
        "Contabilidad / Bookkeeping",
        "Otro"
      ]
    },
    footer: {
      desc: "Servicios profesionales de preparación de impuestos y contabilidad. Maximizamos tu reembolso con integridad y precisión.",
      linksTitle: "Enlaces Rápidos",
      legalTitle: "Legal",
      terms: "Términos de Servicio",
      privacy: "Política de Privacidad",
      irs: "Aviso del IRS",
      portal: "Portal de Clientes",
      rights: "Todos los derechos reservados.",
      disclaimer: "No somos el IRS. Somos una agencia privada de preparación de impuestos autorizada para e-file."
    },
    booking: {
      title: "Reserva tu Cita",
      subtitle: "Selecciona el día y la hora que mejor te convenga para hacernos tu pregunta.",
      step1: "Selecciona un Servicio",
      step2: "Elige Fecha y Hora",
      step3: "Tus Datos",
      confirm: "Confirmar Cita",
      success: "¡Cita Solicitada!",
      successDesc: "Te hemos enviado un correo de confirmación. Nos pondremos en contacto contigo pronto.",
      back: "Volver",
      morning: "Mañana",
      afternoon: "Tarde"
    }
  },
  en: {
    nav: {
      services: "Services",
      about: "About Us",
      contact: "Contact",
      freeConsultation: "Book Appointment",
      schedule: "Schedule Appointment"
    },
    hero: {
      badge: "IRS Certified Preparers",
      title: "Maximize Your Refund with Tax Experts",
      subtitle: "Fast, secure, and 100% accurate personal and corporate tax preparation. Don't leave money on the table this tax season.",
      ctaPrimary: "Start Your Return",
      ctaSecondary: "View Services"
    },
    stats: {
      years: "Years of Experience",
      clients: "Satisfied Clients",
      refunds: "In Refunds",
      guarantee: "Accuracy Guarantee"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive tax and accounting solutions designed for individuals and businesses across the United States.",
      personal: {
        title: "Personal Taxes",
        desc: "Preparation of forms 1040, W-2, 1099. We maximize your legal deductions to ensure the largest possible refund.",
        bullet1: "Fast and secure E-file",
        bullet2: "Prior year review"
      },
      corporate: {
        title: "Corporate Taxes",
        desc: "Services for LLCs, S-Corps, C-Corps, and Partnerships. Keep your business compliant with the IRS and state.",
        bullet1: "Forms 1120, 1120S, 1065",
        bullet2: "Annual tax planning"
      },
      itin: {
        title: "ITIN Processing",
        desc: "No Social Security Number? We help you apply for or renew your Individual Taxpayer Identification Number (ITIN).",
        bullet1: "Certifying Acceptance Agents",
        bullet2: "Step-by-step guided process"
      }
    },
    whyUs: {
      title: "Why do thousands trust us every year?",
      subtitle: "We understand the US tax system can be complicated. Our bilingual team is dedicated to educating you and protecting your financial interests.",
      expert: {
        title: "Certified Experts",
        desc: "Our preparers are registered and authorized by the IRS (PTIN holders)."
      },
      fast: {
        title: "Fast and Modern Process",
        desc: "Sign your documents electronically from your phone. No unnecessary lines or waiting."
      },
      security: {
        title: "Data Security",
        desc: "We use bank-grade encryption to protect your personal and financial information."
      },
      badge: {
        title: "Authorized E-File",
        desc: "Official IRS Provider"
      }
    },
    contact: {
      title: "Let's talk today",
      subtitle: "Ask your question. We are ready to help you with your taxes.",
      call: "Call Us",
      email: "Email",
      office: "Main Office",
      formTitle: "Ask your question",
      name: "Full Name",
      phone: "Phone Number",
      service: "Service of interest",
      message: "Message (Optional)",
      send: "Send Request",
      privacy: "By submitting this form, you agree to our privacy policy. Your data is safe.",
      options: [
        "Personal Taxes",
        "Corporate / Business Taxes",
        "ITIN Processing",
        "Accounting / Bookkeeping",
        "Other"
      ]
    },
    footer: {
      desc: "Professional tax preparation and accounting services. We maximize your refund with integrity and accuracy.",
      linksTitle: "Quick Links",
      legalTitle: "Legal",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      irs: "IRS Notice",
      portal: "Client Portal",
      rights: "All rights reserved.",
      disclaimer: "We are not the IRS. We are a private tax preparation agency authorized for e-file."
    },
    booking: {
      title: "Book Your Appointment",
      subtitle: "Select the day and time that works best for you to ask your question.",
      step1: "Select a Service",
      step2: "Choose Date & Time",
      step3: "Your Details",
      confirm: "Confirm Appointment",
      success: "Appointment Requested!",
      successDesc: "We've sent you a confirmation email. We'll be in touch with you soon.",
      back: "Back",
      morning: "Morning",
      afternoon: "Afternoon"
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'invalid-email'>('idle');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    service: 'Impuestos Personales',
    message: ''
  });
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: ''
  });

  const t = translations[lang];

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const [phoneValues, setPhoneValues] = useState({ contact: '', booking: '' });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'contact' | 'booking') => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setPhoneValues(prev => ({ ...prev, [field]: formattedValue }));
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setSubmitStatus('invalid-email');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Construct mailto link
    const recipient = "lolo@gmail.com";
    const subject = encodeURIComponent(contactForm.service);
    const body = encodeURIComponent(
      `${lang === 'es' ? 'Nombre Completo' : 'Full Name'}: ${contactForm.name}\n` +
      `${lang === 'es' ? 'Teléfono' : 'Phone Number'}: ${phoneValues.contact}\n` +
      `${lang === 'es' ? 'Email' : 'Email'}: ${contactForm.email}\n\n` +
      `${lang === 'es' ? 'Mensaje' : 'Message'}:\n${contactForm.message}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Show success message
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Clear form fields
    setContactForm({ name: '', email: '', service: 'Impuestos Personales', message: '' });
    setPhoneValues(prev => ({ ...prev, contact: '' }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const recipient = "lolo@gmail.com";
    const subject = encodeURIComponent(`${lang === 'es' ? 'Reserva de Cita' : 'Appointment Booking'}: ${selectedService}`);
    const body = encodeURIComponent(
      `${lang === 'es' ? 'Nombre Completo' : 'Full Name'}: ${bookingForm.name}\n` +
      `${lang === 'es' ? 'Teléfono' : 'Phone Number'}: ${phoneValues.booking}\n` +
      `${lang === 'es' ? 'Email' : 'Email'}: ${bookingForm.email}\n` +
      `${lang === 'es' ? 'Servicio' : 'Service'}: ${selectedService}\n` +
      `${lang === 'es' ? 'Fecha' : 'Date'}: ${selectedDate} de Febrero\n` +
      `${lang === 'es' ? 'Hora' : 'Time'}: ${selectedTime}`
    );

    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Show success state
    setIsSuccess(true);
    
    // Clear booking form
    setBookingForm({ name: '', email: '' });
    setPhoneValues(prev => ({ ...prev, booking: '' }));
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedService('');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-200 overflow-x-hidden w-full">
      {/* Booking View Overlay */}
      {isBookingOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-teal-800 text-white">
              <div>
                <h2 className="text-2xl font-serif font-bold">{t.booking.title}</h2>
                <p className="text-teal-100 text-sm">{t.booking.subtitle}</p>
              </div>
              <button 
                onClick={() => {
                  setIsBookingOpen(false);
                  setIsSuccess(false);
                  setBookingStep(1);
                }}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.booking.success}</h3>
                  <p className="text-slate-600 mb-8">{t.booking.successDesc}</p>
                  <button 
                    onClick={() => setIsBookingOpen(false)}
                    className="bg-teal-800 text-white px-8 py-3 rounded-xl font-bold"
                  >
                    {t.booking.back}
                  </button>
                </div>
              ) : (
                <>
                  {/* Steps Progress */}
                  <div className="flex items-center justify-between mb-8 px-4">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex flex-col items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${bookingStep >= step ? 'bg-teal-800 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          {step}
                        </div>
                        <span className={`text-[10px] uppercase tracking-wider font-bold ${bookingStep >= step ? 'text-teal-800' : 'text-slate-400'}`}>
                          {step === 1 ? t.booking.step1 : step === 2 ? t.booking.step2 : t.booking.step3}
                        </span>
                      </div>
                    ))}
                  </div>

                  {bookingStep === 1 && (
                    <div className="grid gap-4">
                      {t.contact.options.map((option, idx) => (
                        <button 
                          key={idx}
                          onClick={() => {
                            setSelectedService(option);
                            setBookingStep(2);
                          }}
                          className="w-full p-4 text-left rounded-2xl border border-slate-200 hover:border-teal-600 hover:bg-teal-50 transition-all flex justify-between items-center group"
                        >
                          <span className="font-semibold text-slate-700 group-hover:text-teal-800">{option}</span>
                          <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-teal-600" />
                        </button>
                      ))}
                    </div>
                  )}

                  {bookingStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-7 gap-2 mb-6">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                          <div key={i} className="text-center text-[10px] font-bold text-slate-400 uppercase">{d}</div>
                        ))}
                        {Array.from({ length: 31 }).map((_, i) => (
                          <button 
                            key={i}
                            onClick={() => setSelectedDate(i + 1)}
                            className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all ${selectedDate === i + 1 ? 'bg-teal-800 text-white' : 'hover:bg-teal-50 text-slate-600'}`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((time) => (
                          <button 
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 rounded-lg border text-xs font-bold transition-all ${selectedTime === time ? 'bg-teal-800 border-teal-800 text-white' : 'border-slate-200 text-slate-600 hover:border-teal-600'}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <button onClick={() => setBookingStep(1)} className="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-600">{t.booking.back}</button>
                        <button 
                          disabled={!selectedDate || !selectedTime}
                          onClick={() => setBookingStep(3)} 
                          className="flex-1 py-3 rounded-xl bg-teal-800 text-white font-bold disabled:opacity-50"
                        >
                          {lang === 'es' ? 'Siguiente' : 'Next'}
                        </button>
                      </div>
                    </div>
                  )}

                  {bookingStep === 3 && (
                    <div className="space-y-4">
                      <input 
                        type="text" 
                        placeholder={t.contact.name} 
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-teal-600" 
                      />
                      <input 
                        type="tel" 
                        value={phoneValues.booking}
                        onChange={(e) => handlePhoneChange(e, 'booking')}
                        placeholder="(555) 123-4567" 
                        className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-teal-600" 
                      />
                      <input 
                        type="email" 
                        placeholder="Email" 
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-teal-600" 
                      />
                      
                      <div className="flex gap-4 pt-4">
                        <button onClick={() => setBookingStep(2)} className="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-600">{t.booking.back}</button>
                        <button 
                          onClick={handleBookingSubmit} 
                          className="flex-1 py-3 rounded-xl bg-amber-500 text-slate-900 font-bold"
                        >
                          {t.booking.confirm}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="bg-teal-800 p-2 rounded-lg">
                <Calculator className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <span className="font-serif font-bold text-xl md:text-2xl text-slate-900 tracking-tight">
                TaxPro <span className="text-teal-800">USA</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a href="#servicios" className="text-slate-600 hover:text-teal-800 font-medium transition-colors">{t.nav.services}</a>
              <a href="#nosotros" className="text-slate-600 hover:text-teal-800 font-medium transition-colors">{t.nav.about}</a>
              <a href="#contacto" className="text-slate-600 hover:text-teal-800 font-medium transition-colors">{t.nav.contact}</a>
              
              <div className="h-6 w-px bg-slate-200"></div>

              {/* Language Toggle */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-teal-50 text-slate-600 hover:text-teal-800 font-bold transition-colors border border-slate-200 hover:border-teal-200 shadow-sm"
              >
                <Globe className="h-4 w-4 text-teal-700" />
                <motion.span
                  key={lang}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="min-w-[24px] text-xs tracking-wider"
                >
                  {lang === 'es' ? 'EN' : 'ES'}
                </motion.span>
              </motion.button>

              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <Phone className="h-4 w-4 text-teal-800" />
                <span className="text-sm xl:text-base">1-800-TAX-EASY</span>
              </div>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-teal-800 hover:bg-teal-900 text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg text-sm xl:text-base"
              >
                {t.nav.freeConsultation}
              </button>
            </div>

            {/* Mobile Menu Button & Lang Toggle */}
            <div className="lg:hidden flex items-center gap-2 sm:gap-3">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold border border-slate-200"
              >
                <Globe className="h-4 w-4 text-teal-700" />
                <span className="text-[10px] sm:text-xs">{lang === 'es' ? 'EN' : 'ES'}</span>
              </motion.button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-1.5">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1 shadow-xl">
            <a href="#servicios" className="block px-3 py-3 text-slate-600 font-medium border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>{t.nav.services}</a>
            <a href="#nosotros" className="block px-3 py-3 text-slate-600 font-medium border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
            <a href="#contacto" className="block px-3 py-3 text-slate-600 font-medium border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
            <div className="pt-4 px-3">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="block w-full text-center bg-teal-800 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg"
              >
                {t.nav.schedule}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 to-slate-900/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
            alt="Tax preparation" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              key={lang} // Re-animate on language change
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-100 text-sm font-medium mb-6 backdrop-blur-sm">
                <Award className="h-4 w-4" />
                <span>{t.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2"
                >
                  {t.hero.ctaPrimary}
                  <ChevronRight className="h-5 w-5" />
                </button>
                <a href="#servicios" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm flex items-center justify-center">
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-6 text-center md:divide-x md:divide-slate-100">
            <div className="px-2">
              <p className="text-2xl md:text-3xl font-bold text-teal-800 mb-1">15+</p>
              <p className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wider">{t.stats.years}</p>
            </div>
            <div className="px-2">
              <p className="text-2xl md:text-3xl font-bold text-teal-800 mb-1">10k+</p>
              <p className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wider">{t.stats.clients}</p>
            </div>
            <div className="px-2">
              <p className="text-2xl md:text-3xl font-bold text-teal-800 mb-1">$50M+</p>
              <p className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wider">{t.stats.refunds}</p>
            </div>
            <div className="px-2">
              <p className="text-2xl md:text-3xl font-bold text-teal-800 mb-1">100%</p>
              <p className="text-[10px] md:text-sm text-slate-500 font-medium uppercase tracking-wider">{t.stats.guarantee}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">{t.services.title}</h2>
            <p className="text-lg text-slate-600">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              {...fadeIn}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all group"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors">
                <FileText className="h-7 w-7 text-teal-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.services.personal.title}</h3>
              <p className="text-slate-600 mb-4">
                {t.services.personal.desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> {t.services.personal.bullet1}</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> {t.services.personal.bullet2}</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              {...fadeIn} transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all group"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors">
                <Building2 className="h-7 w-7 text-teal-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.services.corporate.title}</h3>
              <p className="text-slate-600 mb-4">
                {t.services.corporate.desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> {t.services.corporate.bullet1}</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> {t.services.corporate.bullet2}</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              {...fadeIn} transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all group"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-700 transition-colors">
                <ShieldCheck className="h-7 w-7 text-teal-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.services.itin.title}</h3>
              <p className="text-slate-600 mb-4">
                {t.services.itin.desc}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> {t.services.itin.bullet1}</li>
                <li className="flex items-center text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 text-amber-500 mr-2" /> {t.services.itin.bullet2}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                {t.whyUs.title}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {t.whyUs.subtitle}
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{t.whyUs.expert.title}</h4>
                    <p className="text-slate-600">{t.whyUs.expert.desc}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{t.whyUs.fast.title}</h4>
                    <p className="text-slate-600">{t.whyUs.fast.desc}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{t.whyUs.security.title}</h4>
                    <p className="text-slate-600">{t.whyUs.security.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-teal-800 rounded-3xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipo de profesionales" 
                className="relative rounded-3xl shadow-2xl object-cover h-[350px] md:h-[600px] w-full"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.whyUs.badge.title}</p>
                    <p className="text-sm text-slate-500">{t.whyUs.badge.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contacto" className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
          <div className="w-96 h-96 bg-teal-800/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
          <div className="w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5 h-full">
              
              {/* Contact Info */}
              <div className="lg:col-span-2 bg-teal-900 p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-serif font-bold mb-2">{t.contact.title}</h3>
                  <p className="text-teal-100 mb-8">{t.contact.subtitle}</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-teal-300 mt-1" />
                      <div>
                        <p className="font-medium">{t.contact.call}</p>
                        <p className="text-teal-100">1-800-TAX-EASY</p>
                        <p className="text-teal-100 text-sm">Lun-Vie: 9am - 7pm EST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-teal-300 mt-1" />
                      <div>
                        <p className="font-medium">{t.contact.email}</p>
                        <p className="text-teal-100">ayuda@taxprousa.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-teal-300 mt-1" />
                      <div>
                        <p className="font-medium">{t.contact.office}</p>
                        <p className="text-teal-100">123 Financial District Blvd<br/>Miami, FL 33131</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 p-6 sm:p-10 lg:p-12">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">{t.contact.formTitle}</h3>
                
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-teal-50 border border-teal-200 text-teal-800 rounded-lg text-sm font-medium"
                  >
                    {lang === 'es' ? '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.' : 'Message sent successfully! We will be in touch soon.'}
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm font-medium"
                  >
                    {lang === 'es' ? 'Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.' : 'There was an error sending your message. Please try again.'}
                  </motion.div>
                )}

                {submitStatus === 'invalid-email' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-sm font-medium"
                  >
                    {lang === 'es' ? 'Por favor, introduce un correo electrónico válido.' : 'Please enter a valid email address.'}
                  </motion.div>
                )}

                <form className="space-y-4 sm:space-y-6" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.name}</label>
                      <input 
                        type="text" 
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all text-sm sm:text-base"
                        placeholder={lang === 'es' ? "Juan Pérez" : "John Doe"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.phone}</label>
                      <input 
                        type="tel" 
                        required
                        value={phoneValues.contact}
                        onChange={(e) => handlePhoneChange(e, 'contact')}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all text-sm sm:text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.email}</label>
                      <input 
                        type="email" 
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all text-sm sm:text-base"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.service}</label>
                    <select 
                      value={contactForm.service}
                      onChange={(e) => setContactForm(prev => ({ ...prev, service: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all bg-white"
                    >
                      {t.contact.options.map((opt, idx) => (
                        <option key={idx} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.message}</label>
                    <textarea 
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 outline-none transition-all resize-none"
                      placeholder={lang === 'es' ? "¿Cómo podemos ayudarte?" : "How can we help you?"}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        {lang === 'es' ? 'Enviando...' : 'Sending...'}
                      </>
                    ) : t.contact.send}
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-4">
                    {t.contact.privacy}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-6 w-6 text-teal-500" />
                <span className="font-serif font-bold text-xl text-white tracking-tight">
                  TaxPro <span className="text-teal-500">USA</span>
                </span>
              </div>
              <p className="text-sm max-w-sm">
                {t.footer.desc}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.linksTitle}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                <li><a href="#nosotros" className="hover:text-white transition-colors">{t.nav.about}</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.portal}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.legalTitle}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.irs}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} TaxPro USA. {t.footer.rights}</p>
            <p className="mt-2 md:mt-0 text-xs">
              {t.footer.disclaimer}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
