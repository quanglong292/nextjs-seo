import {
  Upload,
  CircuitBoard,
  Cpu,
  Code,
  Paintbrush,
  MessageSquare,
  Clock,
  UserPlus,
  HeadphonesIcon,
  Globe,
  Terminal,
  Mail,
  Webhook,
  Puzzle,
} from "lucide-react";

export const FEATURE_LIST = [
  {
    sectionHeader: "Training & Customization",
    sectionDescription:
      "Unlock the full potential of your chatbot by customizing its knowledge and appearance.",
    features: [
      {
        icon: <Upload />,
        title: "Import Training Content",
        description:
          "Enter a URL for SiteGPT to scan, or upload files, or drop raw text content directly, making it easier than ever to keep your chatbot informed and effective.",
      },
      {
        icon: <CircuitBoard />,
        title: "Q&A Training",
        description:
          "Use real chat history to refine and improve your chatbot by providing feedback that allows it to improve with every interaction.",
      },
      {
        icon: <Cpu />,
        title: "GPT-4o-mini & GPT-4o",
        description:
          "Choose between two powerful AI models and switch anytime depending on how you want your chatbot to behave. GPT-4o-mini prioritizes speed while GPT-4o prioritizes depth and accuracy.",
      },
      {
        icon: <Code />,
        title: "Embed on Sites",
        description:
          "Embed a chatbot on as many sites as you want — your marketing site, in-app, help center… wherever.",
      },
      {
        icon: <Paintbrush />,
        title: "Customize Appearance",
        description:
          "Personalize your chatbot to match your brand, using custom logos and colors to provide a cohesive user experience.",
      },
    ],
  },
  {
    sectionHeader: "Chat Interactions",
    sectionDescription:
      "Enhance user interactions with powerful features such as advanced AI engines, multi-language support, and seamless human escalation.",
    features: [
      {
        icon: <MessageSquare />,
        title: "Quick Prompts",
        description:
          "Provide users with digital icebreakers to kick things off. Include frequently asked questions or questions you wish more users would ask to get value out of your product or service.",
      },
      {
        icon: <Clock />,
        title: "Chat History",
        description:
          "Review each conversation, assess the chatbot's performance, and determine whether visitors' questions were effectively addressed. You're never in the dark about what your chatbot is responding with.",
      },
      {
        icon: <UserPlus />,
        title: "Lead Generation",
        description:
          "Don't just answer questions, seize opportunities. Your chatbot captures interested visitors' details, allowing you to build a list of potential leads.",
      },
      {
        icon: <HeadphonesIcon />,
        title: "Escalate to a Human",
        description:
          "While AI can handle a vast majority of inquiries, some conversations require a human touch. Users can seamlessly transition the conversation to a live agent at the push of a button. This hybrid approach ensures that users always receive the best possible assistance.",
      },
      {
        icon: <Globe />,
        title: "Language Support",
        description:
          "Your chatbot is ready to chat in 95 languages. Let visitors ask questions and respond in any language.",
      },
    ],
  },
  {
    sectionHeader: "Extensions",
    sectionDescription:
      "Extend your chatbot's capabilities with automation, insightful summaries, and powerful integrations.",
    features: [
      {
        icon: <Terminal />,
        title: "Functions",
        description:
          "Allows users to automate tasks just by interacting with your chatbot. Your chatbot can listen, understand, and interact with other systems based on chat interactions.",
      },
      {
        icon: <Mail />,
        title: "Email Summaries",
        description:
          "Keep a pulse on chatbot interactions with daily summaries delivered to your inbox. Upload more training data where needed, track the chatbot's performance, and gain insights into user behavior.",
      },
      {
        icon: <Webhook />,
        title: "API",
        description:
          "Connect SiteGPT to any other app you want to sync data to, automatically retrain with new content, and update settings programmatically.",
      },
      {
        icon: <Puzzle />,
        title: "Integrations",
        description:
          "With native integrations into platforms like Crisp, Intercom, and Zendesk, your chatbot becomes an extended arm of your existing toolkit.",
      },
    ],
  },
];
