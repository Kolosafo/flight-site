import Image from "next/image";
import Button from "./button";

export default function Home() {
  return (
    <main className="">
      <div className="md:h-56 h-40 bg-white flex flex-col justify-around items-center md:px-44 ">
        <Button call text="(234) 101-1012" style={"mt-5"} />
        <span className="font-semibold md:text-left text-center md:px-0 px-5">
          Customer Service – Book, Cancel or Make Flight Changes!
        </span>
      </div>
      <div className="relative flex md:flex-row flex-col">
        <div className="absolute w-full top-44 -z-10">
          <Image
            src={"/plane-bg.jpg"}
            alt="bg-plane"
            width={400}
            height={400}
            className="w-full md:block hidden"
          />
        </div>
        <div className="bg-[#000000c5] overflow-scroll md:px-40 text-white py-5 flex flex-col items-center justify-center z-10">
          <div className="flex items-center md:flex-row flex-col">
            <div className="flex flex-col items-center justify-center basis-1/2">
              <Image
                width={400}
                height={400}
                src={"/agent.png"}
                alt="agent"
                className="md:max-w-full w-[60%]"
              />
              <div className="flex justify-center items-center gap-1">
                <div className="h-4 w-4 rounded-full bg-[#37C932]"></div>
                <span className="font-bold">AGENTS AVAILABLE NOW!</span>
              </div>
            </div>
            <div className="flex flex-col gap-10 basis-1/2 text-center md:px-0 px-5 mt-10 text-lg md:items-start items-center">
              <span className="leading-7 w-[95%] md:text-base text-sm md:text-left text-center">
                Contact us for inquiries on flight tickets, booking cheap
                flights, or the wide range of budget-friendly travel deals we
                offer. Our agents are available 24/7 o provide rapid assistance
                and address your air travel queries. We specialize in locating
                the most affordable airfare and exclusive discounts, granting
                you access to unbeatable deals on airline reservations. Whether
                you’re looking for cheap flight tickets, Delta Airlines flights,
                cheap airline tickets, United Airlines, or simply aiming to buy
                plane tickets at the lowest possible rate, we’re here to help.
                Get in touch today!
              </span>
              <Button call text="(234) 101-1012" style="mt-10 w-4/5" />
            </div>
          </div>
          <span className="md:text-4xl md:text-left text-center text-2xl font-bold mt-20 mb-4 md:px-40 px-5">
            One-Stop Flight Ticket Booking Solution
          </span>
          <div className="flex flex-col md:text-[1rem] text-sm mt-10 gap-5 md:px-10 px-5">
            <span>
              Dreaming of an important business trip? Look no further! We offer
              a wide range of flight booking solutions that save you both time
              and money. Procuring cheap flight tickets is as simple as a few
              clicks with our platform.
            </span>
            <span>
              From the convenience of United Airlines flights to the vast
              network of Delta Airlines flights, we cater to all your air travel
              needs. If you’re in need of cheap airline tickets, fly tickets, or
              aiming to secure a journey with discount airlines, we’re your
              ultimate destination. Explore our economical airfare and get set
              to embark on your adventure today!
            </span>
            <span className="font-bold">
              Unbeatable Offers, Instant Booking
            </span>
            <span>
              We accumulate the top airline reservations from various providers,
              ensuring you snag the best deals all in one place. Our flight
              ticket booking process is designed to be quick, easy, and
              cost-effective.
            </span>
            <span>
              With us, you not only find flights but also a platform that aids
              in buying plane tickets with the best discount airfare. Whether
              you’re after a cheap ticket for a spontaneous weekend trip or
              planning ahead with our find flight deals feature, we’ve got you
              covered. Your perfect air ticket awaits you here with us. So, why
              wait? Start your journey today!
            </span>
            <Button
              call
              text="Call Now"
              style="mt-10 mb-5 w-[40%] self-center"
              mainStyle={{ width: "60%" }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white flex flex-col justify-around items-center md:px-44  text-[1rem]">
        <Image
          width={500}
          height={500}
          src={"/globe-mouse.png"}
          alt="globe"
          className="mt-4"
        />
        <span className="text-2xl mt-10 font-bold">
          Why You Should choose us?
        </span>
        <div className="flex flex-col md:text-[1.1rem] text-sm mt-10 gap-5 md:px-10 px-5">
          <span className="font-bold">Choose Your Perfect Airline</span>
          <span>
            We provide you with access to a vast array of airline choices.
            Forget scouring multiple websites like “Priceline flights” or trying
            to find “cheap airlines”. The air ticket you’re searching for is
            just a few clicks away on our all-encompassing platform.
          </span>
          <span className="font-bold">
            Affordable Pricing, Superior Journey
          </span>
          <span>
            We firmly hold the belief that getting cheap airline tickets
            shouldn’t mean compromising the quality of your travel experience.
            As such, we deliver an unbeatable combination of cost-effective
            airfare and high-quality services. Whether you’re hunting for
            discount airfare or luxury plane tickets, we cater to all your
            needs.
          </span>
          <span className="font-bold">Ready for Takeoff?</span>
          <span>
            We’re here to make your flight booking journey as seamless as
            possible. Whether you need assistance with new airline reservations,
            are looking to book United Airlines flights, Delta Airlines flights,
            or need to make changes to an existing air ticket, we’re just a
            phone call away. Reach out to us today and transform your flight
            dreams into reality! What’s holding you back? Dial us up and
            kickstart your next adventure with the perfect fly tickets.
          </span>
          <Button
            call
            text="Call Now"
            style="mt-10 mb-10 w-[49%] self-center"
            mainStyle={{ width: "60%" }}
          />
        </div>
      </div>
      <div className="last-bg text-white">
        <div className="bg-[#000000c5] flex flex-col justify-around items-center md:px-44 px-5 ">
          <span className="text-2xl mt-10 font-bold">We’re Available 24/7</span>
          <Image
            width={400}
            height={400}
            src={"/call-icon.png"}
            alt="agent"
            className="my-8 md:max-w-full w-[60%]"
          />
          <span className="text-2xl mb-5 font-bold">Fly with the Best</span>
          <span className="md:text-[1.1rem] text-sm mt-10 text-center leading-8 mb-5">
            From Delta Airlines flights to United Airlines flights, to American
            Airlines flights and more, we have your needs sorted. Our platform
            exhibits an wide range of top-tier airline flights, giving you the
            freedom to select based on your preference and budget. Whether
            you’re seeking a cheap flight ticket, fly tickets from cheap
            airlines, or wish to book a trip with competitive airfare, we’re
            your one-stop solution for all air travel requirements.
          </span>
        </div>
      </div>
      <div className="bg-black md:px-44  py-5 flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center">
        <span className="whitespace-nowrap text-white">
          Terms of Service | Privacy Policy
        </span>
        <Button
          mainStyle={{ width: "50%" }}
          call={false}
          text="Contact Us"
          style={"w-[20%] md:mb-0 mb-5"}
        />
      </div>
    </main>
  );
}
