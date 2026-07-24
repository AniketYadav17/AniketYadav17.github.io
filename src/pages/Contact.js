import React from 'react';
import {
  EnvelopeIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Contact = ({ darkMode }) => {
  const accent = darkMode ? 'text-indigo-400' : 'text-indigo-600';
  const border = darkMode ? 'border-gray-800' : 'border-gray-200';
  const secondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const heading = darkMode ? 'text-white' : 'text-gray-900';

  const contactInfo = [
    {
      name: 'Email',
      href: 'mailto:aniket.ydv99@gmail.com',
      Icon: EnvelopeIcon,
      description: 'Send me an email for collaborations, opportunities, or just to say hello!',
      cta: 'Send an email →',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/aniket-ydv/',
      Icon: BriefcaseIcon,
      description: 'Connect with me on LinkedIn for professional networking and updates.',
      cta: 'Visit LinkedIn →',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/AniketYadav17',
      Icon: CodeBracketIcon,
      description: 'Check out my open-source projects and contributions on GitHub.',
      cta: 'Visit GitHub →',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <header className="mb-14">
        <p className={`text-xs font-semibold tracking-widest uppercase ${accent}`}>Contact</p>
        <h1 className={`mt-2 text-3xl sm:text-4xl font-bold tracking-tight ${heading}`}>
          Get in touch
        </h1>
        <p className={`mt-4 max-w-2xl text-lg ${secondary}`}>
          I'm always interested in new opportunities, collaborations, and interesting
          conversations about agentic AI, RAG systems, and LLM evaluation.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactInfo.map(({ name, href, Icon, description, cta }) => (
          <div key={name} className={`rounded-xl border p-6 ${border}`}>
            <Icon className={`h-6 w-6 ${accent}`} />
            <h3 className={`mt-4 text-lg font-bold ${heading}`}>{name}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${secondary}`}>{description}</p>
            <a
              href={href}
              {...(href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className={`mt-4 inline-block text-sm font-medium ${accent} hover:underline`}
            >
              {cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`rounded-xl border p-6 ${border}`}>
          <div className="flex items-center gap-3">
            <AcademicCapIcon className={`h-6 w-6 ${accent}`} />
            <h3 className={`text-lg font-bold ${heading}`}>Current status</h3>
          </div>
          <div className={`mt-4 space-y-1 text-sm ${secondary}`}>
            <p className="font-medium">MSc in Artificial Intelligence — Distinction</p>
            <p>University of Surrey (2024–2025)</p>
            <p className={`font-semibold ${accent}`}>Available for opportunities</p>
          </div>
        </div>

        <div className={`rounded-xl border p-6 ${border}`}>
          <div className="flex items-center gap-3">
            <BriefcaseIcon className={`h-6 w-6 ${accent}`} />
            <h3 className={`text-lg font-bold ${heading}`}>Experience</h3>
          </div>
          <div className={`mt-4 space-y-1 text-sm ${secondary}`}>
            <p className="font-medium">2+ years shipping production AI systems</p>
            <p>Independent AI Engineer · Ex-Accenture</p>
            <p className={`font-semibold ${accent}`}>Agentic AI · RAG · LLM Evaluation</p>
          </div>
        </div>
      </div>

      <div className={`mt-16 pt-10 border-t text-center ${border}`}>
        <p className={`text-lg ${secondary}`}>
          Have a project in mind, or just want to connect?
        </p>
        <a
          href="mailto:aniket.ydv99@gmail.com"
          className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Send me an email
        </a>
      </div>
    </div>
  );
};

export default Contact;
