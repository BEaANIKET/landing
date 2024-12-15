import { Heading, Text } from "@/components/Text";
import Image from "next/image";
export const metadata = {
  title: "Timeline - Open Healthcare Network",
};

export default function Page() {
    const items = [
      {
        id: 1,
        title: "2020 | Initial Development",
        Purpose: " The COVID-19 pandemic was an unprecedented crisis, and there were no existing tools to manage the scale and complexity of the outbreak. In response, a group of volunteers came together to develop CARE, a software solution aimed at managing patient data, coordinating pandemic response efforts, and streamlining resource allocation. CARE was designed to support healthcare workers and administrators in handling the surge in cases efficiently while ensuring transparency and accountability in healthcare delivery.",
        features: [
            "Patient Registration and Tracking",
            "Pandemic Response Coordination",
            "Basic Facility and Bed Management",
            "Patient Shifting Across Facilities",
            "Resource Allocation"
        ],
        },
        {
            id: 2,
            title: "2021 | Enhanced Capabilities for Oxygen Tracking",
            Purpose: "During the second wave of COVID-19, oxygen availability became a critical issue across India. Oxygen tracking and management features were added to CARE to effectively manage oxygen availability and distribution in Kerala. CARE powered the oxygen war room in Kerala helping district administration to effectively manage the pandemic. ",
            features: [
              'Oxygen Capacity and Utilization Tracking',
              'Real-Time Resource Monitoring Dashboards',
              'Facility-Level Allocation Management',
              'Reporting and Analytics'
            ],
            
        },
        {
            id: 3,
            title: "2021 | Recognized as the 50th Digital Public Good by the United Nations.",
            Purpose: "CARE was recognized as 50th Digital Public Good by United Nations considering its  transformative healthcare management system, centralizing patient and capacity management across hospitals which empower administrators and healthcare professionals with real-time data for better decision-making",
            features: ['CARE was recognized as 50th Digital Public Good by United Nations '],
            
        },
        {
            id: 4,
            title: "2021 | CARE powers the 10Bed ICU Project",
            Purpose: "CARE identified as the teleICU tooling for 10BedICU Project, enabling technology-driven ICU care in rural India and providing TeleICU services to the remotest regions, impacting thousands of lives.10BedICU was initially setup in Telangana during Covid delta wave.",
            features: ['Daily round updates']
            
        },
        {
          id: 5,
          title: "2022-2023 | Continuous Improvements and Advanced Features",
          Purpose: "Supported the expansion of the 10BedICU project and addressed broader healthcare needs. Over three years, the 10BedICU initiative expanded to 9 states, covering more than 200 hospitals and delivering critical care solutions to underserved regions.",
          features: [
            'Remote ICU Monitoring Capabilities',
            'Integration with ICU Systems',
            'Remote Doctor Connect',
            'TeleICU Scalability',
            'Secure Data Handling',
            'Reports and Dashboards'
          ]
        },
        {
        id: 6,
        title: "2024 | Transition to HMIS and tooling for Palliative Care Grid",
        Purpose: "CARE is evolving into a comprehensive Hospital Management Information System (HMIS) to address the growing needs of healthcare institutions. Beyond its origins as a pandemic management and TeleICU tool, CARE now aims to provide end-to-end solutions for managing hospital operations, patient workflows, and administrative tasks. This transition enables healthcare providers to streamline operations, improve resource utilization, and enhance patient care. Building on its foundation as a pandemic management and TeleICU tool, CARE is also being expanded to support a Palliative Care Grid, designed to provide home-based care for elderly citizens. This new capability will enable coordinated care delivery at home, addressing the unique needs of the aging population. The first implementation is underway in Kerala in collaboration with the National Health Mission (NHM) and private NGOs, marking a significant step toward improving community healthcare.",
        features: [
          'Compliance with the Ayushman Bharat Digital Mission (ABDM)',
          'Integration with the Health Care Exchange (HCX)',
          'End-to-End Patient Management Workflows',
          'Inventory and Asset Management',
          'Comprehensive Facility Management',
          'Modular and Scalable Architecture',
          'Home-Based Care Coordination',
          'Caregiver and Patient Management',
          'Collaboration with NHM and NGOs',
          'Resource Allocation for Community Care',
          'Telemedicine Support'
        ]
    },
        

      ]
    
    function FeatureTile(props: {
      toLeft?: boolean;
      features: string[];
      title: React.ReactNode;
      content: React.ReactNode;
    }) {
      const { toLeft = false, features, title, content } = props;
    
      return (
        <div
          className={`flex ${
            toLeft ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-10 flex-col`}
        >
         
          <div className="w-full lg:w-[400px]">
            <Heading size={1}>{title}</Heading>
            <Text className="mt-4">{content}</Text>
          </div>
          <div className="w-full lg:w-[400px]">
          <Heading className="font-thin" size={1}>Highlights</Heading>
                <ul>
              {features.map((feature, index) => (
                <li key={index} className="flex items-center mt-4">
                <Image
                alt="checkmark.svg"
                width={30}
                height={30}
                src={"/icons/" + "checkmark" + ".svg"}
                className={`brightness-1`}
              />
                <Text className="px-2">{feature}</Text>
            </li>
              ))}
            </ul>
            
          </div>
        </div>
      );
    }
    
    const truncateText = (text, length) => {
      if (text.length > length) {
        return text.substring(0, length) + "...";
      }
      return text;
    };
    return (
        <div className="relative">
            <div
                className="flex items-center justify-center px-10 py-20 md:px-20 md:py-40"
                style={{
                  background: "url('/backgrounds/green-square-vector.png')",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
              {/* <TimelineIndex items={items} /> */}
              <Heading size={2} className="md:text-7xl text-white/90">
                Timeline 
                of
                 Development
              </Heading>
            </div>
            <div className="flex flex-col items-center gap-20 mt-20">
              {items.map((item, index) => (
                <FeatureTile
                key={item.id}
                toLeft={index % 2 != 0}
                features={item.features}
                title={item.title}
                content={item.Purpose}
              />
              ))}
            </div>
          </div>
            
      );
    }
