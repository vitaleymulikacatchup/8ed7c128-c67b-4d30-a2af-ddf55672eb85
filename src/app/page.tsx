"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import { Star, Building2, Bed, Users, MapPin, Sparkles, Heart, ChefHat, Briefcase, Dumbbell, MessageCircle, Award, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "feature" },
            { name: "Amenities", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Haven Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.com",
            props: {
              className: "bg-primary-cta text-white hover:bg-accent transition-all duration-300"
            }
          }}
          className="backdrop-blur-md bg-card/80 shadow-lg"
          navItemClassName="text-foreground/80 hover:text-foreground transition-colors"
          buttonClassName="px-6 py-2 rounded-soft shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        />
      </div>

      <div id="hero" data-section="hero" className="relative overflow-hidden">
        <div className="relative z-10">
          <HeroBillboard
            title="Welcome to Grand Haven Hotel"
            description="Experience luxury and comfort in the heart of the city. Our elegant accommodations and world-class service create unforgettable memories for every guest."
            tag="5-Star Luxury"
            tagIcon={Star}
            buttons={[
              {
                text: "Book Your Stay",
                href: "https://booking.com",
                props: {
                  className: "bg-primary-cta text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                }
              },
              {
                text: "Explore Rooms",
                href: "feature",
                props: {
                  className: "bg-secondary-cta text-foreground px-8 py-3 text-lg border-2 border-primary-cta hover:bg-primary-cta hover:text-white transition-all duration-300"
                }
              }
            ]}
            imageSrc="https://images.pexels.com/photos/34428372/pexels-photo-34428372.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            imageAlt="Grand Haven Hotel exterior with beautiful architecture"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background-accent/10"
            containerClassName="text-center max-w-4xl mx-auto"
            mediaWrapperClassName="absolute inset-0 -z-10"
            imageClassName="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="bg-gradient-to-b from-background to-card/50">
        <SplitAbout
          title="Unparalleled Hospitality Experience"
          description="At Grand Haven Hotel, we combine timeless elegance with modern luxury to create an extraordinary stay for our distinguished guests."
          tag="Our Story"
          tagIcon={Building2}
          bulletPoints={[
            {
              title: "Premium Accommodations",
              description: "Luxuriously appointed rooms and suites with city or garden views, featuring premium amenities and elegant furnishings",
              icon: Bed
            },
            {
              title: "World-Class Service",
              description: "24/7 concierge service, personalized attention, and dedicated staff to ensure every need is met with excellence",
              icon: Users
            },
            {
              title: "Prime Location",
              description: "Situated in the heart of the city, minutes from major attractions, business districts, and cultural landmarks",
              icon: MapPin
            }
          ]}
          imageSrc="https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel spa and wellness facilities"
          imagePosition="right"
          buttons={[
            {
              text: "Learn More",
              href: "about",
              props: {
                className: "bg-primary-cta text-white px-6 py-2 hover:bg-accent transition-colors duration-300"
              }
            }
          ]}
          className="py-20 bg-background"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="feature" data-section="feature" className="bg-gradient-to-b from-card to-background">
        <FeatureCardTwo
          title="Exceptional Amenities & Services"
          description="Discover the comprehensive range of luxury amenities and personalized services designed to exceed your expectations."
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind in our full-service spa featuring massage therapy, wellness treatments, and relaxation facilities",
              icon: Heart,
              button: {
                text: "Book Spa",
                href: "https://spa-booking.com"
              }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our award-winning restaurant featuring gourmet cuisine and extensive wine selection",
              icon: ChefHat,
              button: {
                text: "View Menu",
                href: "https://restaurant-menu.com"
              }
            },
            {
              title: "Business Center",
              description: "State-of-the-art business facilities including meeting rooms, high-speed internet, and professional support services",
              icon: Briefcase,
              button: {
                text: "Reserve Space",
                href: "https://business-center.com"
              }
            },
            {
              title: "Fitness & Recreation",
              description: "Modern fitness center with premium equipment, swimming pool, and recreational facilities for your wellness journey",
              icon: Dumbbell,
              button: {
                text: "View Facilities",
                href: "fitness"
              }
            }
          ]}
          buttons={[
            {
              text: "View All Amenities",
              href: "amenities",
              props: {
                className: "bg-primary-cta text-white px-6 py-2 hover:bg-accent transition-colors duration-300"
              }
            }
          ]}
          className="py-20 bg-card"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="team" data-section="team" className="bg-gradient-to-b from-background to-card/30">
        <TeamCardTwo
          title="Meet Our Hospitality Experts"
          description="Our dedicated team of hospitality professionals is committed to making your stay exceptional through personalized service and attention to detail."
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "General Manager",
              description: "With over 15 years in luxury hospitality management, Sarah ensures every guest receives world-class service and personalized attention.",
              imageSrc: "https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell, General Manager",
              socialLinks: [
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/sarah-mitchell"
                },
                {
                  icon: "Mail",
                  url: "mailto:sarah@grandhaven.com"
                }
              ]
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Head Concierge",
              description: "Marcus brings extensive local knowledge and exceptional service skills to help guests discover the best of our city and region.",
              imageSrc: "https://images.pexels.com/photos/16731630/pexels-photo-16731630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson, Head Concierge",
              socialLinks: [
                {
                  icon: "Phone",
                  url: "tel:+1234567890"
                },
                {
                  icon: "Mail",
                  url: "mailto:marcus@grandhaven.com"
                }
              ]
            }
          ]}
          className="py-20 bg-background"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="testimonial" data-section="testimonial" className="bg-gradient-to-b from-card/30 to-card">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Read genuine reviews from our valued guests who have experienced the exceptional hospitality and luxury at Grand Haven Hotel."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Robert Chen",
              role: "Business Executive",
              testimonial: "Outstanding service from check-in to departure. The staff anticipated every need, and the accommodations were absolutely luxurious. Will definitely return for future business trips.",
              imageSrc: "https://images.pexels.com/photos/3770106/pexels-photo-3770106.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Chen guest testimonial"
            },
            {
              id: "2",
              name: "Emma Rodriguez",
              role: "Vacation Traveler",
              testimonial: "Our anniversary stay was magical! The attention to detail, beautiful rooms, and exceptional dining made it truly unforgettable. The spa treatments were divine.",
              imageSrc: "https://images.pexels.com/photos/34436649/pexels-photo-34436649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez guest testimonial"
            },
            {
              id: "3",
              name: "David Thompson",
              role: "Family Traveler",
              testimonial: "Perfect family vacation experience. The staff was incredibly welcoming to our children, and the facilities were spotless. The location made exploring the city so convenient.",
              imageSrc: "https://images.pexels.com/photos/8790808/pexels-photo-8790808.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Thompson guest testimonial"
            },
            {
              id: "4",
              name: "Lisa Parker",
              role: "Corporate Guest",
              testimonial: "The business center and meeting facilities exceeded expectations. Professional environment with top-notch technology and support staff. Highly recommend for corporate events.",
              imageSrc: "https://images.pexels.com/photos/6466492/pexels-photo-6466492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Parker guest testimonial"
            }
          ]}
          className="py-20 bg-card"
          containerClassName="max-w-7xl mx-auto px-4"
        />
      </div>

      <div id="socialProof" data-section="socialProof" className="bg-gradient-to-b from-card to-background/50">
        <SocialProofOne
          title="Trusted by Leading Hotel Groups"
          description="We maintain partnerships and recognition with the world's most prestigious hospitality organizations and industry leaders."
          tag="Partners"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
          className="py-16 bg-background"
          containerClassName="max-w-7xl mx-auto px-4"
          logoItemClassName="flex items-center justify-center"
          logoImageClassName="h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div id="faq" data-section="faq" className="bg-gradient-to-b from-background/50 to-card">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about reservations, amenities, policies, and services at Grand Haven Hotel."
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is your check-in and check-out policy?",
              content: "Check-in is available from 3:00 PM and check-out is until 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability and potential additional charges."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary shuttle service to and from the airport for our guests. Please contact the concierge desk at least 24 hours in advance to schedule your transportation."
            },
            {
              id: "3",
              title: "What amenities are included in the room rate?",
              content: "All rooms include complimentary high-speed Wi-Fi, 24-hour room service, daily housekeeping, access to fitness center, and use of business center facilities. Premium toiletries and luxury linens are also provided."
            },
            {
              id: "4",
              title: "Is parking available at the hotel?",
              content: "We offer both self-parking and valet parking services. Valet parking is $35 per night, while self-parking is $20 per night. Both options include in-and-out privileges during your stay."
            },
            {
              id: "5",
              title: "Can I cancel or modify my reservation?",
              content: "Reservations can be cancelled or modified up to 48 hours before your arrival date without penalty. Cancellations within 48 hours will be charged one night's room rate."
            }
          ]}
          animationType="smooth"
          className="py-20 bg-card"
          containerClassName="max-w-4xl mx-auto px-4"
        />
      </div>

      <div id="contact" data-section="contact" className="bg-gradient-to-b from-card to-background">
        <ContactSplitForm
          title="Get in Touch with Our Team"
          description="Have questions about your stay, need assistance with reservations, or want to plan a special event? Our dedicated team is here to help make your experience exceptional."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs, special requests, or any questions you have...",
            rows: 5,
            required: true
          }}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Haven Hotel elegant lobby and reception area"
          mediaPosition="right"
          buttonText="Send Message"
          onSubmit="console.log"
          className="py-20 bg-background"
          containerClassName="max-w-7xl mx-auto px-4"
          formCardClassName="bg-card shadow-xl border border-accent/20"
          buttonClassName="w-full bg-primary-cta text-white py-3 px-6 text-lg font-semibold hover:bg-accent transition-all duration-300 transform hover:scale-[1.02]"
        />
      </div>
    </ThemeProvider>
  );
}