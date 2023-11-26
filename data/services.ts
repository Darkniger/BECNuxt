import type { Service } from "~/types/Service";

// Services are: Project Management, Business Processes and Industrial Programming
export const services: Service[] = [
  {
    name: "Project Management",
    description: "We help you manage your projects, from the initial idea to the final product.",
    slug: "project-management",
    blocks: [
      {
        title: 'Meticulous Planning',
        description: 'We plan every project meticulously to ensure that we deliver on time and on budget.',
        imageAlt: 'Meticulous Planning',
        imageSrc: '/images/management/meticulous-planning.jpg'
      },
      {
        title: 'Streamlined Execution',
        description: 'We execute every project with a streamlined process to ensure that we deliver on time and on budget.',
        imageAlt: 'Streamlined Execution',
        imageSrc: '/images/management/streamlined-execution.jpg'
      },
      {
        title: 'Cost Follow up',
        description: 'We follow up on every project to ensure that we deliver on time and on budget.',
        imageAlt: 'Cost Follow up',
        imageSrc: '/images/management/cost-follow-up.jpg'
      }
    ]
  },
  {
    name: "Business Processes",
    description: "We help you optimize your business processes to make your business more efficient.",
    slug: "business-processes",
    blocks: [
      {
        title: 'Productivity and Cost Savings',
        description: 'We help you increase productivity and cost savings by streamlining your business processes.',
        imageAlt: 'Productivity and Cost Savings',
        imageSrc: '/images/processes/productivity-and-cost-savings.jpg'
      },
      {
        title: 'Streamlined Business Processes',
        description: 'We help you streamline your business processes to increase productivity and cost savings.',
        imageAlt: 'Streamlined Business Processes',
        imageSrc: '/images/processes/streamlined-business-processes.jpg'
      }
    ]
  },
  {
    name: "Industrial Programming",
    description: "We help you create industrial programs to make your business more efficient.",
    slug: "industrial-programming",
    blocks: [
      {
        title: 'PLC Programming',
        description: 'We program PLCs to automate your industrial processes.',
        imageAlt: 'PLC Programming',
        imageSrc: '/images/programming/plc-programming.jpg'
      },
      {
        title: 'Robotics Programming',
        description: 'We program robots to automate your industrial processes.',
        imageAlt: 'Robotics Programming',
        imageSrc: '/images/programming/robotics-programming.jpg'
      },
      {
        title: 'Safety Programming',
        description: 'We program safety systems to ensure that your industrial processes are safe.',
        imageAlt: 'Safety Programming',
        imageSrc: '/images/programming/safety-programming.jpg'
      }
    ]
  }
]
