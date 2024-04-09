import React from 'react'
import { Button, Text, Heading, Img } from "../../components";
import ForEmployersLogo from "../../components/ForEmployersLogo";
import "../../styles/Navigation.css";

const Navigation = () => {
  return (
    <div>
         <header className="w-[91%] md:w-full custom-header">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex md:flex-col justify-between items-center w-[65%] md:w-full gap-5 custom-logo-section">
                    <ForEmployersLogo className="flex items-center rounded-tr-[5px] bg-deep_purple-600 custom-logo" />
                    <div className="flex sm:flex-col self-end justify-between items-center md:self-stretch mb-[5px] gap-5 flex-1 custom-links-section">
                      <div className="flex self-start">
                        <Text as="p" className="!text-blue_gray-400 text-center custom-talent-finder">
                          Talent Finder
                        </Text>
                      </div>
                      <a href="#" className="self-start custom-recruiters">
                        <Text as="p" className="!text-blue_gray-400 text-center">
                          For Recruiters
                        </Text>
                      </a>
                      <div className="flex flex-col items-center custom-employers">
                        <Heading size="xs" as="h6" className="text-center">
                          For Employers
                        </Heading>
                        <Img
                          src="images/img_vector_451.svg"
                          alt="vector451_one"
                          className="h-[3px] mt-[-1px] relative"
                        />
                      </div>
                      <a href="#" className="self-start custom-about-us">
                        <Text as="p" className="!text-blue_gray-400 text-center">
                          About Us
                        </Text>
                      </a>
                      <a href="Company" target="_blank" rel="noreferrer" className="self-end custom-company">
                        <Text as="p" className="!text-blue_gray-400 text-center">
                          Company
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-[17px] custom-buttons">
                    <Button size="sm" variant="outline" shape="round" className="sm:px-5 font-medium min-w-[129px] custom-login-button">
                      Log In
                    </Button>
                    <Button size="sm" shape="round" className="sm:px-5 !text-white-A700_01 font-medium min-w-[152px] custom-get-started-button">
                      Get Started
                    </Button>
                  </div>
                </div>
              </header>
    </div>
  )
}

export default Navigation
