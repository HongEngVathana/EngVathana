import {
  Project,
  SkillCategory,
  ExperienceItem,
  ArchitectureLayer,
  ArchitecturePattern,
  EducationMilestone,
  JourneyStage,
  GitHubRepo,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Hong Eng Vathana',
  primaryTitle: 'Software Engineer',
  profileImage: '/profile.jpg',
  roles: [
    'Software Engineer',
  ],
  headline: 'Software Engineer Building Scalable Digital Products.',
  subheadline:
    'Software Engineer specializing in Angular, C#/.NET, Flutter, REST APIs, and modern software architecture — with 2 years of training and 1 year of professional experience at a US-based enterprise company.',
  aboutStory: `I am a Year 4 Computer Science university student with practical, commercial software engineering experience. Since 2022, I have collaborated remotely with a US-based enterprise company — spending my first 2 years in structured training and mentorship, followed by 1 year as a full-time contributing Software Engineer, designing, building, and maintaining production-grade software solutions across the entire technical stack.

My core technical strengths center on architecting modular Angular web applications, robust C# and ASP.NET Core backend services with Entity Framework, and cross-platform Flutter mobile applications backed by clean RESTful APIs. Beyond coding, I serve as a Team Leader and Scrum Master, facilitating sprint ceremonies, steering technical discussions, leading code reviews, and conducting system analyses to bridge user needs and technical implementation.

I approach software engineering with a grounded commitment to clean architecture, SOLID principles, and pragmatic problem solving — demonstrating the capability of an enterprise-tested engineer alongside strong academic dedication.`,
  email: 'engvathanahong@gmail.com',
  github: 'https://github.com/vathanahong', // placeholder customizable link
  linkedin: 'https://linkedin.com/in/vathanahong', // placeholder customizable link
  status: 'Available for Select Enterprise & High-Impact Engineering Roles',
  currentYear: 'Year 4 Computer Science Student',
  yearsRemote: '3 Years Remote (US Company)',
  corePillars: [
    { label: 'Remote Enterprise', value: '3 Years', desc: '2 Yrs Training + 1 Yr Work, US-based company' },
    { label: 'Mobile / Flutter', value: '4 Years', desc: 'Cross-platform UI & offline sync' },
    { label: 'Angular Frontend', value: '3 Years', desc: 'Enterprise SPAs & design systems' },
    { label: 'C# / .NET Backend', value: '2 Years', desc: 'Clean architecture & RESTful services' },
    { label: 'Academic Standing', value: 'Year 4 Student', desc: 'Year 1: 3.78 • Year 2: 3.67 • Year 3: 3.55 • Cumulative Avg: 3.67 / 4.00' },
    { label: 'Agile Leadership', value: 'Scrum Master', desc: 'Sprint planning & team mentoring' },
  ],
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    period: '2022 — Present',
    role: 'Software Engineer',
    companyType: 'US-Based Enterprise Company',
    location: 'Remote (US Client Timezone Collaboration)',
    summary:
      'Began with 2 years of structured training and mentorship at a US-based enterprise company, then transitioned into 1 year as a full-time Software Engineer — engineering scalable enterprise web, mobile, and backend microservices while leading sprint cycles, facilitating technical architecture discussions, and coordinating cross-functional team deliverables.',
    developmentResponsibilities: [
      'Develop and maintain enterprise-grade web applications utilizing Angular, TypeScript, and modern component hierarchies.',
      'Build robust, testable C# and ASP.NET Core backend services, REST APIs, and database models using Entity Framework Core.',
      'Develop responsive, performant Flutter mobile interfaces integrated with Firebase and local SQLite databases for offline resilience.',
      'Design relational database schemas and optimized queries in SQL Server and PostgreSQL.',
      'Implement automated unit, integration, and UI tests using Selenium, Jasmine, Playwright, and C# testing frameworks.',
      'Perform thorough code reviews, debugging, and continuous performance optimization across production builds.',
    ],
    leadershipResponsibilities: [
      'Coordinate technical development across frontend, backend, and mobile feature teams to ensure architectural consistency.',
      'Lead technical design discussions, evaluate trade-offs, and conduct comprehensive pull-request reviews.',
      'Distribute and prioritize sprint tasks based on business requirements and individual developer strengths.',
      'Mentor junior teammates on clean architecture, SOLID principles, and debugging techniques.',
      'Collaborate with product stakeholders to clarify business logic and translate user requirements into technical specifications.',
    ],
    scrumMasterResponsibilities: [
      'Facilitate Agile ceremonies: Daily Stand-ups, Sprint Planning, Sprint Reviews, and Sprint Retrospectives.',
      'Actively identify and eliminate technical blockers, dependencies, and process bottlenecks.',
      'Manage and groom sprint backlogs, estimating story points and ensuring realistic scope commitments.',
      'Foster transparent team communication across time zones, optimizing sprint velocity and team morale.',
      'Continuously inspect and adapt team delivery processes to improve delivery cadence and quality.',
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'C#',
      '.NET',
      'ASP.NET Core',
      'Flutter',
      'Dart',
      'REST API',
      'Entity Framework',
      'SQL Server',
      'PostgreSQL',
      'Firebase',
      'Docker',
      'Git',
      'Agile / Scrum',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    iconName: 'Layout',
    skills: [
      { name: 'Angular', level: 'Advanced', years: '3 Years', highlight: true, details: 'Modular architecture, RxJS, NgRx, lazy loading' },
      { name: 'TypeScript', level: 'Advanced', years: '4 Years', highlight: true, details: 'Strict type safety, generics, interfaces' },
      { name: 'JavaScript', level: 'Advanced', years: '4 Years', details: 'ES6+, async/await, closures, DOM manipulation' },
      { name: 'HTML5', level: 'Advanced', years: '4+ Years', details: 'Semantic structure, accessibility (a11y), SEO' },
      { name: 'CSS3', level: 'Advanced', years: '4+ Years', details: 'Flexbox, Grid, CSS animations, variables' },
      { name: 'Bootstrap', level: 'Proficient', years: '3 Years', details: 'Enterprise responsive layout systems & theming' },
      { name: 'Responsive Web Design', level: 'Advanced', years: '4 Years', details: 'Mobile-first fluid layouts, breakpoints, viewports' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    iconName: 'Server',
    skills: [
      { name: 'C#', level: 'Proficient', years: '2 Years', highlight: true, details: 'OOP, LINQ, async tasks, generics, delegates' },
      { name: '.NET / ASP.NET Core', level: 'Proficient', years: '2 Years', highlight: true, details: 'Web APIs, Dependency Injection, Middleware, Filters' },
      { name: 'REST API', level: 'Advanced', years: '3+ Years', highlight: true, details: 'RESTful conventions, Swagger/OpenAPI, versioning, JWT' },
      { name: 'MVC', level: 'Advanced', years: '3 Years', details: 'Model-View-Controller design pattern separation' },
      { name: 'Entity Framework', level: 'Proficient', years: '2 Years', details: 'EF Core, Code-First migrations, LINQ queries, relationships' },
      { name: 'PHP', level: 'Intermediate', years: '1+ Years', details: 'Server-side scripting, MVC backends, templating' },
      { name: 'Laravel', level: 'Intermediate', years: '1+ Years', details: 'Artisan, Eloquent ORM, routing, service providers' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    iconName: 'Smartphone',
    skills: [
      { name: 'Flutter', level: 'Advanced', years: '4 Years', highlight: true, details: 'Custom widgets, state management (Provider/Bloc), platform channels' },
      { name: 'Dart', level: 'Advanced', years: '4 Years', highlight: true, details: 'Asynchronous streams, isolates, null safety, sound typing' },
      { name: 'Android Java', level: 'Intermediate', years: '2 Years', details: 'Native activities, intents, lifecycle, permissions' },
      { name: 'Swift', level: 'Intermediate', years: '1+ Years', details: 'iOS native bridges, CocoaPods integration' },
      { name: 'Firebase', level: 'Advanced', years: '3 Years', highlight: true, details: 'Authentication, Firestore, Cloud Messaging, Storage' },
      { name: 'SQLite / SQL', level: 'Advanced', years: '3 Years', details: 'Local relational caching, migrations, fast offline queries' },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Proficient', years: '2 Years', highlight: true, details: 'Complex joins, indexing, constraints, triggers' },
      { name: 'SQL Server', level: 'Proficient', years: '2 Years', highlight: true, details: 'SSMS, stored procedures, execution plans, T-SQL' },
      { name: 'SQLite', level: 'Advanced', years: '3 Years', details: 'Mobile-embedded ACID storage for offline capability' },
      { name: 'Firestore', level: 'Advanced', years: '3 Years', details: 'NoSQL document collections, real-time snapshot listeners' },
      { name: 'Firebase Auth', level: 'Advanced', years: '3 Years', details: 'OAuth tokens, email/password, session claims' },
    ],
  },
  {
    id: 'desktop',
    name: 'Desktop',
    iconName: 'Monitor',
    skills: [
      { name: 'C# Desktop', level: 'Proficient', years: '2 Years', details: 'Event-driven architecture, multi-threading' },
      { name: 'Windows Forms', level: 'Proficient', years: '2 Years', details: 'WinForms controls, data binding, custom components' },
      { name: '.NET Desktop Runtime', level: 'Proficient', years: '2 Years', details: 'Local system hardware integration & file I/O' },
    ],
  },
  {
    id: 'architecture',
    name: 'Architecture & Patterns',
    iconName: 'Boxes',
    skills: [
      { name: 'Clean Architecture', level: 'Advanced', years: '3 Years', highlight: true, details: 'Domain, Application, Infrastructure, Presentation separation' },
      { name: 'SOLID Principles', level: 'Advanced', years: '3 Years', highlight: true, details: 'Single responsibility, Open/closed, Liskov, Interface, DI' },
      { name: 'Repository Pattern', level: 'Advanced', years: '3 Years', details: 'Decoupling persistence abstractions from business logic' },
      { name: 'Service Layer', level: 'Advanced', years: '3 Years', details: 'Encapsulating transactional domain operations' },
      { name: 'Dependency Injection', level: 'Advanced', years: '3 Years', details: 'IoC containers, lifecycle lifetimes (Scoped, Transient, Singleton)' },
      { name: 'MVVM', level: 'Advanced', years: '3 Years', details: 'Data-binding separation for Flutter and desktop apps' },
      { name: 'MVC', level: 'Advanced', years: '3 Years', details: 'Request routing, controllers, view rendering' },
      { name: 'RESTful Architecture', level: 'Advanced', years: '3 Years', details: 'Stateless resource URI designs, HATEOAS, HTTP semantics' },
      { name: 'OOP', level: 'Advanced', years: '4 Years', details: 'Encapsulation, inheritance, polymorphism, abstraction' },
    ],
  },
  {
    id: 'testing',
    name: 'Testing',
    iconName: 'CheckCircle2',
    skills: [
      { name: 'Unit Testing', level: 'Proficient', years: '3 Years', highlight: true, details: 'xUnit / NUnit for C#, Jasmine for Angular' },
      { name: 'Integration Testing', level: 'Proficient', years: '2 Years', details: 'API contract testing, in-memory test servers' },
      { name: 'Selenium', level: 'Proficient', years: '2 Years', details: 'Automated browser driver testing, web element locators' },
      { name: 'Playwright', level: 'Proficient', years: '2 Years', highlight: true, details: 'Modern end-to-end multi-browser test automation' },
      { name: 'Jasmine', level: 'Proficient', years: '3 Years', details: 'Angular component specs, spies, mocks' },
      { name: 'C# Testing (xUnit/NUnit)', level: 'Proficient', years: '2 Years', details: 'Mocking frameworks (Moq), assertion libraries' },
      { name: 'UI / E2E Testing', level: 'Proficient', years: '2 Years', details: 'Regression verification, visual regression testing' },
    ],
  },
  {
    id: 'agile',
    name: 'Agile & Leadership',
    iconName: 'Users',
    skills: [
      { name: 'Scrum Master', level: 'Advanced', years: '2+ Years', highlight: true, details: 'Ceremony facilitation, impediment removal, velocity tracking' },
      { name: 'Agile / Scrum', level: 'Advanced', years: '4 Years', highlight: true, details: '2-week sprint iterations, continuous feedback loops' },
      { name: 'Sprint Planning', level: 'Advanced', years: '2+ Years', details: 'Story sizing, capacity planning, acceptance criteria definition' },
      { name: 'Daily Stand-up', level: 'Advanced', years: '4 Years', details: 'Focused alignment, blocker identification, cross-functional updates' },
      { name: 'Sprint Review & Retro', level: 'Advanced', years: '2+ Years', details: 'Actionable retrospectives, stakeholder demos, process improvement' },
      { name: 'Backlog Management', level: 'Advanced', years: '2+ Years', details: 'Jira / Azure DevOps priority ranking, user story decomposition' },
      { name: 'Team Leadership', level: 'Advanced', years: '2+ Years', highlight: true, details: 'Technical mentoring, code standard enforcement, peer guidance' },
      { name: 'Requirements Analysis', level: 'Advanced', years: '3 Years', details: 'Business domain modeling, edge case identification' },
      { name: 'System Analysis', level: 'Advanced', years: '3 Years', details: 'Data flow diagrams, entity relational mapping, architectural ADRs' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Tools',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', years: '4 Years', highlight: true, details: 'Trunk-based development, rebase, PR reviews, merge strategies' },
      { name: 'Docker', level: 'Intermediate', years: '2 Years', details: 'Containerization, Dockerfile multi-stage builds, compose' },
      { name: 'Visual Studio & VS Code', level: 'Advanced', years: '4 Years', details: 'Advanced debugging, profiler, extensions, task automation' },
      { name: 'Postman', level: 'Advanced', years: '3 Years', details: 'Automated test collections, environments, API documentation' },
      { name: 'SSMS', level: 'Proficient', years: '2 Years', details: 'SQL Server Management Studio index tuning & query plans' },
      { name: 'Android Studio', level: 'Advanced', years: '4 Years', details: 'Emulators, Gradle profiling, APK bundling, device logs' },
    ],
  },
  {
    id: 'design',
    name: 'UI/UX & Design',
    iconName: 'Palette',
    skills: [
      { name: 'Figma', level: 'Advanced', years: '4 Years', highlight: true, details: 'Auto-layout, reusable design tokens, design systems, variants' },
      { name: 'Wireframing', level: 'Advanced', years: '4 Years', details: 'Low-fidelity layout validation, structural hierarchy' },
      { name: 'User Flow', level: 'Advanced', years: '4 Years', details: 'Journey maps, decision trees, exception state routing' },
      { name: 'Prototyping', level: 'Advanced', years: '4 Years', details: 'Interactive high-fidelity prototypes, click-through testing' },
      { name: 'Miro', level: 'Proficient', years: '3 Years', details: 'Sprint retrospectives, collaborative brainstorming, system diagrams' },
      { name: 'UI Design', level: 'Advanced', years: '4 Years', details: 'Color harmony, typographic scale, micro-interactions' },
      { name: 'UX Design', level: 'Advanced', years: '4 Years', details: 'Usability heuristics, form efficiency, cognitive load minimization' },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'enterprise-resource-portal',
    title: 'Enterprise Workflow & Resource Management Portal',
    category: 'enterprise',
    description:
      'High-throughput web portal built for enterprise resource allocation, multi-level approval workflows, and real-time operational reporting.',
    problem:
      'Enterprise teams struggled with fragmented spreadsheets and slow approvals, resulting in delayed project handoffs and lack of audit trails.',
    solution:
      'Architected a centralized Angular SPA backed by an ASP.NET Core REST API with role-based access control, automated state transitions, and audit logging.',
    role: 'Software Engineer',
    technologies: ['Angular', 'TypeScript', 'C#', '.NET', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'Bootstrap'],
    architecture: 'Clean Architecture with separate Domain, Application, Infrastructure, and Presentation layers using Repository and Service patterns.',
    keyFeatures: [
      'Role-based permissions for administrators, project leads, and members',
      'Dynamic form engine with real-time field validation and conditional rules',
      'Entity Framework Core data layer with optimized SQL queries and indexing',
      'Automated email notifications and event audit trail for compliance',
      'Comprehensive unit and integration test suite using xUnit and Jasmine',
    ],
    githubUrl: 'https://github.com/vathanahong/enterprise-resource-portal',
    demoUrl: 'https://enterprise-portal.demo.placeholder.dev',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    badge: 'Enterprise Production Architecture',
  },
  {
    id: 'flutter-field-inspection',
    title: 'FieldOps: Offline-First Mobile Inspection App',
    category: 'mobile',
    description:
      'Cross-platform Flutter mobile application designed for remote field technicians to conduct inspections, record telemetry, and sync data seamlessly.',
    problem:
      'Field technicians operate in remote environments with zero or intermittent internet connectivity, leading to data loss when using traditional online apps.',
    solution:
      'Engineered an offline-first mobile app using Flutter and SQLite for local persistence, utilizing a bidirectional sync engine with Firebase Firestore when connectivity resumes.',
    role: 'Software Engineer',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'SQLite', 'Firebase Auth', 'Android Java', 'Swift'],
    architecture: 'MVVM architecture with Bloc/Provider state management, abstracting the local SQLite cache and remote Firestore repository behind unified interfaces.',
    keyFeatures: [
      'Zero-latency offline data entry with local SQLite transactional database',
      'Automated background synchronization engine with conflict resolution',
      'Camera integration with image compression and metadata geotagging',
      'Biometric and Firebase JWT authentication session management',
      'Custom UI design system with high-contrast outdoor readability mode',
    ],
    githubUrl: 'https://github.com/vathanahong/fieldops-flutter-inspection',
    demoUrl: 'https://fieldops-mobile.demo.placeholder.dev',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    badge: 'Mobile Offline-First Sync',
  },
  {
    id: 'dotnet-api-gateway',
    title: 'Distributed RESTful API & Service Layer Engine',
    category: 'backend',
    description:
      'High-performance backend service handling authentication, domain validation, and persistent transaction processing for multi-client applications.',
    problem:
      'Existing legacy endpoints had tight coupling to database schemas, duplicated business logic across endpoints, and poor throughput under concurrent loads.',
    solution:
      'Refactored the backend into ASP.NET Core utilizing Clean Architecture, Dependency Injection, and Repository Pattern with PostgreSQL for decoupled scalability.',
    role: 'Software Engineer',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'REST API', 'PostgreSQL', 'Entity Framework', 'Docker', 'Postman'],
    architecture: 'Layered RESTful Web API with Dependency Injection, CQRS-inspired service segregation, and comprehensive Swagger documentation.',
    keyFeatures: [
      'RESTful endpoints adhering strictly to HTTP verbs and idempotent semantics',
      'Entity Framework Core with PostgreSQL migrations and query execution optimization',
      'Centralized exception handling middleware with RFC 7807 problem details',
      'JWT token authentication with refresh tokens and claims-based authorization',
      'Containerized with multi-stage Docker builds for rapid CI/CD deployment',
    ],
    githubUrl: 'https://github.com/vathanahong/dotnet-clean-architecture-api',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    badge: 'Backend Core Service',
  },
  {
    id: 'angular-analytics-dashboard',
    title: 'CloudMetrics: Enterprise Analytics Web Dashboard',
    category: 'web',
    description:
      'Rich web application providing operational telemetry, customizable widget dashboards, and data filtering for enterprise operations managers.',
    problem:
      'Stakeholders lacked a unified dashboard to visualize real-time operations, forcing them to manually compile reports from multiple database extracts.',
    solution:
      'Built a reactive Angular Single Page Application featuring modular widgets, dynamic charting, RxJS state management, and reusable UI components.',
    role: 'Software Engineer',
    technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap', 'REST API', 'Jasmine', 'Playwright'],
    architecture: 'Feature-module based Angular structure with smart container and dumb presentational components, coupled with reactive RxJS observables.',
    keyFeatures: [
      'Interactive multi-metric charts with customizable date-range filtering',
      'Lazy-loaded feature modules reducing initial bundle load time by 45%',
      'Strict TypeScript data models matching backend REST API contracts',
      'Automated UI testing with Jasmine unit tests and Playwright end-to-end flows',
      'WCAG AA accessible color palettes and keyboard navigable grid tables',
    ],
    githubUrl: 'https://github.com/vathanahong/angular-cloudmetrics-dashboard',
    demoUrl: 'https://cloudmetrics.demo.placeholder.dev',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Angular SPA & RxJS',
  },
  {
    id: 'desktop-inventory-controller',
    title: 'WarehouseLogix: Industrial Desktop Controller',
    category: 'desktop',
    description:
      'Reliable C# Windows Forms desktop application developed for industrial workstation barcode scanners, local printer integration, and inventory logging.',
    problem:
      'Factory floor operators required a lightweight desktop utility with zero browser lag and direct serial port hardware connectivity to label printers.',
    solution:
      'Constructed a stable C# .NET Windows Forms desktop application directly communicating with USB barcode scanners and local SQL Server instances.',
    role: 'Software Engineer',
    technologies: ['C#', '.NET', 'Windows Forms', 'SQL Server', 'Entity Framework', 'SSMS'],
    architecture: 'MVC pattern adapted for desktop UI event dispatching, separating hardware driver communication from local database persistence.',
    keyFeatures: [
      'Low-latency serial port and USB hardware scanning event listeners',
      'Local SQL Server connection with resilient reconnection handling',
      'Thermal barcode label printing integration with custom layout formatting',
      'Rapid keyboard shortcut navigation designed for busy warehouse workers',
      'Automated daily database backups and transactional event auditing',
    ],
    githubUrl: 'https://github.com/vathanahong/warehouselogix-csharp-winforms',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Desktop & Hardware Integration',
  },
  {
    id: 'design-system-spec',
    title: 'OmniUI: Enterprise Design System & Interactive Prototype',
    category: 'uiux',
    description:
      'Complete UI/UX design system, component library tokens, and interactive multi-platform prototypes built for consistent enterprise product experiences.',
    problem:
      'Inconsistent button styles, divergent color schemes, and conflicting form behaviors across web and mobile platforms caused user confusion.',
    solution:
      'Conducted user research, designed a unified component system in Figma with design tokens, wireframed user journeys in Miro, and prototyped key flows.',
    role: 'Software Engineer',
    technologies: ['Figma', 'Miro', 'Wireframing', 'User Flow', 'Prototyping', 'UI Design', 'UX Design', 'System Analysis'],
    architecture: 'Atomic design methodology (Atoms, Molecules, Organisms, Templates, Pages) mapped directly to Angular and Flutter component hierarchies.',
    keyFeatures: [
      'Complete typography scale, accessible color palette, and spacing tokens',
      'Interactive Figma prototypes showcasing complex multi-step modal forms',
      'User journey maps validating edge cases and error prevention states',
      'Shared design-to-code token guidelines for frontend and mobile engineers',
      'User testing feedback documentation incorporating stakeholder iterations',
    ],
    githubUrl: 'https://github.com/vathanahong/omniui-enterprise-design-system',
    demoUrl: 'https://figma.com/@placeholder_vathanahong',
    isPlaceholder: true,
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?auto=format&fit=crop&w=1200&q=80',
    badge: 'Figma & Design Tokens',
  },
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'presentation',
    title: '1. Presentation Layer',
    subtitle: 'Client Interfaces & User Experience',
    tech: ['Angular', 'Flutter', 'TypeScript', 'Dart', 'HTML5/CSS3'],
    description:
      'Modern, responsive client applications built with Angular for web and Flutter for cross-platform mobile. Employs component modularity, reactive state streams, and strict client-side validation before dispatching network requests.',
    responsibilities: [
      'User input sanitization and client-side form validation',
      'Reactive state management (RxJS observables / Bloc state streams)',
      'Consistent design system tokens matching Figma specifications',
      'Local caching and offline state reconciliation',
    ],
    icon: 'Layout',
  },
  {
    id: 'api-gateway',
    title: '2. RESTful API & Transport Layer',
    subtitle: 'Contracts, Routing & Security Gateways',
    tech: ['REST API', 'JSON', 'JWT Bearer', 'Swagger/OpenAPI', 'HTTP/HTTPS'],
    description:
      'Standardized REST endpoints enforcing HTTP semantics, JSON payloads, resource-based URIs, and secure token authorization. Functions as the strict contract between frontends and backend business engines.',
    responsibilities: [
      'JWT authentication and claims-based authorization checks',
      'Request model binding and model state validation',
      'Rate limiting, CORS policies, and security header enforcement',
      'API versioning and OpenAPI / Swagger specification maintenance',
    ],
    icon: 'Network',
  },
  {
    id: 'backend-core',
    title: '3. ASP.NET Core Application Layer',
    subtitle: 'Controllers, Middleware & Dependency Injection',
    tech: ['C#', '.NET', 'ASP.NET Core', 'Middleware', 'IoC Container'],
    description:
      'The core runtime environment orchestrating incoming requests through modular middleware pipelines. Configures the built-in Dependency Injection container to decouple service dependencies and guarantee thread safety.',
    responsibilities: [
      'Global exception handling middleware transforming errors to standard RFC 7807',
      'IoC Container configuration (Transient, Scoped, Singleton lifetimes)',
      'Cross-cutting logging and request execution timing filters',
      'Mapping external DTO contracts to internal domain command models',
    ],
    icon: 'Cpu',
  },
  {
    id: 'service-layer',
    title: '4. Service & Domain Business Layer',
    subtitle: 'Transactional Logic & Domain Rules',
    tech: ['Clean Architecture', 'SOLID Principles', 'Domain Models', 'Interfaces'],
    description:
      'Encapsulates pure business rules and domain behaviors independent of UI frameworks or database technology. Implements SOLID principles to ensure code is testable, extensible, and free of database-specific leakage.',
    responsibilities: [
      'Execution of business workflows and transactional validations',
      'Enforcement of domain constraints and enterprise calculation rules',
      'Orchestration between multiple repository abstractions',
      'Isolation enabling 100% unit-testability using mock dependencies',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 'repository-layer',
    title: '5. Repository & Data Access Layer',
    subtitle: 'Abstraction over Data Sources',
    tech: ['Repository Pattern', 'Entity Framework Core', 'LINQ', 'Unit of Work'],
    description:
      'Provides a clean abstraction between domain logic and physical storage. Mediates between the data source layer and the business layer using strongly typed repository interfaces and Entity Framework Core.',
    responsibilities: [
      'Query encapsulation via LINQ with projection optimization',
      'Decoupling business logic from specific ORM implementations',
      'Unit of Work coordination across multiple entity saves',
      'Audit stamping (CreatedDate, ModifiedBy, SoftDelete flags)',
    ],
    icon: 'Layers',
  },
  {
    id: 'persistence-layer',
    title: '6. Persistence & Database Storage',
    subtitle: 'ACID Storage & Distributed State',
    tech: ['PostgreSQL', 'SQL Server', 'SQLite', 'Firebase Firestore'],
    description:
      'Durable, ACID-compliant relational databases for structured enterprise transactions alongside NoSQL/embedded databases for mobile offline-first synchronizations.',
    responsibilities: [
      'Relational integrity, foreign key constraints, and normalized schemas',
      'Index optimization for high-cardinality queries and join operations',
      'Local SQLite embedded storage on mobile clients for zero-latency offline use',
      'Firestore real-time document listeners for distributed updates',
    ],
    icon: 'Database',
  },
];

export const ARCHITECTURE_PATTERNS: ArchitecturePattern[] = [
  {
    name: 'Clean Architecture',
    fullName: 'Clean Architecture / Onion Architecture',
    description:
      'Divides software into concentric rings where dependencies point inward toward the core domain. The core domain and application rules remain independent of UI, database, or external frameworks.',
    application:
      'Applied in C#/.NET backend APIs and Angular frontends to ensure database changes or UI revamps never break core domain calculations.',
    exampleSnippet: `// Inward dependency: Application relies on Core Domain abstractions
public interface IOrderRepository {
    Task<Order?> GetByIdAsync(Guid id);
    Task AddAsync(Order order);
}

public class OrderService : IOrderService {
    private readonly IOrderRepository _repository;
    public OrderService(IOrderRepository repository) => _repository = repository;
}`,
  },
  {
    name: 'SOLID Principles',
    fullName: 'Single Responsibility, Open/Closed, Liskov, Interface Segregation, DI',
    description:
      'Five core object-oriented design principles that prevent code rot, simplify testing, and allow systems to evolve predictably over multi-year lifecycles.',
    application:
      'Guides every class and service created across C#, TypeScript, and Dart—preventing bloated god-classes and rigid coupling.',
    exampleSnippet: `// Interface Segregation & Dependency Inversion in C#
public interface INotificationSender {
    Task SendAsync(string recipient, string message);
}

public class EmailSender : INotificationSender { ... }
public class SmsSender : INotificationSender { ... }`,
  },
  {
    name: 'Repository Pattern',
    fullName: 'Repository & Unit of Work Pattern',
    description:
      'Encapsulates the logic required to access data sources, centralizing query handling and providing an in-memory collection-like interface to the domain layer.',
    application:
      'Enables swapping between PostgreSQL, SQL Server, or in-memory test doubles during automated testing without modifying business logic.',
    exampleSnippet: `// Generic or domain-specific repository contract
public interface IRepository<TEntity> where TEntity : class {
    Task<IReadOnlyList<TEntity>> ListAllAsync();
    Task<TEntity> AddAsync(TEntity entity);
    Task UpdateAsync(TEntity entity);
    Task DeleteAsync(TEntity entity);
}`,
  },
  {
    name: 'MVVM',
    fullName: 'Model - View - ViewModel',
    description:
      'Architectural pattern that separates development of the graphical user interface from the development of business logic and backend data models.',
    application:
      'Standard practice in Flutter mobile development and desktop apps, utilizing reactive streams and value notifiers to bind UI states seamlessly.',
    exampleSnippet: `// Flutter ViewModel / State Controller with reactive streams
class InspectionViewModel extends ChangeNotifier {
  final InspectionRepository _repo;
  InspectionState _state = InspectionState.initial();

  Future<void> submitInspection(InspectionData data) async {
    _state = InspectionState.loading();
    notifyListeners();
    // execute through repository
  }
}`,
  },
  {
    name: 'Dependency Injection',
    fullName: 'Inversion of Control via Dependency Injection',
    description:
      'Technique in which an object receives other objects that it depends on, rather than creating them internally, maximizing modularity and mockability.',
    application:
      'Configured in ASP.NET Core Startup/Program and Angular Injectable services to inject repositories, HTTP clients, and configuration options cleanly.',
    exampleSnippet: `// ASP.NET Core Program.cs service registration
builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Default")));`,
  },
];

export const ACADEMIC_PERFORMANCE_SUMMARY =
  'Academic Performance: Year 1 GPA: 3.78 • Year 2 GPA: 3.67 • Year 3 GPA: 3.55 • Cumulative Average: 3.67 / 4.00';

export const EDUCATION_DATA: EducationMilestone[] = [
  {
    year: 'Year 1',
    gpa: 3.78,
    status: 'Completed with High Distinction',
    highlights: ['Algorithms & Data Structures Foundation', 'Object-Oriented Programming (OOP) in Java & C++', 'Computer Architecture & Logic Design'],
  },
  {
    year: 'Year 2',
    gpa: 3.67,
    status: 'Completed with Academic Honors',
    highlights: ['Database Management Systems & Relational Theory', 'Advanced Web Development & Client-Server Architecture', 'Discrete Mathematics & Probability'],
  },
  {
    year: 'Year 3',
    gpa: 3.55,
    status: 'Completed with Dean-Level Standing',
    highlights: ['Software Engineering Methodologies & Software Architecture', 'Operating Systems, Concurrency & Networking', 'System Analysis, Design Patterns & Quality Assurance'],
  },
  {
    year: 'Year 4',
    gpa: 'Not Yet Available',
    status: 'Currently Studying — GPA Not Yet Released (Final Year)',
    highlights: ['Capstone Enterprise Engineering Project', 'Distributed Systems & Cloud Computing', 'Advanced Security, Testing & System Deployment'],
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: 1,
    title: 'University Computer Science Student',
    timeframe: 'Foundation',
    description:
      'Began rigorous computer science degree, mastering foundational algorithms, data structures, discrete mathematics, and object-oriented fundamentals with top-tier academic scores.',
    technologies: ['C++', 'Java', 'OOP', 'Data Structures', 'Algorithms'],
    icon: 'GraduationCap',
  },
  {
    step: 2,
    title: 'Frontend Development Mastery',
    timeframe: 'Web Foundations',
    description:
      'Dived deeply into responsive web development, mastering HTML5 semantics, CSS3 layouts, modern JavaScript ES6+, and foundational web accessibility principles.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Bootstrap'],
    icon: 'Code',
  },
  {
    step: 3,
    title: 'Flutter & Mobile Development',
    timeframe: '4 Years Experience',
    description:
      'Built and deployed cross-platform mobile apps for Android and iOS with Flutter and Dart, integrating Firebase, real-time listeners, and local SQLite offline persistence.',
    technologies: ['Flutter', 'Dart', 'Android Java', 'Swift', 'Firebase', 'SQLite'],
    icon: 'Smartphone',
  },
  {
    step: 4,
    title: 'Angular Enterprise Framework',
    timeframe: '3 Years Experience',
    description:
      'Specialized in Angular for scalable enterprise web applications, mastering TypeScript, RxJS reactive programming, dependency injection, lazy routing, and modular codebases.',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx Patterns', 'Jasmine'],
    icon: 'Globe',
  },
  {
    step: 5,
    title: 'C# & .NET Backend Architecture',
    timeframe: '2 Years Experience',
    description:
      'Expanded into enterprise backend engineering with C#, .NET, and ASP.NET Core, building high-throughput REST APIs, Entity Framework Core ORM models, and database systems.',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'SQL Server', 'PostgreSQL'],
    icon: 'Server',
  },
  {
    step: 6,
    title: 'Enterprise Remote Training & Work',
    timeframe: '2022 — Present (US Company)',
    description:
      'Joined a US-based company remotely, completing 2 years of structured training under senior engineers before stepping into 1 year as a full-time Software Engineer, delivering commercial software solutions and maintaining reliable cross-timezone collaboration.',
    technologies: ['Enterprise Systems', 'RESTful Services', 'Docker', 'Git', 'CI/CD Pipelines'],
    icon: 'Briefcase',
  },
  {
    step: 7,
    title: 'Team Leadership',
    timeframe: 'Mentorship & Coordination',
    description:
      'Took on technical leadership responsibilities: coordinating feature branches, leading architectural discussions, reviewing team code, and mentoring junior colleagues.',
    technologies: ['Code Review', 'Technical Architecture', 'Task Distribution', 'Mentoring'],
    icon: 'Users',
  },
  {
    step: 8,
    title: 'Scrum Master Responsibilities',
    timeframe: 'Agile Delivery',
    description:
      'Facilitated Agile sprint ceremonies including Daily Scrums, Sprint Planning, Reviews, and Retrospectives, systematically eliminating blockers and optimizing team velocity.',
    technologies: ['Agile / Scrum', 'Sprint Planning', 'Backlog Grooming', 'Retrospectives'],
    icon: 'Compass',
  },
  {
    step: 9,
    title: 'Software Engineer',
    timeframe: 'Present & Beyond',
    description:
      'A versatile, production-tested software engineer combining comprehensive full-stack expertise, mobile development, architectural discipline, and proven team leadership.',
    technologies: ['Angular', 'C#/.NET', 'Flutter', 'PostgreSQL', 'Clean Architecture', 'System Analysis'],
    icon: 'Award',
  },
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: 'enterprise-clean-architecture-dotnet',
    description:
      'Production-ready boilerplate implementing Clean Architecture with ASP.NET Core, Entity Framework Core, PostgreSQL, and CQRS patterns.',
    language: 'C#',
    languageColor: '#178600',
    stars: 28,
    forks: 7,
    isPlaceholder: true,
    url: 'https://github.com/vathanahong/enterprise-clean-architecture-dotnet',
    topics: ['csharp', 'dotnet-core', 'clean-architecture', 'postgresql', 'repository-pattern'],
  },
  {
    name: 'flutter-offline-first-template',
    description:
      'Robust Flutter starter kit featuring offline-first architecture with SQLite caching and automated Firebase Firestore bidirectional sync.',
    language: 'Dart',
    languageColor: '#00B4AB',
    stars: 42,
    forks: 11,
    isPlaceholder: true,
    url: 'https://github.com/vathanahong/flutter-offline-first-template',
    topics: ['flutter', 'dart', 'offline-first', 'sqlite', 'firestore', 'state-management'],
  },
  {
    name: 'angular-enterprise-ui-kit',
    description:
      'Modular Angular 17+ component library with strict TypeScript models, accessible design tokens, and comprehensive Jasmine unit tests.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 35,
    forks: 9,
    isPlaceholder: true,
    url: 'https://github.com/vathanahong/angular-enterprise-ui-kit',
    topics: ['angular', 'typescript', 'design-system', 'rxjs', 'jasmine-testing'],
  },
  {
    name: 'playwright-selenium-e2e-suite',
    description:
      'Automated end-to-end and UI regression testing framework utilizing Playwright and Selenium WebDriver for cross-browser enterprise test execution.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    stars: 19,
    forks: 4,
    isPlaceholder: true,
    url: 'https://github.com/vathanahong/playwright-selenium-e2e-suite',
    topics: ['playwright', 'selenium', 'e2e-testing', 'automation', 'qa'],
  },
];

export const UI_UX_STEPS = [
  {
    step: 1,
    title: 'Research',
    description: 'Investigating user pain points, business requirements, competitor landscapes, and technical constraints.',
    icon: 'Search',
    tools: ['Miro', 'Stakeholder Interviews'],
  },
  {
    step: 2,
    title: 'Requirement Analysis',
    description: 'Transforming qualitative user needs into structured functional and non-functional engineering specifications.',
    icon: 'FileText',
    tools: ['User Stories', 'Acceptance Criteria'],
  },
  {
    step: 3,
    title: 'User Flow',
    description: 'Mapping out end-to-end navigational paths, decision nodes, and exception handling branches.',
    icon: 'GitFork',
    tools: ['Miro', 'Journey Mapping'],
  },
  {
    step: 4,
    title: 'Wireframe',
    description: 'Constructing low-fidelity structural blueprints to validate layout hierarchy before visual styling.',
    icon: 'LayoutGrid',
    tools: ['Figma Low-Fi', 'Balsamiq'],
  },
  {
    step: 5,
    title: 'UI Design',
    description: 'Creating high-fidelity components, consistent design tokens, accessible color palettes, and typographic hierarchies.',
    icon: 'Palette',
    tools: ['Figma Design System', 'Auto-Layout'],
  },
  {
    step: 6,
    title: 'Prototype',
    description: 'Building clickable interactive micro-interaction prototypes for user testing and stakeholder review.',
    icon: 'Play',
    tools: ['Figma Interactive Components'],
  },
  {
    step: 7,
    title: 'Development',
    description: 'Translating verified designs into modular Angular, Flutter, or .NET code with pixel-perfect precision.',
    icon: 'Code',
    tools: ['VS Code', 'Visual Studio', 'Git'],
  },
  {
    step: 8,
    title: 'Testing',
    description: 'Running unit, integration, and UI end-to-end automation test suites across simulated environments.',
    icon: 'CheckCircle',
    tools: ['Playwright', 'Jasmine', 'Selenium'],
  },
  {
    step: 9,
    title: 'Deployment',
    description: 'Packaging containerized builds via Docker and staging for continuous integration pipelines.',
    icon: 'Rocket',
    tools: ['Docker', 'GitHub Actions'],
  },
];
