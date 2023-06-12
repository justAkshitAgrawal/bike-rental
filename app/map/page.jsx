"use client";

import Navbar from "components/Navbar";
import { PageWrapper } from "../page-wrapper";
import GoogleMapReact from "google-map-react";

function page() {
  const defaultProps = {
    center: {
      lat: 28.5849,
      lng: 77.0583,
    },
    zoom: 13,
  };
  return (
    <div className="h-screen">
      <Navbar />
      <PageWrapper>
        <div className="flex items-center justify-center ">
          {" "}
          <div className="h-[80vh] w-[80%]">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default page;
