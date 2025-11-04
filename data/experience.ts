export interface STARDetail {
  situation: string
  task: string
  action: string
  result: string
}

export interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
  starDetails?: STARDetail[]
}


export const experiences: ExperienceItem[] = [
  {
    id: 'nyu-ta',
    title: 'Teaching Assistant',
    company: 'New York University - Human-Computer Interaction',
    location: 'New York, NY',
    period: 'Sep 2024 - Present',
    description: [
      'Assisting students in understanding HCI principles, interaction design patterns, and user research methodologies.',
      'Conducting office hours and lab sessions to help students with projects and assignments.',
      'Grading assignments and providing constructive feedback on design portfolios.',
    ],
    technologies: ['Teaching', 'HCI', 'User Research', 'Design'],
    starDetails: [
      {
        situation: 'Students in the HCI course were struggling to understand complex interaction design patterns and user research methodologies, leading to confusion and lower assignment quality.',
        task: 'Help students grasp fundamental HCI concepts, design patterns, and research methods through clear explanations and hands-on guidance.',
        action: 'I conduct regular office hours and lab sessions where I break down complex concepts into digestible explanations. I use real-world examples and interactive demonstrations to illustrate design patterns. I also provide one-on-one support for students working on projects and assignments, tailoring my explanations to their learning styles.',
        result: 'Students show improved understanding of HCI principles, with better assignment submissions and more confident participation in class discussions. The office hours have become a valuable resource that students consistently utilize.',
      },
      {
        situation: 'Students needed additional support outside of regular class hours to complete assignments and projects, but limited resources were available.',
        task: 'Provide accessible support through office hours and lab sessions to help students successfully complete their coursework.',
        action: 'I schedule regular office hours multiple times per week and conduct structured lab sessions focused on hands-on project work. I prepare supplementary materials and examples to reinforce concepts taught in class. I actively engage with students to identify knowledge gaps and address them promptly.',
        result: 'Office hours attendance has increased significantly, and students report feeling more confident about their assignments. Many students have successfully completed complex projects with improved quality thanks to the additional support.',
      },
      {
        situation: 'Grading needed to be consistent and provide meaningful feedback to help students improve their design portfolios and understanding of HCI principles.',
        task: 'Grade assignments fairly and provide constructive, actionable feedback that helps students grow in their design skills.',
        action: 'I developed a systematic grading approach that evaluates assignments against clear rubrics. I provide detailed, constructive feedback on each submission, highlighting strengths and specific areas for improvement. I include suggestions for design enhancements and references to relevant HCI principles.',
        result: 'Students receive consistent, valuable feedback that helps them understand their performance and improve future work. The detailed feedback has led to iterative improvements in student portfolios and better learning outcomes.',
      },
    ],
  },
  {
    id: 'paypal-se1',
    title: 'Software Engineer 1',
    company: 'PayPal',
    location: 'Remote',
    period: 'Jul 2022 - Jul 2024',
    description: [
      'Independently expanded the availability of new Oracle Connection Cache (OCC) instances, enabling 70+ teams annually—doubling adoption from the previous year and earning a SPOT BONUS for driving this initiative.',
      'Developed a Python-based command-line tool to automate CNAME configuration, saving 2000+ hours annually, reducing DNS misconfigurations by 99% and improving operational efficiency.',
      'Automated Oracle/MySQL databases password setup with a Python script, improving compliance and eliminating configuration errors by 99% that delayed developer access.',
      'Implemented Java and Lua based unit tests to simulate database replication delays in QA, enabling 15+ teams to diagnose sync issues before release and avoid production-only detection.',
      'Created deployment data reports using Python and Shell scripts to support migration of GoPay database servers in alignment with data residency and compliance regulations.',
      'Built an end-to-end observability pipeline for OCC flows, replacing legacy log-file parsing with OpenTelemetry-based monitoring, logging, tracing, and alerting to eliminate server delays and enable real-time metrics.',
    ],
    technologies: ['Python', 'Java', 'Lua', 'Shell Scripting', 'Oracle', 'MySQL', 'OpenTelemetry', 'Docker'],
    starDetails: [
      {
        situation: 'Teams were struggling with manual OCC instance setup, causing delays and inconsistent configurations across the organization.',
        task: 'I needed to expand OCC instance availability and streamline the setup process to enable more teams to use this critical infrastructure.',
        action: 'I independently designed and implemented an automated provisioning system that simplified the OCC instance creation process. I worked closely with infrastructure teams to understand requirements, built integration scripts, and created comprehensive documentation and training materials.',
        result: 'Successfully enabled 70+ teams annually to use OCC instances, doubling adoption from the previous year. This initiative earned me a SPOT BONUS and significantly improved infrastructure utilization across PayPal.',
      },
      {
        situation: 'DNS misconfigurations were causing frequent production issues and deployment delays, with engineers manually configuring CNAME records in a time-consuming and error-prone process.',
        task: 'Automate the CNAME configuration process to eliminate human errors and reduce the time spent on routine DNS tasks.',
        action: 'I developed a Python-based command-line tool that automated CNAME configuration by integrating with our DNS management APIs. The tool included validation, error handling, and rollback capabilities. I also created extensive documentation and provided training sessions for the engineering teams.',
        result: 'The tool saved over 2000 hours annually and reduced DNS misconfigurations by 99%. This dramatically improved deployment reliability and freed up engineers to focus on more critical work.',
      },
      {
        situation: 'Database password setup was a manual, error-prone process that often delayed developer access and caused compliance issues due to inconsistent configurations.',
        task: 'Create an automated solution for database password setup that ensures compliance and eliminates configuration errors.',
        action: 'I built a Python script that automated the entire password setup workflow, including validation against compliance rules, secure storage, and automated notifications. The script integrated with our existing database management systems and included comprehensive logging and audit trails.',
        result: 'Eliminated 99% of configuration errors and significantly improved compliance. Developer access delays were virtually eliminated, and the process became fully automated, saving hundreds of hours per quarter.',
      },
      {
        situation: 'QA teams were unable to properly test database replication delays before production deployments, leading to production-only issues that were costly to fix.',
        task: 'Create a testing framework that simulates database replication delays in QA environments to catch sync issues before production.',
        action: 'I developed Java and Lua-based unit tests that simulate realistic database replication delays. I integrated these tests into the QA pipeline and created comprehensive test scenarios covering various delay patterns and edge cases.',
        result: 'Enabled 15+ teams to diagnose and fix sync issues in QA before release, preventing production-only detection. This significantly reduced production incidents and improved deployment confidence.',
      },
      {
        situation: 'GoPay database server migration needed to comply with data residency and compliance regulations, but lacked comprehensive deployment data reports.',
        task: 'Create deployment data reports to support the migration of GoPay database servers while ensuring compliance with data residency regulations.',
        action: 'I developed Python and Shell scripts that collected and analyzed deployment data from multiple sources. I created comprehensive reports that tracked server configurations, data locations, and compliance status. I worked closely with compliance teams to ensure all requirements were met.',
        result: 'Successfully supported the migration of GoPay database servers in full compliance with data residency regulations. The reports provided clear visibility into the migration process and ensured no compliance violations.',
      },
      {
        situation: 'OCC flows lacked proper observability, with teams relying on legacy log-file parsing that was slow, error-prone, and didn\'t provide real-time insights.',
        task: 'Build a modern observability pipeline for OCC flows that replaces legacy log parsing with real-time monitoring and alerting.',
        action: 'I designed and implemented an end-to-end observability pipeline using OpenTelemetry. I integrated monitoring, logging, tracing, and alerting capabilities. I created dashboards and alerting rules that provided real-time visibility into OCC flow performance.',
        result: 'Eliminated server delays and enabled real-time metrics. Teams can now proactively identify and resolve issues before they impact users. The observability pipeline has become a critical tool for maintaining system reliability.',
      },
    ],
  },
  {
    id: 'paypal-intern',
    title: 'Software Engineer Intern',
    company: 'PayPal',
    location: 'Remote',
    period: 'Feb 2022 - Jun 2022',
    description: [
      'Reduced holiday readiness prep time from 4 months to 3–5 weeks for 500+ applications by building an autoscaling CLI tool that dynamically adjusts OCC instances, also minimizing manual interventions and errors.',
      'Automated data collection from observability reports to support DB migration from Data Center Group (DCG) to Cloud Compute Group (CCG), reducing manual effort by 15,000 hours enabling efficient deployment planning across AZs.',
    ],
    technologies: ['Python', 'CLI Tools', 'AWS', 'Observability'],
    starDetails: [
      {
        situation: 'Holiday readiness preparation for 500+ applications was taking 4 months, requiring extensive manual intervention and causing errors that delayed critical deployments during peak seasons.',
        task: 'Build an automated solution that reduces holiday readiness prep time and eliminates manual errors for hundreds of applications.',
        action: 'I developed an autoscaling CLI tool that dynamically adjusts OCC instances based on application load and requirements. The tool automated the entire holiday readiness workflow, including instance provisioning, configuration, and validation. I integrated it with AWS services and created comprehensive error handling and rollback capabilities.',
        result: 'Reduced holiday readiness prep time from 4 months to just 3-5 weeks for 500+ applications. Manual interventions and errors were minimized, significantly improving deployment reliability during critical holiday periods.',
      },
      {
        situation: 'Database migration from Data Center Group to Cloud Compute Group required extensive manual data collection from observability reports, consuming thousands of hours and prone to errors.',
        task: 'Automate data collection from observability reports to support efficient DB migration planning and reduce manual effort.',
        action: 'I built automation scripts that collected and aggregated data from multiple observability sources. The scripts processed reports, extracted relevant metrics, and generated comprehensive migration planning reports. I integrated with various observability tools and created data validation mechanisms.',
        result: 'Reduced manual effort by 15,000 hours, enabling efficient deployment planning across Availability Zones. The automated data collection ensured accuracy and consistency, significantly accelerating the migration timeline.',
      },
    ],
  },
  {
    id: 'rivigo-intern',
    title: 'Software Engineering Intern',
    company: 'Rivigo (Mahindra) Logistics',
    location: 'India',
    period: 'Jun 2021 - Dec 2021',
    description: [
      'Developed REST APIs for the e-invoicing system to automate final bill report generation, eliminating manual edits and saving 15% developer time at scale.',
      'Participated in the full API lifecycle, including development, integration, testing, documentation, and code reviews.',
    ],
    technologies: ['REST APIs', 'Full Stack Development', 'Python', 'JavaScript'],
    starDetails: [
      {
        situation: 'The e-invoicing system required manual edits for final bill report generation, causing delays and consuming significant developer time at scale.',
        task: 'Develop REST APIs that automate final bill report generation and eliminate the need for manual edits.',
        action: 'I designed and developed REST APIs for the e-invoicing system that automated the entire bill report generation process. I integrated the APIs with existing systems, implemented proper error handling, and created comprehensive documentation. I also built automated testing to ensure reliability.',
        result: 'Eliminated manual edits completely and saved 15% of developer time at scale. The automated system significantly improved efficiency and reduced errors in bill report generation.',
      },
      {
        situation: 'The team needed comprehensive support across the full API development lifecycle to ensure quality and maintainability.',
        task: 'Contribute to all aspects of API development including design, implementation, testing, documentation, and code reviews.',
        action: 'I actively participated in the full API lifecycle. I collaborated with teams on API design, implemented robust solutions, wrote comprehensive tests, created detailed documentation, and participated in code reviews to ensure code quality and best practices.',
        result: 'Delivered high-quality APIs that met all requirements and standards. My contributions across the development lifecycle helped establish best practices and improved the overall quality of the codebase.',
      },
    ],
  },
]
