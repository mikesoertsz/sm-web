import { Body, Heading, InnerWrap, Preheading, Wrapper } from "@/lib/atoms";
import Link from "next/link";
import { MdOutlineCheck } from "react-icons/md";
import tw from "tailwind-styled-components";

type Props = {};

const PriceCard = tw.div`relative flex flex-col items-start justify-start bg-white p-6 flex-col rounded-lg rounded-xl outline-4 last:outline outline-yellow-500 text-black h-full`;

export default function Pricing({}: Props) {
  return (
    <Wrapper className="bg-brand-base-f text-gray-500 py-[10vh]">
      <InnerWrap>
        <div className="flex flex-col items-center justify-center gap-3">
          <Preheading className="mb-4 font-light tracking-[0.3em] text-brand-base-a">
            pricing
          </Preheading>
          <Heading className="max-w-4xl font-normal text-brand-base-h">
            Let&apos;s build something amazing!
          </Heading>
          <Body className="hidden">
            <span className="pr-2 text-lime-500">20% off</span>
            for 5 customers in Q1 (2 left){" "}
          </Body>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-16 md:grid-cols-3">
          {prices.map((item, index) => (
            <PriceCard key={index}>
              {item.popular && (
                <div className="absolute items-center justify-center px-2 py-1 text-xs font-medium text-black bg-yellow-300 rounded-sm shadow-none font-body top-2 right-2 cursor-normal">
                  Popular
                </div>
              )}
              <div className="flex flex-col items-center justify-center w-full mt-2">
                <h3 className="text-3xl text-center text-tracking-tight font-title text-brand-base-f">
                  {item.name}
                </h3>
                <p className="h-3 mt-1 text-xs text-gray-500 anti-aliased font-body">
                  {item.description}
                </p>
                <div className="mt-8">
                  {item.price === 0 ? (
                    <span className="text-5xl font-semibold font-body">
                      Free
                    </span>
                  ) : (
                    <>
                      <span className="mr-2 text-3xl text-gray-600 font-body">
                        €
                      </span>
                      <span className="text-5xl font-semibold tracking-tighter font-body">
                        {item.price.toLocaleString("en-US")}
                      </span>
                    </>
                  )}
                </div>
                <span className="mt-1 ml-1 text-xs text-gray-400 font-body">
                  {item.duration}
                </span>
              </div>
              <div className="flex flex-col w-full h-[260px] p-6 mt-6 text-sm border rounded-lg grow font-body">
                <p className="mb-3 font-medium">Deliverables:</p>
                <ul className="grid w-full grid-cols-1 gap-x-4">
                  {item.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-center w-full gap-2">
                      <MdOutlineCheck className="text-green-600" size={15} />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="items-center justify-center hidden w-full h-2 my-2 mt-6 text-xs text-gray-500 transition duration-200 ease-in-out font-body hover:text-black">
                <Link href={item.buttonlink}>{item.buttontext}</Link>
              </div>
              <div className="flex items-center justify-end w-full ">
                <a
                  href={item.buttonlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center transition duration-300 ease-in-out justify-center w-full py-3 mt-6 text-md font-medium rounded-lg font-body ${
                    item.popular
                      ? "bg-yellow-300 text-black border border-yellow-300"
                      : "bg-white text-black border border-gray-300"
                  } hover:bg-black hover:text-white`}
                >
                  {item.buttontext}
                </a>
              </div>
            </PriceCard>
          ))}
        </div>
      </InnerWrap>
    </Wrapper>
  );
}

const prices = [
  {
    name: "MVP Development",
    price: 35000,
    description: "Fixed price projects to get your MVP built fast.",
    deliverables: [
      "Web Apps",
      "Mobile Apps",
      "SaaS",
      "Platforms",
      "Marketplaces",
      "APIs",
      "Integrations",
      "Automation",
      "AI/ML",
    ],
    duration: "Starts at",
    buttontext: "Scope your project",
    buttonlink: "https://cal.com/startupmike/mvp-discovery-call",
    popular: false,
  },
  {
    name: "Discovery Call",
    price: 0,
    description: "A free consultation to discuss your project.",
    deliverables: [
      "Detailed video feedback (20m)",
      "Project Quotation",
      "Project Terms",
    ],
    duration: "25m",
    buttontext: "Book your free call",
    buttonlink: "https://cal.com/startupmike/discovery-call",
    popular: false,
  },
  {
    name: "Tech Audit",
    price: 629,
    description: "Package audit of your project or idea.",
    deliverables: [
      "Detailed Video Feedback (1h)",
      "Product Roadmap",
      "Competitor Analysis",
      "Persona Analysis",
      "Market Validation",
      "Technical Specification",
      "Timeline (Gannt)",
      "Budgeting",
      "Other Agreed Deliverables",
    ],
    duration: "1 hour sprint. 4-day delivery.",
    buttontext: "Order Tech Audit (€629)",
    buttonlink: "https://cal.com/startupmike/tech-audit",
    popular: true,
  },
];
