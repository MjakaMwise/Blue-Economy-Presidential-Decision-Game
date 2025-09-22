export interface GameChoice {
  text: string;
  impact: {
    economy: number;
    people: number;
    health: number;
    ecology: number;
  };
  note: string;
}

export interface GameQuestion {
  id: number;
  title: string;
  scenario: string;
  choices: GameChoice[];
}

export const gameQuestions: GameQuestion[] = [
  {
    id: 1,
    title: "Overfishing along Mombasa Coast",
    scenario: "Overfishing along the Mombasa coast is threatening fish stocks. Local communities depend on fisheries for food and income. What will you do?",
    choices: [
      {
        text: "Implement strict fishing quotas",
        impact: { economy: 0, people: -1, health: 0, ecology: 1 },
        note: "Fishing quotas, based on scientific assessments, help rebuild overfished stocks for long-term sustainability and food security. Globally, overfishing affects 33% of stocks, but well-managed quotas have rebuilt 47 U.S. stocks since 2000, per NOAA, preventing ecosystem collapse and supporting livelihoods."
      },
      {
        text: "Allow unrestricted fishing",
        impact: { economy: 1, people: -1, health: -1, ecology: -1 },
        note: "Short-term economic gains from unrestricted fishing lead to rapid depletion of fish populations, risking long-term ecosystem collapse and loss of biodiversity. WWF reports overfishing depletes ocean wildlife, threatening food security for millions reliant on seafood."
      },
      {
        text: "Invest in sustainable aquaculture",
        impact: { economy: 0, people: 0, health: 1, ecology: 1 },
        note: "Sustainable aquaculture reduces pressure on wild stocks while providing alternative livelihoods. NOAA notes it boosts food production, economic growth in rural areas, and waterway cleanliness if managed properly, with global production now exceeding wild catch."
      }
    ]
  },
  {
    id: 2,
    title: "Offshore Wind Energy Development",
    scenario: "Kenya has potential for offshore wind farms, but the upfront cost is high. What is your choice?",
    choices: [
      {
        text: "Invest in wind farms",
        impact: { economy: 0, people: 1, health: 1, ecology: 1 },
        note: "Offshore wind supports sustainable energy, reduces carbon emissions, and creates green jobs. Advantages include steadier winds than onshore, higher energy output, and benefits to local communities via taxes and leases, per U.S. DOE, though initial costs are high."
      },
      {
        text: "Develop offshore oil reserves",
        impact: { economy: 1, people: -1, health: -1, ecology: -1 },
        note: "Boosts short-term revenue but risks pollution, ecosystem damage, and climate change contributions. NRDC highlights offshore drilling's threats to marine life and coastal communities through spills and emissions."
      },
      {
        text: "Focus on solar energy instead",
        impact: { economy: 0, people: 1, health: 1, ecology: 0 },
        note: "Solar provides clean energy and jobs but misses coastal renewable potential like wind. It's cost-effective and works in various settings, complementing but not replacing offshore options for diverse energy mixes."
      }
    ]
  },
  {
    id: 3,
    title: "Coral Reef Protection (Kisite-Mpunguti)",
    scenario: "Coral reefs are bleaching, threatening tourism and marine biodiversity. What is your decision?",
    choices: [
      {
        text: "Establish Marine Protected Areas",
        impact: { economy: 0, people: 0, health: 1, ecology: 1 },
        note: "MPAs help reefs recover, support sustainable tourism, and protect 25% of marine species. NOAA and Pew Trusts note they restore fish populations by 500%, enhance biodiversity, and provide cultural heritage value."
      },
      {
        text: "Promote unrestricted tourism",
        impact: { economy: 1, people: -1, health: -1, ecology: -1 },
        note: "Increases short-term revenue but damages ecosystems through physical contact and pollution. EPA advises responsible practices to avoid harming reefs, which are vital natural breakwaters."
      },
      {
        text: "Invest in coral restoration",
        impact: { economy: 0, people: 1, health: 1, ecology: 1 },
        note: "Restores reefs for long-term benefits, including storm protection and fisheries. Techniques like outplanting and probiotics enhance resilience to diseases and warming, per Great Barrier Reef Foundation."
      }
    ]
  },
  {
    id: 4,
    title: "Coastal Community Protection",
    scenario: "Rising sea levels threaten Lamu and Kilifi communities. What action will you take?",
    choices: [
      {
        text: "Build sea walls and restore mangroves",
        impact: { economy: -1, people: 0, health: 1, ecology: 1 },
        note: "Protects communities and ecosystems from climate threats like flooding. Nature-based solutions like mangroves reduce erosion and provide biodiversity, per Sea Level Rise.org and C40 Cities."
      },
      {
        text: "Prioritize port expansion",
        impact: { economy: 1, people: 0, health: -1, ecology: -1 },
        note: "Boosts economy but increases vulnerability through habitat loss. EPA warns of exacerbated flooding without adaptive measures."
      },
      {
        text: "Take no immediate action",
        impact: { economy: 0, people: -1, health: -1, ecology: -1 },
        note: "Increases risk of disasters, ecosystem degradation, and economic losses. Climate.gov emphasizes resilient infrastructure and planning to cope with rising seas."
      }
    ]
  },
  {
    id: 5,
    title: "Waste Management for Coastal Towns",
    scenario: "Plastic pollution is increasing along Kenya's coast. How do you respond?",
    choices: [
      {
        text: "Ban single-use plastics",
        impact: { economy: 0, people: 0, health: 1, ecology: 1 },
        note: "Reduces pollution, improves marine and human health. NRDC and Oceanic Society advocate bans to curb ocean plastic, which affects wildlife and enters food chains."
      },
      {
        text: "Encourage recycling programs",
        impact: { economy: 0, people: 1, health: 1, ecology: 1 },
        note: "Engages communities, reduces waste, and supports ecosystems. The Ocean Cleanup and WIPO GREEN highlight recycling's role in preventing 40% of global pollution if scaled."
      },
      {
        text: "Ignore the issue for now",
        impact: { economy: 0, people: 1, health: -1, ecology: -1 },
        note: "Short-term convenience leads to long-term harm, with billions of pounds of trash entering oceans annually, per NOAA."
      }
    ]
  },
  {
    id: 6,
    title: "Aquaculture Expansion in Lake Victoria",
    scenario: "Fish demand is rising. Will you expand aquaculture in Lake Victoria?",
    choices: [
      {
        text: "Support sustainable aquaculture",
        impact: { economy: 1, people: 1, health: 1, ecology: 1 },
        note: "Balances food security with protection; NOAA states proper management boosts production, jobs, and clean waterways, with global growth at 8.3% annually."
      },
      {
        text: "Allow intensive farming",
        impact: { economy: 2, people: 1, health: -1, ecology: -1 },
        note: "Increases production but risks pollution, disease, and habitat destruction. Nature.com notes controversies over environmental sustainability."
      },
      {
        text: "Focus on wild fisheries only",
        impact: { economy: 1, people: 0, health: -1, ecology: -1 },
        note: "Short-term profit stresses ecosystems; Our World in Data shows aquaculture now surpasses wild catch for sustainability."
      }
    ]
  },
  {
    id: 7,
    title: "Tourism Development in Diani",
    scenario: "Tourism could generate revenue, but may harm beaches and reefs. How do you proceed?",
    choices: [
      {
        text: "Promote eco-tourism",
        impact: { economy: 1, people: 1, health: 1, ecology: 1 },
        note: "Sustainable tourism preserves ecosystems while creating jobs. Ocean Panel and WWF emphasize well-managed tourism supports conservation and local communities."
      },
      {
        text: "Mass tourism development",
        impact: { economy: 2, people: 1, health: -1, ecology: -1 },
        note: "Short-term growth risks degradation; EU Blue Economy Report calls for balancing with environmental protection."
      },
      {
        text: "Limit tourism development",
        impact: { economy: -1, people: -1, health: 0, ecology: 1 },
        note: "Protects environment but reduces income; Sustainable Travel International seeks balance for coastal health."
      }
    ]
  },
  {
    id: 8,
    title: "Offshore Oil Exploration",
    scenario: "New oil reserves discovered offshore. What is your policy?",
    choices: [
      {
        text: "Strict environmental regulations",
        impact: { economy: 1, people: 0, health: 1, ecology: 1 },
        note: "Ensures sustainable extraction with minimal damage; OSPAR and UNEP FI highlight risks like spills and recommend stringent controls."
      },
      {
        text: "Approve unrestricted drilling",
        impact: { economy: 2, people: -1, health: -1, ecology: -2 },
        note: "Boosts economy short-term but damages ecosystems via pollution and spills; Wilderness Society notes air/water pollution and wildlife harm."
      },
      {
        text: "Invest in alternatives instead",
        impact: { economy: 0, people: 1, health: 1, ecology: 1 },
        note: "Encourages renewables, preserving ecosystems; Transition to clean energy avoids offshore risks, per NRDC."
      }
    ]
  },
  {
    id: 9,
    title: "Mangrove Restoration",
    scenario: "Mangroves protect coasts and fisheries. What is your plan?",
    choices: [
      {
        text: "Large-scale restoration program",
        impact: { economy: 0, people: 0, health: 1, ecology: 2 },
        note: "Reduces erosion, supports fisheries, preserves biodiversity, and stores carbon. UNEP reports mangroves add 60 trillion fish and protect from storms."
      },
      {
        text: "Small community projects",
        impact: { economy: 0, people: 1, health: 1, ecology: 1 },
        note: "Local engagement improves outcomes; TNC notes stabilization of coasts and habitat provision."
      },
      {
        text: "No restoration action",
        impact: { economy: 0, people: 0, health: -1, ecology: -2 },
        note: "Leaves coasts vulnerable; Loss reduces climate adaptation, per ScienceDirect."
      }
    ]
  },
  {
    id: 10,
    title: "Fisheries Enforcement in Lamu",
    scenario: "Illegal fishing threatens marine life. How do you act?",
    choices: [
      {
        text: "Strict government enforcement",
        impact: { economy: 0, people: -1, health: 0, ecology: 2 },
        note: "Protects ecosystems but may impact locals; NOAA and WWF advocate patrols and tech to combat IUU fishing, which depletes stocks."
      },
      {
        text: "Community-led patrols",
        impact: { economy: 0, people: 1, health: 0, ecology: 1 },
        note: "Engages locals for compliance; ISSF promotes multi-pronged approaches including community initiatives."
      },
      {
        text: "Ignore illegal fishing",
        impact: { economy: 1, people: 1, health: 0, ecology: -2 },
        note: "Short-term profits degrade ecosystems; Global challenge requires governance and enforcement, per U.S. Coast Guard."
      }
    ]
  },
  {
    id: 11,
    title: "Climate Change Policy",
    scenario: "Rising sea levels threaten the coast. Which policy do you adopt?",
    choices: [
      {
        text: "National climate adaptation plan",
        impact: { economy: -1, people: 1, health: 1, ecology: 2 },
        note: "Invests in resilience; Ocean Panel and UNFCCC emphasize ocean solutions like ecosystem protection to buffer climate impacts."
      },
      {
        text: "Focus on economic growth",
        impact: { economy: 2, people: 0, health: -1, ecology: -2 },
        note: "Short-term gains increase vulnerability; EPA notes changes in ecosystems and resources."
      },
      {
        text: "Rely on international aid",
        impact: { economy: 0, people: 0, health: -1, ecology: 0 },
        note: "Delays action; Biden's Ocean Climate Action Plan calls for reducing pollution and building resilience."
      }
    ]
  },
  {
    id: 12,
    title: "Eco-Education Campaign",
    scenario: "Do you launch an education campaign on sustainable ocean practices?",
    choices: [
      {
        text: "Nationwide schools & media campaign",
        impact: { economy: 0, people: 1, health: 1, ecology: 2 },
        note: "Educates on conservation for sustainability; UNESCO and Prada Group's SEA BEYOND raise awareness for ocean preservation."
      },
      {
        text: "Target coastal communities only",
        impact: { economy: 0, people: 0, health: 1, ecology: 1 },
        note: "Focuses resources; Surfrider Foundation emphasizes youth education for protection."
      },
      {
        text: "No education campaign",
        impact: { economy: 0, people: 0, health: 0, ecology: -1 },
        note: "Knowledge gaps risk unsustainable practices; WWF and NOAA provide resources for ocean literacy."
      }
    ]
  },
  {
    id: 13,
    title: "Global Ocean Acidification Response",
    scenario: "Ocean acidification from CO2 absorption is harming marine life worldwide. What global strategy will you support?",
    choices: [
      {
        text: "Reduce CO2 emissions globally",
        impact: { economy: -1, people: 1, health: 1, ecology: 2 },
        note: "Primary solution to acidification; NOAA and UCS explain it lowers pH, affecting shellfish; cutting emissions mitigates, with added benefits for climate."
      },
      {
        text: "Implement local buffering techniques",
        impact: { economy: 0, people: 0, health: 1, ecology: 1 },
        note: "Uses seagrass or alkalinity addition; Greenly notes urgent emission cuts but local actions help ecosystems adapt."
      },
      {
        text: "Ignore and focus on other issues",
        impact: { economy: 0, people: -1, health: -1, ecology: -2 },
        note: "Worsens shell dissolution and biodiversity loss; Smithsonian reports pH drop from CO2, threatening food chains."
      }
    ]
  },
  {
    id: 14,
    title: "Deep Sea Mining Regulation",
    scenario: "Demand for minerals drives interest in deep sea mining, but environmental risks are high. What is your stance?",
    choices: [
      {
        text: "Ban deep sea mining",
        impact: { economy: -1, people: 0, health: 0, ecology: 2 },
        note: "Protects ecosystems from unknown harms; WRI and Greenpeace warn of habitat loss, plumes, and climate impacts."
      },
      {
        text: "Allow with strict regulations",
        impact: { economy: 1, people: 0, health: 0, ecology: 0 },
        note: "Balances mineral needs for renewables with monitoring; Reuters notes potential but risks to life and sediments."
      },
      {
        text: "Approve unrestricted mining",
        impact: { economy: 2, people: -1, health: -1, ecology: -2 },
        note: "Provides critical minerals but destroys biodiversity; GAO highlights noise, plumes, and irreversible damage."
      }
    ]
  },
  {
    id: 15,
    title: "Arctic Ocean Shipping Routes",
    scenario: "Melting ice opens new Arctic shipping routes, increasing traffic. How do you manage environmental impacts?",
    choices: [
      {
        text: "Enforce strict shipping regulations",
        impact: { economy: 0, people: 0, health: 1, ecology: 1 },
        note: "Reduces pollution and disturbances; ScienceDirect review notes impacts like noise, spills, and invasive species."
      },
      {
        text: "Promote unrestricted shipping",
        impact: { economy: 2, people: 1, health: -1, ecology: -2 },
        note: "Boosts trade but harms ecosystems; France24 reports traffic boom accelerates warming and biodiversity loss."
      },
      {
        text: "Invest in green shipping tech",
        impact: { economy: -1, people: 1, health: 1, ecology: 1 },
        note: "Uses cleaner fuels to minimize impacts; Arctic Council discusses new fuels reducing spill risks in ice."
      }
    ]
  },
  {
    id: 16,
    title: "Global Marine Protected Areas Expansion",
    scenario: "Expanding MPAs worldwide could protect biodiversity but affect fishing. What do you decide?",
    choices: [
      {
        text: "Expand MPAs significantly",
        impact: { economy: -1, people: 0, health: 1, ecology: 2 },
        note: "Boosts fish stocks and tourism; Nat Geo and Pew show 500% population increases, economic benefits outweigh costs 1.4-2.7 times."
      },
      {
        text: "Maintain current MPAs",
        impact: { economy: 0, people: 0, health: 0, ecology: 0 },
        note: "Provides some protection; NOAA notes MPAs limit human activity for habitat and species benefits."
      },
      {
        text: "Reduce MPA restrictions",
        impact: { economy: 1, people: 1, health: -1, ecology: -1 },
        note: "Increases access but risks overexploitation; Phys.org highlights spillover effects for fisheries."
      }
    ]
  },
  {
    id: 17,
    title: "Ocean Renewable Energy Development",
    scenario: "Harnessing ocean energy like tidal and wave power is emerging globally. What approach do you take?",
    choices: [
      {
        text: "Invest in tidal and wave farms",
        impact: { economy: 0, people: 1, health: 1, ecology: 1 },
        note: "Provides reliable clean energy; Stanford and OES note abundant resource, reduces emissions by 500M tons by 2050."
      },
      {
        text: "Stick to traditional energy",
        impact: { economy: 1, people: -1, health: -1, ecology: -1 },
        note: "Short-term reliability but misses renewables; WOR highlights untapped ocean potential."
      },
      {
        text: "Combine with offshore wind",
        impact: { economy: 0, people: 1, health: 1, ecology: 0 },
        note: "Diversifies sources; Hawaiian Electric includes thermal and mechanical for comprehensive benefits."
      }
    ]
  },
  {
    id: 18,
    title: "Oil Spill Prevention in High Seas",
    scenario: "Increased shipping raises oil spill risks in international waters. What prevention strategy?",
    choices: [
      {
        text: "Implement global prevention protocols",
        impact: { economy: -1, people: 1, health: 1, ecology: 2 },
        note: "Includes double hulls and response plans; EPA's SPCC and ITOPF recommend containment, burning, dispersants."
      },
      {
        text: "Rely on industry self-regulation",
        impact: { economy: 0, people: 0, health: -1, ecology: -1 },
        note: "Risks inadequate response; OSHA details techniques like booms and skimmers."
      },
      {
        text: "Ban high-risk shipping routes",
        impact: { economy: -2, people: -1, health: 0, ecology: 1 },
        note: "Reduces spills but impacts trade; BSEE reviews plans for preparedness."
      }
    ]
  },
  {
    id: 19,
    title: "Blue Carbon Ecosystem Protection",
    scenario: "Protecting mangroves, seagrasses, and salt marshes globally stores carbon. What policy?",
    choices: [
      {
        text: "Prioritize protection and restoration",
        impact: { economy: 0, people: 1, health: 1, ecology: 2 },
        note: "Mitigates climate, supports biodiversity; NOAA and WRI note huge storage, storm protection, and water quality benefits."
      },
      {
        text: "Allow limited development",
        impact: { economy: 1, people: 0, health: 0, ecology: -1 },
        note: "Balances growth with some loss; Pew explains CO2 absorption reduces acidification."
      },
      {
        text: "Ignore for economic priorities",
        impact: { economy: 1, people: -1, health: -1, ecology: -2 },
        note: "Degrades habitats; World Bank highlights multiple benefits including fisheries support."
      }
    ]
  },
  {
    id: 20,
    title: "Global Plastic Pollution Cleanup",
    scenario: "Plastic garbage patches accumulate in oceans worldwide. How to address?",
    choices: [
      {
        text: "Launch international cleanup initiatives",
        impact: { economy: -1, people: 1, health: 1, ecology: 2 },
        note: "Removes plastic, prevents harm; Ocean Cleanup aims for 90% removal by 2040, with legislation curbing production."
      },
      {
        text: "Focus on source reduction only",
        impact: { economy: 0, people: 0, health: 1, ecology: 1 },
        note: "Bans and recycling prevent entry; NRDC suggests reducing single-use, supporting Ocean Conservancy's halving goal."
      },
      {
        text: "Minimal intervention",
        impact: { economy: 0, people: -1, health: -1, ecology: -1 },
        note: "Allows accumulation; NOAA reports billions of pounds annually, affecting marine life."
      }
    ]
  }
];