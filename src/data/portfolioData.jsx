export const cyberSkills = [
  {
    label: 'Network Security',
    icon: 'network',
  },
  {
    label: 'Threat Hunting',
    icon: 'search',
  },
  {
    label: 'Ethical Hacking',
    icon: 'shield',
  },
  {
    label: 'Linux & Kali',
    icon: 'terminal',
  },
  {
    label: 'Firewall Configuration',
    icon: 'firewall',
  },
  {
    label: 'Web Security',
    icon: 'web',
  },
  {
    label: 'Cryptography Basics',
    icon: 'key',
  },
  {
    label: 'Security Reporting',
    icon: 'report',
  },
]

export const projects = [
  {
    title: 'Virtual Firewall Lab',
    category: 'Network Security',
    description:
      'A virtualized firewall setup where Windows traffic is routed through Kali Linux in Oracle VM VirtualBox. Kali uses iptables to monitor and filter traffic, with concepts like ransomware defense, honeyport detection, and deep packet inspection.',
    stack: ['Kali Linux', 'iptables', 'Ransomware Defense', 'Honeyport', 'DPI'],
  },
  {
    title: 'FitLevel',
    category: 'Fitness Web Platform',
    description:
      'A fitness and health management platform for workout management, fitness tracking, progress monitoring, and personalized wellness features. The frontend provides a responsive user experience while the backend handles user data, authentication, and application logic.',
    stack: ['Frontend', 'Backend', 'Authentication'],
  },
  {
    title: 'goKyber',
    category: 'Post-Quantum Cryptography',
    description:
      'A high-performance post-quantum encryption framework built with Go. The project explores quantum cryptography concepts, PKI integration, and polynomial encryption while focusing on the NIST-standardized CRYSTALS-Kyber algorithm.',
    stack: ['Go', 'Quantum Cryptography', 'PKI', 'Polynomial Encryption'],
  },
]

export const contactMethods = [
  {
    label: 'Email',
    value: 'hishamfaizal558@gmail.com',
    href: 'mailto:hishamfaizal558@gmail.com',
    icon: '@',
  },
  {
    label: 'Phone',
    value: '+91 9745163259',
    href: 'tel:+919745163259',
    icon: '#',
  },
  {
    label: 'Focus',
    value: 'Cybersecurity, web security, networking',
    href: '#projects',
    icon: '*',
  },
]

export const navItems = [
  {
    name: 'Home',
    target: 'home',
    icon: 'home',
  },
  {
    name: 'About',
    target: 'about',
    icon: 'user',
  },
  {
    name: 'Projects',
    target: 'projects',
    icon: 'list',
  },
  {
    name: 'Contact',
    target: 'contact',
    icon: 'mail',
  },
]
