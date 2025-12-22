import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaRoad,
  FaHospital,
  FaSchool,
  FaShoppingCart,
  FaChartLine,
  FaCheckCircle,
  FaHome,
} from "react-icons/fa";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

// Location data
const locationData: Record<
  string,
  {
    name: string;
    description: string;
    highlights: string[];
    connectivity: string[];
    amenities: string[];
    priceRange: string;
    investment: string;
    coordinates: { lat: number; lng: number };
  }
> = {
  kalyanpur: {
    name: "Kalyanpur",
    description:
      "Kalyanpur is one of the most sought-after residential localities in Dehradun, known for its excellent connectivity, developed infrastructure, and peaceful environment. Located near Shimla Bypass Road, it offers the perfect blend of urban convenience and natural beauty.",
    highlights: [
      "Prime location on Shimla Bypass Road",
      "Well-developed infrastructure",
      "Excellent connectivity to main city",
      "Proximity to educational institutions",
      "Growing commercial hub",
      "MDDA and RERA approved properties",
    ],
    connectivity: [
      "2 km from Shimla Bypass Road",
      "5 km from Dehradun Railway Station",
      "8 km from ISBT Dehradun",
      "12 km from Jolly Grant Airport",
      "Direct connectivity to Mussoorie Road",
    ],
    amenities: [
      "Top schools: DPS, Doon Public School",
      "Hospitals: Max Hospital, Synergy Hospital",
      "Shopping: Big Bazaar, Pacific Mall nearby",
      "Banks and ATMs within 1 km",
      "Restaurants and cafes",
      "Parks and recreational areas",
    ],
    priceRange: "₹15,000 - ₹25,000 per sq yard",
    investment:
      "Expected appreciation of 15-20% annually. Excellent for both residential and investment purposes with high rental demand.",
    coordinates: { lat: 30.3547, lng: 78.0422 },
  },
  pondha: {
    name: "Pondha",
    description:
      "Pondha is an emerging prime residential locality in Dehradun, offering modern amenities and excellent connectivity. It's rapidly developing into a preferred choice for families and investors looking for quality properties at reasonable prices.",
    highlights: [
      "Rapidly developing area",
      "Modern residential projects",
      "Good connectivity to main city",
      "Peaceful and pollution-free environment",
      "Affordable property prices",
      "High growth potential",
    ],
    connectivity: [
      "Located on Dehradun-Haridwar Highway",
      "6 km from Dehradun city center",
      "7 km from Railway Station",
      "15 km from Jolly Grant Airport",
      "Well-connected via public transport",
    ],
    amenities: [
      "Schools: St. Joseph Academy, Convent Schools",
      "Hospitals: Community health centers nearby",
      "Markets: Local shopping complexes",
      "Banks and post office",
      "Places of worship",
      "Sports facilities",
    ],
    priceRange: "₹12,000 - ₹20,000 per sq yard",
    investment:
      "High growth potential with 18-25% expected appreciation. Ideal for first-time buyers and investors looking for long-term gains.",
    coordinates: { lat: 30.3265, lng: 78.0592 },
  },
  dholas: {
    name: "Dholas",
    description:
      "Dholas is a premium residential locality in Dehradun, known for its upscale properties and excellent infrastructure. The area offers a perfect blend of urban living with proximity to nature, making it ideal for families seeking a high-quality lifestyle.",
    highlights: [
      "Premium residential area",
      "Excellent infrastructure",
      "Proximity to Rajpur Road",
      "Scenic mountain views",
      "Well-planned layouts",
      "High-end residential projects",
    ],
    connectivity: [
      "3 km from Rajpur Road",
      "4 km from Clock Tower (city center)",
      "7 km from Railway Station",
      "10 km from Jolly Grant Airport",
      "Near Forest Research Institute",
    ],
    amenities: [
      "Premium schools: The Doon School, Welham Girls",
      "Hospitals: Max, Doon Hospital nearby",
      "Shopping: Premium malls and markets",
      "Restaurants and cafes",
      "Gyms and fitness centers",
      "Parks and walking trails",
    ],
    priceRange: "₹20,000 - ₹35,000 per sq yard",
    investment:
      "Stable appreciation of 12-15% annually. Ideal for high-end residential purposes with excellent rental yields.",
    coordinates: { lat: 30.3365, lng: 78.0265 },
  },
  "vikas-nagar": {
    name: "Vikas Nagar",
    description:
      "Vikas Nagar is a town and Nagar Palika in Dehradun district of Uttarakhand. It's an emerging real estate destination offering affordable property options with good connectivity to Dehradun and other major cities.",
    highlights: [
      "Affordable property prices",
      "Peaceful town environment",
      "Good connectivity",
      "Developing infrastructure",
      "Agricultural land available",
      "Investment opportunities",
    ],
    connectivity: [
      "40 km from Dehradun",
      "45 km from Haridwar",
      "National Highway 72 connectivity",
      "Well-connected by road",
      "Regular bus services",
    ],
    amenities: [
      "Local schools and colleges",
      "Government hospital",
      "Local markets",
      "Banks and ATMs",
      "Religious places",
      "Basic civic amenities",
    ],
    priceRange: "₹5,000 - ₹12,000 per sq yard",
    investment:
      "High growth potential with 20-30% expected appreciation as infrastructure develops. Excellent for budget-conscious buyers and long-term investors.",
    coordinates: { lat: 30.4698, lng: 77.7715 },
  },
  dehradun: {
    name: "Dehradun",
    description:
      "Dehradun, the capital of Uttarakhand, is a prime real estate destination offering diverse property options from residential plots to commercial spaces. Known for its pleasant climate, excellent educational institutions, and growing infrastructure, Dehradun attracts buyers from across India.",
    highlights: [
      "Capital city of Uttarakhand",
      "Pleasant year-round climate",
      "World-class educational institutions",
      "Growing IT and commercial sector",
      "Excellent connectivity",
      "Gateway to Himalayan tourist destinations",
    ],
    connectivity: [
      "Jolly Grant Airport - Domestic flights",
      "Railway connectivity to major cities",
      "National Highway network",
      "Well-developed road infrastructure",
      "Metro project under planning",
    ],
    amenities: [
      "Premium educational institutions",
      "Multi-specialty hospitals",
      "Shopping malls and markets",
      "Restaurants and entertainment",
      "Parks and recreational facilities",
      "Cultural and sports venues",
    ],
    priceRange: "₹10,000 - ₹50,000 per sq yard",
    investment:
      "Steady appreciation of 12-18% annually depending on locality. Excellent for both residential and commercial investments with strong rental market.",
    coordinates: { lat: 30.3165, lng: 78.0322 },
  },
  saharanpur: {
    name: "Saharanpur",
    description:
      "Saharanpur is a city in Uttar Pradesh, close to Uttarakhand border, offering affordable real estate options with good connectivity. It's known for its wood carving industry and agricultural products.",
    highlights: [
      "Affordable property options",
      "Good connectivity to Delhi and Dehradun",
      "Industrial and commercial hub",
      "Agricultural land available",
      "Growing infrastructure",
      "Strategic location",
    ],
    connectivity: [
      "160 km from Delhi",
      "65 km from Dehradun",
      "Railway station with good connectivity",
      "National Highway 709B",
      "Regular bus services",
    ],
    amenities: [
      "Schools and colleges",
      "Government and private hospitals",
      "Local markets",
      "Banks and financial institutions",
      "Religious and cultural places",
      "Basic civic amenities",
    ],
    priceRange: "₹3,000 - ₹10,000 per sq yard",
    investment:
      "Growing market with 15-25% potential appreciation. Suitable for budget buyers and investors looking for affordable options.",
    coordinates: { lat: 29.9670, lng: 77.5460 },
  },
};

type Props = {
  params: Promise<{ location: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const locationInfo = locationData[location];

  if (!locationInfo) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `Properties in ${locationInfo.name}, Dehradun | Residential Plots & Land for Sale`,
    description: `Find premium properties in ${locationInfo.name}, Dehradun. ${locationInfo.description.substring(0, 150)}... ${locationInfo.priceRange}`,
    keywords: [
      `properties in ${locationInfo.name}`,
      `${locationInfo.name} real estate`,
      `plots in ${locationInfo.name}`,
      `land for sale ${locationInfo.name}`,
      `${locationInfo.name} dehradun properties`,
      `residential plots ${locationInfo.name}`,
    ],
    openGraph: {
      title: `Properties in ${locationInfo.name}, Dehradun | Shah Properties`,
      description: `Premium properties in ${locationInfo.name}. ${locationInfo.priceRange}. RERA approved properties with bank loan facility.`,
      images: [
        {
          url: `/images/locations/${location}.jpg`,
          width: 1200,
          height: 630,
          alt: `Properties in ${locationInfo.name}, Dehradun`,
        },
      ],
    },
    alternates: {
      canonical: `https://shahproperties.8bitcode.in/locations/${location}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({
    location,
  }));
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const locationInfo = locationData[location];

  if (!locationInfo) {
    notFound();
  }

  // Filter properties for this location
  const locationProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <FaMapMarkerAlt className="text-3xl text-emerald-300" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Properties in {locationInfo.name}
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl">
            {locationInfo.description}
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose {locationInfo.name}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationInfo.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-emerald-500"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-600 text-xl mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price & Investment */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <FaChartLine className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Price Range
                </h3>
              </div>
              <p className="text-3xl font-bold text-emerald-600 mb-4">
                {locationInfo.priceRange}
              </p>
              <p className="text-gray-600">
                Competitive pricing with excellent value for money
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <FaHome className="text-teal-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Investment Potential
                </h3>
              </div>
              <p className="text-gray-700">{locationInfo.investment}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Connectivity */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaRoad className="text-3xl text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Connectivity
                </h2>
              </div>
              <div className="space-y-4">
                {locationInfo.connectivity.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow"
                  >
                    <FaCheckCircle className="text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FaShoppingCart className="text-3xl text-teal-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Nearby Amenities
                </h2>
              </div>
              <div className="space-y-4">
                {locationInfo.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow"
                  >
                    {item.toLowerCase().includes("school") ? (
                      <FaSchool className="text-teal-600 mt-1 flex-shrink-0" />
                    ) : item.toLowerCase().includes("hospital") ? (
                      <FaHospital className="text-teal-600 mt-1 flex-shrink-0" />
                    ) : (
                      <FaCheckCircle className="text-teal-600 mt-1 flex-shrink-0" />
                    )}
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Properties */}
      {locationProperties.length > 0 && (
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Available Properties in {locationInfo.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Properties in {locationInfo.name}?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Get in touch with our experts for personalized property
            recommendations and site visits
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              href="/properties"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

