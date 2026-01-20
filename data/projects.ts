export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
  imageGradient?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    id: 'grubdash',
    title: 'GrubDash',
    description: 'Scalable, event-driven food delivery platform with real-time tracking and personalized recommendations.',
    longDescription: 'Designed and deployed a scalable, event-driven food delivery platform using AWS Lambda, DynamoDB, SQS, and WebSockets, capable of processing 100,000+ concurrent orders/day with real-time tracking and dynamic state transitions. Integrated real-time personalized restaurant recommendations using AWS Personalize, leveraging 10,000+ user-item interactions and live event tracking to dynamically adapt suggestions based on customer behavior and context.',
    technologies: ['TypeScript', 'Python', 'JavaScript', 'CSS', 'AWS Lambda', 'DynamoDB', 'SQS', 'WebSockets', 'AWS Personalize'],
    githubUrl: 'https://github.com/satyakamala03/GrubDash',
    liveUrl: undefined,
    imageGradient: 'from-orange-400 via-red-500 to-pink-500',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  },
  {
    id: 'gesturedraw',
    title: 'GestureDraw',
    description: 'Gesture-based drawing UI with voice control for creative tasks, featuring accessibility features.',
    longDescription: 'Created gesture-based drawing UI using MediaPipe and Keras for color selection, brush control, and canvas actions. Built a threaded system for continuous voice input using Google Speech Recognition enabling fluid user control in creative tasks.',
    technologies: ['Python', 'HTML', 'MediaPipe', 'Keras', 'OpenCV', 'Google SpeechRecognition', 'Multi-threading'],
    githubUrl: 'https://github.com/satyakamala03',
    liveUrl: undefined,
    imageGradient: 'from-purple-400 via-pink-500 to-red-500',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
  },
  {
    id: 'MedGemmaReportGen',
    title: 'Medical Chest X-ray Report Generation Pipeline',
    description: 'Designed a distributed medical imaging inference system with Spark and Med-GEMMA, scaling chest X-ray report generation to thousands of images with end-to-end latency and throughput analysis.',
    longDescription: 'This project implements an end-to-end, distributed system for generating full chest X-ray radiology reports using a large multimodal model (Med-GEMMA-4B). The pipeline is designed as a production-style inference system, combining Apache Spark for large-scale data processing, GPU-accelerated model inference, and Apache Kafka for streaming request ingestion. The system supports both batch load-testing and real-time streaming modes. In batch mode, the pipeline processes increasing image volumes (from tens to thousands of X-rays per run), automatically tuning Spark partitioning and GPU batch sizes to maximize throughput while staying within GPU memory constraints. In streaming mode, Kafka is used to simulate bursty, real-world traffic, enabling the system to process 1,000+ concurrent requests while maintaining stable latency. To evaluate scalability and reliability, the project includes comprehensive performance instrumentation, collecting per-image latency percentiles (p50/p95/p99), throughput metrics, error rates, and queue drain times. Results are aggregated across multiple runs and visualized through automated reports and plots, providing clear insight into system capacity, bottlenecks, and behavior under load. Overall, this project demonstrates practical experience in distributed systems, performance engineering, and production-grade ML inference pipelines, with a strong emphasis on scalability, observability, and real-world system constraints.',
    technologies: ['Python', 'Distributed Systems', 'Large Scale Data processing', 'Generative AI', 'Apache Spark', 'Apache Kafka', 'Multi-threading', 'Batch Processing'],
    githubUrl: 'https://github.com/satyakamala03/Medgemma_project',
    liveUrl: undefined,
    imageGradient: 'from-purple-400 via-pink-500 to-red-500',
    imageUrl: 'https://unsplash.com/photos/a-woman-sitting-in-front-of-a-laptop-computer-AAF87btzg9c',
  },
  // {
  //   id: 'ai-photo-search',
  //   title: 'AI Photo Search',
  //   description: 'AI-powered photo search application with intelligent image recognition and search capabilities.',
  //   longDescription: 'Built an AI-powered photo search application that uses advanced image recognition and machine learning algorithms to enable intelligent search capabilities. The application allows users to search through their photo collections using natural language queries and visual similarity matching.',
  //   technologies: ['JavaScript', 'AI/ML', 'Image Processing'],
  //   githubUrl: 'https://github.com/satyakamala03/AI_Photo_Search',
  //   liveUrl: undefined,
  //   imageGradient: 'from-blue-400 via-cyan-500 to-teal-500',
  //   imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  // },
  // {
  //   id: 'dining-concierge-chatbot',
  //   title: 'Dining Concierge Chatbot',
  //   description: 'Intelligent chatbot for restaurant recommendations and dining suggestions.',
  //   longDescription: 'Developed an intelligent chatbot system that provides personalized restaurant recommendations and dining suggestions. The chatbot uses natural language processing to understand user preferences and queries, providing relevant restaurant suggestions based on cuisine type, location, price range, and user reviews.',
  //   technologies: ['JavaScript', 'NLP', 'Chatbot'],
  //   githubUrl: 'https://github.com/satyakamala03/DiningConciergeChatbot',
  //   liveUrl: undefined,
  //   imageGradient: 'from-green-400 via-emerald-500 to-teal-500',
  //   imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
  // },
]
