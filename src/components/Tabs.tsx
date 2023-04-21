import { useState } from "react";
import Tab from "./Tab"

type TabsProps = {
  hidesOnMobile?: boolean;
};

function Tabs({ hidesOnMobile = false }: TabsProps) {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <ul className={`md:flex flex-col gap-[32px] ml-[32px] mt-[40px] ${hidesOnMobile ? 'hidden' : 'flex'} transition-all`} role="navigation">
      <Tab title="Your info" step={1} active={activeTab === 1} onClick={() => setActiveTab(1)} />
      <Tab title="Select plan" step={2} active={activeTab === 2} onClick={() => setActiveTab(2)} />
      <Tab title="Add-ons" step={3} active={activeTab === 3} onClick={() => setActiveTab(3)} />
      <Tab title="Summary" step={4} active={activeTab === 4} onClick={() => setActiveTab(4)} />
    </ul>
  )
}

export default Tabs