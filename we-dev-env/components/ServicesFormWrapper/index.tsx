"use client"

import React, { useState } from "react";
import ServiceItem from "../services-item-component/ServiceItem";
import SurveyPopupForm from "../survey-popup-form/SurveyPopupForm";
import { ServicesInterface, ServiceProcessInterface } from "@/Interfaces/Interfaces";

const ServicesFormWrapper = ({ processes }: ServicesInterface) => {
  const [visible, setVisible] = useState(false);
  const togglePop = () => setVisible(!visible);

  return <>
    {processes.map((post: ServiceProcessInterface, index: number) => <ServiceItem
      post={post}
      toggleFormPop={togglePop}
      key={index}
    />)}
    <SurveyPopupForm toggle={togglePop} visible={visible} />
  </>


}

export default ServicesFormWrapper;
