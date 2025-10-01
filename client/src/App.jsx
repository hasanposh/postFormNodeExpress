import { useState } from "react";
import InputField from "./components/InputField";
import CheckboxGroup from "./components/CheckboxGroup";
import ImageDropzone from "./components/ImageDropzone";

const serviceOptions = [
  "Appliance Repair",
  "Astrology Services",
  "Attorneys, Counselors & Paralegals",
  "Builders & Constructions",
  "Cabinets Installers",
  "Clothing & Jewelry",
  "Computer & Phone Repair",
  "Countertops Installers",
  "CPA, Tax & Accounting",
  "Dentist",
  "Doctors & Nurses",
  "Educational Institutions",
  "Electronics Repair",
  "Event & Wedding Services",
  "Event Halls & Community Centers",
  "Farms & Nurseries",
  "Financial Services",
  "Flooring Installers",
  "Grocery Stores & Retail",
  "Hair & Makeup Services",
  "Handyman Services",
  "Health, Fitness & Wellness",
  "Heating & Cooling (HVAC)",
  "Home Security & Automation",
  "Importer & Distributor",
  "Insurance Services",
  "IT & Technology Services",
  "Lessons, Tutoring & Coaching",
  "Mortgage & Loans",
  "News & Media",
  "Office Equipment Repair",
  "Organization & Associations",
  "Photographer & Videographer",
  "Places of Worship",
  "Plumbers",
  "Real Estate Professionals",
  "Restaurants & Catering",
  "Travel & Tourism",
  "Wholesalers & Suppliers",
];

const allPrompts = {
  "Appliance Repair":
    '__BUSINESS_NAME__ from Texas is a Appliance Repair Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nCommercial Appliances Type:\n Exhaust Hoods\n Fryers\n Grills\n Specialty Cooking Equipment\n Steam Cooking Equipment\n Toasters\n Walk-In Coolers\n Walk-In Freezers\n\nHome Appliance Type:\n Air conditioning\n Dishwashers\n Kitchen stoves\n Microwave oven\n Refrigerator\n Washers & Dryers\n\nAppliance Brand:\n Bosch\n CAFE\n Dacor\n Fisher & Paykel\n Frigidaire\n GE Appliances\n KitchenAid\n LG\n Maytag\n Miele\n Samsung\n Subzero\n Thermador\n Viking\n Whirlpool\n Wolf\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Commercial Appliances Type": [],\n"Home Appliance Type": [],\n"Appliance Brand": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Astrology Services":
    '__BUSINESS_NAME__ from Texas is a Astrology Services Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nAstrology Services:\n Birth Chart Reading\n Electional Astrology (Muhurta)\n Horary/Prashna Astrology\n Predictive Astrology\n Relationship / Compatibility\n\nVastu Shastra:\n Commercial Vastu\n Industrial Vastu\n Plot/Land Vastu\n Residential Vastu\n Vastu Plans & Design\n\nNumerology:\n Palmistry\n Personal Numerology Reports\n Tarot Reading\n\nSpecialized Consultations:\n Career Astrology\n Financial Astrology\n Health / Medical Astrology\n Love / Relationship Astrology\n\nEducational Services:\n Articles / Blogs / Books\n Astrology Courses (Online & offline)\n Workshops & Seminars\n\nOnline Services:\n Chat Consultations\n Email Consultations\n Free Daily Horoscopes\n Online Reports & Prediction\n Video / Audio Consultations\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Astrology Services": [],\n"Vastu Shastra": [],\n"Numerology": [],\n"Specialized Consultations": [],\n"Educational Services": [],\n"Online Services": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Attorneys, Counselors & Paralegals":
    '__BUSINESS_NAME__ from Texas is a Attorneys, Counselors & Paralegals Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nLegal Practice Area:\n Administrative Law\n Banking & Finance Law\n Bankruptcy & Debt\n Bankruptcy Law\n Business Law\n Civil Litigation\n Civil Rights Law\n Constitutional Law\n Consumer Protection Law\n Contracts & Agreements\n Corporate / Business Law\n Criminal Law\n Divorce & Separation\n DUI & DWI Law\n Education Law\n Employment & Labor Law\n Entertainment Law/Sports Law\n Environmental Law\n Estate Planning / Probate\n Family Law\n General Litigation\n Health Care Law\n Immigration Law\n Insurance Law\n Intellectual Property\n Investment Law\n Medical Malpractice\n Medical Malpractice Law\n Military / Veterans Law\n Nonprofit / Charity Law\n Personal Injury Law\n Political Law\n Real Estate Law\n Social Security & Disability Law\n Tax Law\n Technology/Internet/Cyber Law\n Workers Compensation Law\n\nCounselor Categories by Specialty:\n Addiction Counselors\n Career Counselors\n Grief Counselors\n Marriage & Family Therapists\n Mental Health Counselor\n Pre-licensed Counselor\n\nParalegal Categories by Practice Area:\n Bankruptcy Paralegal\n Corporate Paralegal\n Criminal Defense Paralegal\n Family Law Paralegal\n Government Paralegal\n Immigration Paralegal\n Intellectual Property Paralegal\n Litigation Paralegal\n Real Estate Paralegal\n\nLanguage Spoken:\n Balochi\n Bangla\n Bhojpuri\n Dari\n English\n Gujarati\n Hindi\n Kannda\n Malayalam\n Marathi\n Nepali\n Panjabi\n Pashto\n Sindhi\n Sinhala\n Tamil\n Telugu\n Tulu\n Urdu\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Legal Practice Area": [],\n"Counselor Categories by Specialty": [],\n"Paralegal Categories by Practice Area": [],\n"Language Spoken": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Builders & Constructions":
    '__BUSINESS_NAME__ from Texas is a Builders & Constructions Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Cabinets Installers":
    '__BUSINESS_NAME__ from Texas is a Cabinets Installers Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nCabinet Types:\n Bathroom Vanity Cabinets\n Custom Closet Cabinets\n Garage Cabinets\n Kitchen Cabinets\n Laundry Room Cabinets\n\nCabinet Materials:\n Laminate\n MDF (Medium-Density Fiberboard)\n Plywood\n PVC\n Solid Wood\n Stainless Steel\n Thermofoil\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Cabinet Types": [],\n"Cabinet Materials": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Clothing & Jewelry":
    '__BUSINESS_NAME__ from Texas is a Clothing & Jewelry Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nClothing For Men:\n Dhoti\n Kurta Pajama\n Lungi\n Panjabi\n Sherwani\n Turbans\n\nClothing For Women:\n Anarkali Dress\n Dhakai Jamdani\n Garad Sarees\n Kantha Sarees\n Korial Sarees\n Kurtis\n Langa Voni\n Lehenga Choli\n Murshidabad Silk Sarees\n Regional Specialties\n Salwar-Kameez-Dupatta\n Sarees\n Sharara & Gharara\n Silk Sarees\n Tant Sarees\n Wedding Sarees\n\nJewelry:\n Anklets\n Bangles (Kangans)\n Earrings\n Hair Accessories\n Jhumar\n Jhumkas & Karnaphool\n Necklaces\n Nose Rings\n Rings\n Tikli\n Toe-Rings\n Waist Chains\n Wedding Jewelry\n\nJewelry Materials & Craftsmanship:\n 10K Gold\n 14K Gold\n 18K Gold\n 22k Gold\n 24k Gold\n Filigree Work\n Kundan\n Meenakari\n Repousse\n Silver\n Stone Settings\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Clothing For Men": [],\n"Clothing For Women": [],\n"Jewelry": [],\n"Jewelry Materials & Craftsmanship": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Computer & Phone Repair":
    '__BUSINESS_NAME__ from Texas is a Computer & Phone Repair Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nComputer Repair:\n Accessories Repair\n Anti-Virus Installation / Removal\n Computer Customization\n Computer Sales\n Data Recovery & Backup\n Hardware Repair\n Internet & WiFi\n Maintenance & Upgrades\n Network Troubleshooting\n Operating System updates\n PC Setup / Installation\n Remote IT Support\n Software Troubleshooting\n System security testing\n Technical Support\n Tutoring & Training\n\nPhone & Tablets Repair:\n Battery Replacement\n Cracked Screen Repair\n Damaged OLED & LCD Repairs\n Data Recovery\n Internal Hardware Repairs\n Water Damage Restoration\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Computer Repair": [],\n"Phone & Tablets Repair": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Countertops Installers":
    '__BUSINESS_NAME__ from Texas is a Countertops Installers Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nCountertops:\n Butcher Block\n Concreate\n Dekon\n Granite\n Laminate\n Marble\n Onyx\n Quarts\n Quartzite\n Soapstone\n Solid Surface\n Stainless Steel\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Countertops": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "CPA, Tax & Accounting":
    '__BUSINESS_NAME__ from Texas is a CPA, Tax & Accounting Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nBookkeeping Services:\n Accounts Payable & Receivable Tracking\n Bank & Credit Card Reconciliation\n General Ledger Management\n Inventory Management\n Invoicing & Bill Pay\n Payroll Support\n Transaction Categorization\n\nAccounting Services:\n Auditing & Assurance\n Budgeting & Forecasting\n Cost Analysis\n Financial Analysis & Consulting\n Financial Risk Assessment\n Financial Statement Preparation\n Forensic Accounting\n Governmental Accounting\n Internal Controls Implementation\n Management Accounting\n Public Accounting\n Wealth Management\n\nTax Services:\n Business Tax Professionals\n Estate & Trust Tax Services\n International Taxation\n Tax Planning & Minimization\n Tax preparation & Filling\n Tax Resolution Services\n\nLanguage Spoken:\n Balochi\n Bangla\n Bhojpuri\n Dari\n English\n Gujarati\n Hindi\n Kannda\n Malayalam\n Marathi\n Nepali\n Panjabi\n Pashto\n Sindhi\n Sinhala\n Tamil\n Telugu\n Tulu\n Urdu\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Bookkeeping Services": [],\n"Accounting Services": [],\n"Tax Services": [],\n"Language Spoken": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  Dentist:
    '__BUSINESS_NAME__ from Texas is a Dentist Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nPrimary care dentistry:\n Emergency dental service\n Family dentist\n General dentist\n Pediatric dentist (Pedodontist)\n\nSpecialty dentistry:\n Cosmetic dentistry\n Endodontist\n Oral & maxillofacial surgeon\n Orthodontist\n Periodontist\n Prosthodontist\n\nRestorative dentistry:\n Crowns & bridges\n Dental bonding\n Dental implants\n Dentures (partial & complete)\n Tooth-colored composite fillings\n\nPreventive dentistry:\n Dental sealants\n Fluoride treatments\n Nightguards for teeth grinding (bruxism)\n Oral cancer screenings\n Routine dental exams & cleanings\n\nCosmetic dentistry:\n Cosmetic bonding & shaping\n Gum contouring\n Invisalign & other clear aligner therapy\n Porcelain veneers\n Teeth whitening\n\nOral surgery:\n Bone grafting\n Dental implant placement\n Gum grafting\n Simple & surgical tooth extractions\n Wisdom tooth extraction\n\nPeriodontal services:\n Crown lengthening\n Scaling and root planing (deep cleaning)\n Treatment of gum disease (gingivitis, periodontitis)\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Primary care dentistry": [],\n"Specialty dentistry": [],\n"Restorative dentistry": [],\n"Preventive dentistry": [],\n"Cosmetic dentistry": [],\n"Oral surgery": [],\n"Periodontal services": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Doctors & Nurses":
    '__BUSINESS_NAME__ from Texas is a Doctors & Nurses Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nDoctor Specialty:\n Acupuncture\n Anesthesia Doctors\n Ayurvedic Doctors\n Beauty Treatment\n Cardiologist\n Civil Surgeons\n Dentist\n Dermatologists\n Endocrinologists\n ENT Specialist\n Gastroenterologists\n Geriatric Doctors\n Gynecologist\n Hematologists\n Home Health Care Services\n Homeopathy Doctors\n Nephrologists\n Neurologists\n Neurosurgeons\n Obstetricians\n Oncologists\n Ophthalmologists\n Orthopedic Doctors\n Orthopedic Surgeons\n Pain Management Doctors\n Pediatric Cardiologists\n Pediatricians\n Physicians & Surgeons\n Physiotherapists\n Plastic Surgeons\n Psychiatrists\n Radiation Oncologists\n Telemedicine\n Telepsychiatry\n Therapeutic Homeopathy\n Therapists\n\nLanguage Spoken:\n Balochi\n Bangla\n Bhojpuri\n Dari\n English\n Gujarati\n Hindi\n Kannda\n Malayalam\n Marathi\n Nepali\n Panjabi\n Pashto\n Sindhi\n Sinhala\n Tamil\n Telugu\n Tulu\n Urdu\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Doctor Specialty": [],\n"Language Spoken": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Educational Institutions":
    '__BUSINESS_NAME__ from Texas is a Educational Institutions Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nEducational Institutes:\n Alternative School\n Charter School\n Community College\n Elementary School\n High School\n Liberal Arts College\n Magnet School\n Middle School\n Military School\n Online/Virtual School\n Religious School\n Specialized Higher School\n Technical Schools\n University\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Educational Institutes": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Electronics Repair":
    '__BUSINESS_NAME__ from Texas is a Electronics Repair Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Event & Wedding Services":
    '__BUSINESS_NAME__ from Texas is a Event & Wedding Services Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nEvent & wedding services:\n Audio-visual Equipment\n Bar Services\n Conduct wedding ceremonies\n Custom wedding cakes\n Design & Print Invitations\n Entertainment & Photography\n Equipment Rentals\n Event design and Decor\n Floral Arrangements & decorations\n Guest lodging arrangements\n Hair & Makeup\n Lighting & Sound\n Manage food & Beverage\n Menu Planning\n Music & Entertainment\n Venue selection & negotiation\n Videography\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Event & wedding services": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Event Halls & Community Centers":
    '__BUSINESS_NAME__ from Texas is a Event Halls & Community Centers Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nEvent hall types:\n Art Galleries\n Audiovisual Equipment\n Ball Room\n Banquet Halls\n Barns\n Community Centers\n Country Clubs\n Cruise Ships & Yachts\n Golf Courses\n Historic Sites\n Hotels and Resorts\n Industrial Warehouses\n Lofts\n Meeting Room\n Museums\n Outdoor Venues\n Restaurants and Cafes\n Theaters & Auditoriums\n Vineyards & Wineries\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Event hall types": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Farms & Nurseries":
    '__BUSINESS_NAME__ from Texas is a Farms & Nurseries Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nFarm Type:\n Dairy Farm\n Fruit & Nut Farm\n Grain & Oilseed Farm\n Greenhouse\n Livestock Farm\n Vegetable & Melon Farm\n\nNursery Type:\n Decorative Plants\n Forest Nurseries\n Fruit plants\n Medical Plants\n Native Plants\n Vegetable Plants\n\nNursery Market Types:\n Landscape Nurseries\n Mail-Order Nurseries\n Retail Nurseries\n Specialty Nurseries\n Wholesale Nurseries\n\nGrowing Methods:\n Greenhouse Nurseries\n Hydroponic Nurseries\n Open Field Nurseries\n Shade House Nurseries\n Tissue Culture Nurseries\n\nFruit List:\n Acai\n Avocado\n Bael\n Banana\n Black Sapote\n Breadfruit\n Cacao\n Canistel\n Cecropia\n Cherimoya\n Coconut\n Dragon fruit\n Durian\n Gooseberry\n Guava\n Jaboticaba\n Jackfruit\n Jamun / Java Plum\n Jujube\n June plum\n Lemon\n Longan\n Loquat\n Lychee\n Malay Apple\n Mamey\n Mamoncillo / Spanish lime\n Mango\n Mangosteen\n Monstera Deliciosa\n Papaya\n Passionfruit\n Pineapple\n Pomegranate\n Rambutan\n Sapodilla\n Soursop\n Star Apple\n Starfruit / Carambola\n Sugar Apple\n Sugar Cane\n Wax Apple\n White Sapote\n\nPlant List:\n Atemoya\n Avocado\n Banana\n Black Sapote\n Breadfruit\n Cacao\n Canistel / Egg Fruit\n Cecropia\n Cherry\n Coconut\n Coffee Plant\n Curry Leaf\n Dragon fruit\n Durian\n Fig\n Guava\n Jaboticaba\n Jackfruit\n Jamun / Java Plum\n Jujube\n June plum\n Lemon\n Longan\n Loquat\n Lychee\n Malay Apple\n Mamey\n Mamoncillo / Spanish lime\n Mango\n Mangosteen\n Monstera Deliciosa\n Mulberry\n Papaya\n Passionfruit\n Persimmon\n pineapple\n Plum\n Pomegranate\n Rollinia\n Sapodilla\n Soursop\n Star Apple\n Sugar Apple\n Tamarind – Sweet\n Wax Apple\n White Sapote\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Farm Type": [],\n"Nursery Type": [],\n"Nursery Market Types": [],\n"Growing Methods": [],\n"Fruit List": [],\n"Plant List": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Financial Services":
    '__BUSINESS_NAME__ from Texas is a Financial Services Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nBanking Services:\n Commercial Banking\n Corporate Banking\n Investment Banking\n Retail Banking\n\nInvestment Services:\n Asset Management\n Brokerage Firms\n Financial Advisory Servies\n Mutual Funds\n Portfolio Management\n Wealth Management\n\nLanguage Spoken:\n Balochi\n Bangla\n Bhojpuri\n Dari\n English\n Gujarati\n Hindi\n Kannda\n Malayalam\n Marathi\n Nepali\n Panjabi\n Pashto\n Sindhi\n Sinhala\n Tamil\n Telugu\n Tulu\n Urdu\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Banking Services": [],\n"Investment Services": [],\n"Language Spoken": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Flooring Installers":
    '__BUSINESS_NAME__ from Texas is a Flooring Installers Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nFlooring Installation Service:\n Bamboo\n Carpet\n Concrete\n Cork\n Engineered Hardwood\n Hardwood\n Laminate\n Linoleum\n Luxury Vinyl Plank\n Luxury Vinyl Tile\n Rubber\n Tile\n Vinyl Composite Tile\n Vinyl Sheet Flooring\n\nFlooring Repair:\n Floor Cleaning Services\n Floor Scrubbing & Burnishing\n Grout Repair\n Hardwood Flooring Refinishing & Repair\n Junk & Debris Removal\n Old Flooring Removal\n Stain Removal\n Stripping & Waxing\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Flooring Installation Service": [],\n"Flooring Repair": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Grocery Stores & Retail":
    '__BUSINESS_NAME__ from Texas is a Grocery Stores & Retail Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nLarger Pantry Items:\n Aromatic Spices for Special Dishes\n Bakery\n Condiments & Seasonings\n Everyday Flavor Boosters\n Flour\n Honey & Sugar\n Noodles\n Nuts & Dry Fruits\n Oils & Ghee\n Pickles, Pastes & Sauces\n Pulses & Lentils (Dal)\n Ready to Eat items\n Ready-made mixes\n Rice & Grains\n Spices & Herbs\n Tea & Coffees\n\nFrozen Food:\n Beverages\n Dairy & Eggs\n Fresh Water Fish\n Frozen Foods\n Ice Cream\n Kulfi\n Paratha\n Sea food\n\nHalal Meat:\n Beef\n Chicken\n Duck\n Goat\n Lamb\n\nHealth & personal care:\n Ayurvedic Products\n Personal Care & Beauty\n\nHousehold & religious Items:\n Clothing & Jewelry\n Cookware & Kitchenware\n Namaz items\n Pooja Items\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Larger Pantry Items": [],\n"Frozen Food": [],\n"Halal Meat": [],\n"Health & personal care": [],\n"Household & religious Items": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Hair & Makeup Services":
    '__BUSINESS_NAME__ from Texas is a Hair & Makeup Services Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nHair Services:\n Barber Services\n Hair coloring\n Hair cutting & Styling\n Hair treatment\n Hir extensions\n Wig services\n\nMakeup Services:\n Bridal Makeup\n Brow Services\n Event-specific makeup\n Eye Makeup\n Eyelash Treatment\n Face Enhancing\n Facials & Skincare\n False Lashes\n Foundation\n Lip Makeup\n Nail Treatment\n Pre-wedding skincare\n Skin Preparation\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Hair Services": [],\n"Makeup Services": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Handyman Services":
    '__BUSINESS_NAME__ from Texas is a Handyman Services Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nGeneral Repairs & Maintenance:\n Door & Windows Repair\n Drywall Repair\n Furniture Assembly\n Gutter Cleaning & Repair\n Minor Electrical Work\n Minor Plumbing\n Painting\n TV Mounting & Picture Hanging\n Weatherproofing\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "General Repairs & Maintenance": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Health, Fitness & Wellness":
    '__BUSINESS_NAME__ from Texas is a Health, Fitness & Wellness Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nPhysical Health:\n Bootcamp\n Dance Fitness\n Gyms & Fitness Centers\n Martial Arts\n Personal Trainers\n Rehabilitation & Injury Prevention\n Sports\n Yoga & Pilates Studios\n\nNutrition & Diet:\n Allergen-friendly eating options\n Dietary Supplements\n Healthy Meal Delivery Services\n Nutritionists\n Registered Dietitians\n Weight Management Programs\n\nBodywork & Massage:\n Deep Tissue Massage\n Reflexology\n Shiatsu\n Therapeutic Massage\n\nMental Health Services:\n Addiction Recovery Programs\n Anger Management\n Crisis Hotlines\n Mental Therapists & Counselors\n Mindfulness & Meditation\n Psychiatrists\n Support Groups\n Workshops & Retreats\n\nHolistic & Alternative Practices:\n Acupuncture\n Aromatherapy\n Chiropractic Care\n Energy Healing\n Herbal Medicine\n Naturopathic Medicine\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Physical Health": [],\n"Nutrition & Diet": [],\n"Bodywork & Massage": [],\n"Mental Health Services": [],\n"Holistic & Alternative Practices": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Heating & Cooling (HVAC)":
    '__BUSINESS_NAME__ from Texas is a Heating & Cooling (HVAC) Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nHVAC Installation & Repair Services:\n Boiler Installation\n Cooling System Repair\n Ductless Mini-Split Installation\n Ductwork installation & Repair\n Furnace Install\n Heat Pump Installation\n Heating System Repair\n HVAC system design & Installation\n HVAC System Installation\n Radiant Heating System\n\nHVAC Maintenance Services:\n Filter Replacement & Cleaning\n HVAC System Maintenance\n HVAC System Tune-Ups\n Preventative Maintenance Plans\n\nIndoor Air Quality Services:\n Air Purifiers & Filtration Systems\n Duct Cleaning\n Humidifiers & Dehumidifiers\n\nEnergy Efficiency & Upgrades:\n Energy Audits\n Smart thermostat installation & programming.\n Thermostat Installation & Programming\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "HVAC Installation & Repair Services": [],\n"HVAC Maintenance Services": [],\n"Indoor Air Quality Services": [],\n"Energy Efficiency & Upgrades": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Home Security & Automation":
    '__BUSINESS_NAME__ from Texas is a Home Security & Automation Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nSecurity System Installation & Repairs:\n Carbon Monoxide Detectors\n Control Panels / Hub\n Entryway Sensors\n Environmental Monitoring\n Indoor Security Cameras\n Motion Detectors\n Outdoor Cameras\n Professional Monitoring\n Self-Monitoring\n Smart Locks\n Smoke & Fire Detectors\n Video Doorbells\n Water Leak / Floor Sensors\n\nHome Automation Services:\n Climate Control\n Smart Appliance Integration\n Smart Lighting\n Smart Thermostats\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Security System Installation & Repairs": [],\n"Home Automation Services": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Importer & Distributor":
    '__BUSINESS_NAME__ from Texas is a Importer & Distributor Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Insurance Services":
    '__BUSINESS_NAME__ from Texas is a Insurance Services Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nInsurance Services:\n Auto Insurance\n General Insurance\n Health Insurance\n Homeowners Insurance\n Life Insurance\n Long-Term Care Insurance\n Long-Term Disability Insurance\n Travel Insurance\n\nLanguage Spoken:\n Balochi\n Bangla\n Bhojpuri\n Dari\n English\n Gujarati\n Hindi\n Kannda\n Malayalam\n Marathi\n Nepali\n Panjabi\n Pashto\n Sindhi\n Sinhala\n Tamil\n Telugu\n Tulu\n Urdu\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Insurance Services": [],\n"Language Spoken": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "IT & Technology Services":
    '__BUSINESS_NAME__ from Texas is a IT & Technology Services Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Lessons, Tutoring & Coaching":
    '__BUSINESS_NAME__ from Texas is a Lessons, Tutoring & Coaching Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Mortgage & Loans":
    '__BUSINESS_NAME__ from Texas is a Mortgage & Loans Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nCategories by role and employment:\n Commercial Loan Officers\n Loan Officer Assistants\n Loan Originators\n Mortgage Bankers/Loan Officers\n Mortgage Brokers\n\nMortgage Loan Type:\n Construction Loan\n Conventional Loan\n FHA Loan\n Home Renovation Loan\n Jumbo Home Loan\n Mortgage Refinance\n Reverse Mortgage\n Specialty/Niche Loan\n USDA Loan\n VA Home Loan\n\nLanguage Spoken:\n Balochi\n Bangla\n Bhojpuri\n Dari\n English\n Gujarati\n Hindi\n Kannda\n Malayalam\n Marathi\n Nepali\n Panjabi\n Pashto\n Sindhi\n Sinhala\n Tamil\n Telugu\n Tulu\n Urdu\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Categories by role and employment": [],\n"Mortgage Loan Type": [],\n"Language Spoken": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "News & Media":
    '__BUSINESS_NAME__ from Texas is a News & Media Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nTypes of News Media:\n Blogs and Bloggers\n Broadcast Media - Radio\n Broadcast Media - Television\n Digital/Online Media\n Email Newsletters\n Journals/Publications\n Magazines\n News Websites\n Newspapers\n Online Video platform\n Podcasts\n Print Media\n Social Media\n\nSpecific News Topics:\n Geographical\n International News\n Local/Community News\n National News\n Regional News\n\nSubject Matter:\n Arts & Culture\n Business & Finance\n Crime & Justice\n Education\n Entertainment & Celebrity\n Environment\n Fact-Checking\n Health & Medicine\n Investigative Journalism\n Lifestyle\n Obituaries/Announcements\n Opinion & Editorials\n Politics\n Science\n Sports\n Technology\n Weather\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Types of News Media": [],\n"Specific News Topics": [],\n"Subject Matter": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Office Equipment Repair":
    '__BUSINESS_NAME__ from Texas is a Office Equipment Repair Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Organization & Associations":
    '__BUSINESS_NAME__ from Texas is a Organization & Associations Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Photographer & Videographer":
    '__BUSINESS_NAME__ from Texas is a Photographer & Videographer Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Places of Worship":
    '__BUSINESS_NAME__ from Texas is a Places of Worship Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWorship by Religion:\n Church\n Gurdwara\n Mosque\n Temple\n\nCommunity & social services:\n Charitable giving\n Community events\n Counseling services\n Food bank & aid distribution\n Funeral services\n Interfaith dialogue\n Marriage services\n Shelter for the homeless\n\nYouth & recreational activities:\n Creative programs\n Recreational outings\n Sports programs\n\nOutreach & engagement:\n Advocacy & training\n Online resources\n Open house\n Volunteer opportunities\n\nAccessibility & special needs:\n Sign language interpretation\n Special needs child care\n Visual resources\n Wheelchair accessibility\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Worship by Religion": [],\n"Community & social services": [],\n"Youth & recreational activities": [],\n"Outreach & engagement": [],\n"Accessibility & special needs": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  Plumbers:
    '__BUSINESS_NAME__ from Texas is a Plumbers Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nPlumber type (specialization):\n Commercial Plumber\n Construction Plumber\n Drainage Plumber\n Gas Fitting Plumber\n Residential Plumber\n Sanitary Plumber\n Service & Repair Plumber\n Water Supply Plumber\n\nPlumbing Service offered:\n Drain Cleaning and Repair\n Emergency Plumbing Services\n Fixture Installation & Repair\n Gas Line Installation & Repair\n Leak Detection & Repair\n New Drain & Water line installation\n Pipe Repair & Re-pipping\n Plumbing Inspection & Maintenance\n Septic System Installation\n Septic System Maintenance\n Sewer Line Repair & Replacement\n Water Heater Services\n Water Treatment & Filtration\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Plumber type (specialization)": [],\n"Plumbing Service offered": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Real Estate Professionals":
    '__BUSINESS_NAME__ from Texas is a Real Estate Professionals Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nCategories by license type & role:\n Associate Broker\n Home Inspector\n Leasing Agent\n Managing Broker\n Principal/Designated Broker\n Property Manager\n Real Estate Agent\n Real Estate Appraiser\n Real Estate Attorney\n Real Estate Broker\n Real Estate Developer\n Realtor\n Transaction Coordinator\n\nNiche specializations:\n Distressed Property Specialists\n Eco-Friendly/Green Specialists\n First-Time Homebuyer Specialists\n Foreclosures/Short Sales/REO Specialist\n Military Relocation Professionals (MRP)\n New Construction Specialist\n Real Estate Investor Specialists\n Seniors Real Estate Specialists (SRES®)\n\nProperty Type Specializations:\n Commercial Specialists\n Farms & Ranch Specialist\n Industrial Specialists\n Land Specialists\n Luxury Property Specialists\n Residential Specialists\n Vacation & Second Home Specialists\n\nResidential Real Estate:\n Condominium (Condo)\n Cooperative (Co-op)\n Mobile Home\n Multi-family Home (Up To 3 Units)\n Residential Land\n Single-family Home\n Townhouse\n Vacation Home\n\nCommercial Real Estate:\n Commercial Land\n Hospitality\n Industrial\n Medical Facility\n Mixed-use\n Multifamily (4 Units Or More)\n Office\n Retail\n Self-storage\n Special Purpose\n\nResidential Real Estate certifications:\n Accredited Buyer’s Representative (ABR)\n At Home with Diversity® (AHWD)\n Certified Luxury Home Marketing Specialist (CLHMS)\n Certified Residential Specialist (CRS)\n Graduate, REALTOR® Institute (GRI)\n Military Relocation Professional (MRP)\n NAR\'s Green Designation (GREEN)\n Real Estate Negotiation Expert (RENE)\n Resort and Second-Home Property Specialist (RSPS)\n Seller Representative Specialist (SRS)\n Seniors Real Estate Specialist (SRES)\n\nCommercial real estate certifications:\n Accredited Land Consultant (ALC)\n Certified Commercial Investment Member (CCIM)\n Certified International Property Specialist (CIPS)\n Certified Property Manager (CPM)\n Counselor of Real Estate (CRE)\n Society of Industrial & Office REALTORS (SIOR)\n\nCertifications for brokers & managers:\n Certified Real Estate Brokerage Manager (CRB)\n REALTOR® Association Certified Executive (RCE)\n\nLanguage Spoken:\n Balochi\n Bangla\n Bhojpuri\n Dari\n English\n Gujarati\n Hindi\n Kannda\n Malayalam\n Marathi\n Nepali\n Panjabi\n Pashto\n Sindhi\n Sinhala\n Tamil\n Telugu\n Tulu\n Urdu\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Categories by license type & role": [],\n"Niche specializations": [],\n"Property Type Specializations": [],\n"Residential Real Estate": [],\n"Commercial Real Estate": [],\n"Residential Real Estate certifications": [],\n"Commercial real estate certifications": [],\n"Certifications for brokers & managers": [],\n"Language Spoken": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Restaurants & Catering":
    '__BUSINESS_NAME__ from Texas is a Restaurants & Catering Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nAppetizers & Starters:\n Chaat\n Chili Paneer\n Chotpoti\n Dosas\n Fuchka/Pani Puri\n Hakka Noodles\n Lentil Soup\n Mughlai Paratha\n Pakoras\n Raita\n Samosa\n Shingara\n Vegetable Soup\n\nRice dishes:\n Basmati Rice\n Bhuna Khichuri\n Biryani\n Curd Rice\n Egg Fried Rice\n Gongura Biryani\n Jeera Rice\n Kacchi Biryani\n Morog Polao\n Plain Rice\n Pulao\n Ulavacharu Biryani\n\nCurries & Main Courses:\n Beef Brain Fry\n Beef Korma\n Beef Nihari\n Butter Chicken\n Butter Chine\n Chapli Kebab\n Chicken Karahi\n Chicken Korma\n Chicken Tikka\n Chicken Tikka Masala\n Dal / Lentil\n Dal Makhan\n Egg Curry\n Fish Curries\n Fish Tikka\n Goat Brain Fry\n Guntur Chicken\n Kababs\n Keema Curry\n Lamb Curry\n Meat Curries\n Mutton Curry\n Palak Paneer\n Paya\n Seekh Kebabs\n Shahi Paneer\n Tandoori Chicken\n Vegetable Curries\n\nVegetarian Dish:\n Aloo Gobi\n Baingan Bharta\n Bhorta\n Breads\n Chana\n Chana Masala\n Chili Paneer\n Luchi\n Malai Kofta\n Matar Paneer\n Mixed Vegetable\n Naan\n Paneer Butter Masala\n Paratha\n Potato Bhaji\n Puri\n Roti/Chapati\n\nDesserts & Sweets:\n Amriti\n Barfi\n Besan Ladoo\n Bundiya\n Chana Misti (Cheese Curd)\n Chomchom\n Falooda\n Gajjar Halwa\n Gulab Jamun\n Jalebi\n Kacha Golla\n Kaju Katli\n Kalojam\n Kheer / Shinni / Payesh\n Kulfi\n Mishti Doi (Sweet yogurt)\n Motichoor Ladoo\n Naru (Coconut Balls)\n Patishapta Pitha\n Phirni\n Pudding\n Rabri\n Ras Malai\n Rosogolla\n Sandesh\n Seviyan\n Sooji Halwa\n\nBeverages:\n ,Coconut Water\n Beetroot Juice\n Borhani\n Carrot Juice\n Cha (Tea)\n Coffee\n Fruit juice\n Green Tea\n Lassi\n Lemon Soda\n Muskmelon Juice\n Nannari Sharbat\n Orange Juice\n Pineapple Juice\n Watermelon Juice\n\nFeatures:\n Delivery\n Dine-in\n Outdoor Seating\n Takeout\n\nDietary Needs:\n Dairy-Free\n Gluten Free\n Halal\n Nut-Free\n Vegetarian/Vegan\n\nReservations Recommended:\n Reservation Recommended\n Walk-in Welcome\n\nPrice Range:\n Affordable\n Expensive\n Mid-range\n\nOccasion:\n Breakfast\n Dinner\n Lunch\n Special Occasions\n\nAmbiance:\n Casual\n Homely\n Lively\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        "Appetizers & Starters": [],\n"Rice dishes": [],\n"Curries & Main Courses": [],\n"Vegetarian Dish": [],\n"Desserts & Sweets": [],\n"Beverages": [],\n"Features": [],\n"Dietary Needs": [],\n"Reservations Recommended": [],\n"Price Range": [],\n"Occasion": [],\n"Ambiance": [],\n        "priceRange": "",\n        "tags": []\n        }\n',
  "Travel & Tourism":
    '__BUSINESS_NAME__ from Texas is a Travel & Tourism Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
  "Wholesalers & Suppliers":
    '__BUSINESS_NAME__ from Texas is a Wholesalers & Suppliers Business.\nGive me a catchy tagline and their business description in plain text without citation\nGive me -only the options you think are applicable for __BUSINESS_NAME__.\n\nWhat would be their price ranges:\n $ or $$ or $$$\n\nTags:\n Accept Cashapp\n Accept PayPal\n Accept Venmo\n Accept Zelle\n Accepts Credit Cards\n Accepts Cryptocurrency\n Coupons\n Dogs Allowed\n Handicap Friendly\n Offers Military Discount\n Open to All\n Parking available\n Plastic-Free Packaging\n Private Lot Parking\n Smoking Allowed\n WiFi\n\nRespond in JSON format like this:\n{\n        "tagline": "string",\n        "description": "string",\n        \n        "priceRange": "",\n        "tags": []\n        }\n',
};

function BusinessForm() {
  const [formData, setFormData] = useState({
    title: "",
    services: [],
    LLMJson: "",
    logo: null,
    cover: null,
    gallery: [],
    youtubeVideo: "",
    youtubeChannel: "",
    email: "",
    phone: "",
    website: "",
    social: "",
    workHours: "",
    location: "",
    facebook: "",
    instragram: "",
    linkedin: "",
    x: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((s) => s !== value),
    }));
  };

  const handleImageChange = (name, files) => {
    setFormData({ ...formData, [name]: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => {
      if (key !== "logo" && key !== "cover" && key !== "gallery") {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Append images
    if (formData.logo) formDataToSend.append("logo", formData.logo);
    if (formData.cover) formDataToSend.append("cover", formData.cover);
    if (formData.gallery)
      formData.gallery.forEach((file) =>
        formDataToSend.append("gallery", file)
      );

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        alert("Business submitted successfully!");
        console.log("Saved file:", result.file);
      } else {
        alert("Failed to submit business");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred");
    }
  };

  const copyPrompt = async () => {
    const title = formData.title;
    const selectedCategory = formData.services[0];
    const prompt = allPrompts[selectedCategory].replace(
      "__BUSINESS_NAME__",
      title
    );
    await navigator.clipboard.writeText(prompt);
  };

  return (
    <div className=" w-full bg-gradient-to-bl flex justify-center items-start px-8 py-2">
      <div className="w-full bg-white rounded-2xl shadow-xl">
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Column 1 - Categories */}
            <div>
              <div>
                <InputField
                  label="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Categories
              </h3>
              <div className="border rounded-lg p-4 ">
                <CheckboxGroup
                  label="Select Services"
                  name="services"
                  options={serviceOptions}
                  values={formData.services}
                  onChange={handleCheckboxChange}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mr-2">
                  LLM JSON
                </label>
                <button
                  onClick={copyPrompt}
                  type="button"
                  class="p-2 my-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Copy prompt
                </button>

                <textarea
                  name="LLMJson"
                  value={formData.LLMJson}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Column 2 & 3 - Other Fields */}
            <div className="lg:col-span-2 space-y-4">
              {/* Business Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <InputField
                  label="Work Hours"
                  name="workHours"
                  value={formData.workHours}
                  onChange={handleChange}
                />
                <InputField
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <ImageDropzone
                  label="Logo"
                  name="logo"
                  value={formData.logo}
                  onChange={handleImageChange}
                />
                <ImageDropzone
                  label="Cover Image"
                  name="cover"
                  value={formData.cover}
                  onChange={handleImageChange}
                />
                <ImageDropzone
                  label="Gallery Images (max 5)"
                  name="gallery"
                  multiple
                  value={formData.gallery}
                  onChange={handleImageChange}
                />
              </div>

              {/* Media & Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  label="Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <InputField
                  label="Website"
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
                <InputField
                  label="Facebook"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                />
                <InputField
                  label="YouTube Video URL"
                  name="youtubeVideo"
                  value={formData.youtubeVideo}
                  onChange={handleChange}
                />
                <InputField
                  label="YouTube Channel URL"
                  name="youtubeChannel"
                  value={formData.youtubeChannel}
                  onChange={handleChange}
                />
                <InputField
                  label="Instragram"
                  name="instragram"
                  value={formData.instragram}
                  onChange={handleChange}
                />
                <InputField
                  label="LinkedIn"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                />
                <InputField
                  label="X"
                  name="x"
                  value={formData.x}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
            >
              🚀 Submit Business
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusinessForm;
