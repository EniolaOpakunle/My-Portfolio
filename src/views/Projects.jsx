import React from "react";
import Card from "../components/Card";
import restImg from "../assets/images/rest.jpg";
import eCommerceImg from "../assets/images/e-commerce.jpg";
import faqImg from "../assets/images/faq.jpg";
import smoothShuttleImg from "../assets/images/smoothShuttle.webp";
import pausepointImg from "../assets/images/pausepoint.webp";

export default function Projects() {
  return (
    <div id="project" className="bg-customBlue py-16">
      <div className="w-[86%] m-auto space-y-10">
        <p className="text-[24px] font-[600] text-white text-center">
          Projects
        </p>
        <p className="text-white text-center">
          These are some of my featured projects. You can view more on Github.
        </p>
        <div className="space-y-12">
          <div className="gap-y-12 flex-col flex lg:flex-row justify-center gap-x-12">
            <Card
              title={"REST Countries API"}
              image={restImg}
              Glink={"https://github.com/EniolaOpakunle/REST_Countries_API"}
              Llink={"https://rest-countries-api-beta-rouge.vercel.app/"}
              Details={"List of all countries with a map of the geographical area"}
            />
            <Card
              title={"E-commerce Product Page"}
              image={eCommerceImg}
              Glink={
                "https://github.com/EniolaOpakunle/E-Commerce-Product-Page"
              }
              Llink={"https://e-commerce-product-page-virid-five.vercel.app/"}
              Details={"A product details page"}
            />
            <Card
              title={"Pause Point"}
              image={pausepointImg}
              Glink={"https://github.com/ndukwesamuel/pausepoint"}
              Llink={
                "https://play.google.com/store/apps/details?id=com.pause_point.PausePoint&hl=en"
              }
              Details={"An Estate Management App"}
            />
          </div>
          <div className="gap-y-12 flex-col flex lg:flex-row justify-center gap-x-10">
            <Card
              title={"WebuyMobile"}
            //   image={eCommerceImg}
              Glink={"https://github.com/ndukwesamuel/webuymobile"}
              Details={"An e-commerce app"}
            />
            <Card
              title={"SmoothShuttle"}
              image={smoothShuttleImg}
              Glink={""}
              Llink={
                "https://play.google.com/store/apps/details?id=com.samheart.busapp&hl=en"
              }
            />

            {/* <Card
              title={"FAQ Page"}
              image={faqImg}
              Glink={"https://github.com/EniolaOpakunle/Redux"}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
