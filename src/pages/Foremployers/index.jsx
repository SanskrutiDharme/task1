import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Slider } from "../../components";
import ForEmployersLogo from "../../components/ForEmployersLogo";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import Navigation from "components/Main/Navigation";

export default function ForemployersPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Hubnex Task1</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full pb-[1235px] md:pb-5 bg-white-A700">
        <div className="flex flex-col items-center">
          <div className="self-stretch py-[25px] sm:py-5 bg-gray-100">
            <div className="flex flex-col w-full mt-[9px] gap-[19px] mx-auto md:p-5 max-w-[1320px]">
              <header className="w-[91%] md:w-full">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <div className="flex md:flex-col justify-between items-center w-[65%] md:w-full gap-5 custom-logo-section">
                    <ForEmployersLogo className="flex items-center rounded-tr-[5px] bg-deep_purple-600 custom-logo" />

                    <div className="flex sm:flex-col self-end justify-between items-center md:self-stretch mb-[5px] gap-5 flex-1">
                      <div className="flex self-start">
                        <Text
                          as="p"
                          className="!text-blue_gray-400 text-center"
                        >
                          Talent Finder
                        </Text>
                      </div>
                      <a href="#" className="self-start">
                        <Text
                          as="p"
                          className="!text-blue_gray-400 text-center"
                        >
                          For Recruiters
                        </Text>
                      </a>
                      <div className="flex flex-col items-center">
                        <Heading size="xs" as="h6" className="text-center">
                          For Employers
                        </Heading>
                        <Img
                          src="images/img_vector_451.svg"
                          alt="vector451_one"
                          className="h-[3px] mt-[-1px] relative"
                        />
                      </div>
                      <a href="#" className="self-start">
                        <Text
                          as="p"
                          className="!text-blue_gray-400 text-center"
                        >
                          About Us
                        </Text>
                      </a>
                      <a
                        href="Company"
                        target="_blank"
                        rel="noreferrer"
                        className="self-end"
                      >
                        <Text
                          as="p"
                          className="!text-blue_gray-400 text-center"
                        >
                          Company
                        </Text>
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-[17px]">
                    <Button
                      size="sm"
                      variant="outline"
                      shape="round"
                      className="sm:px-5 font-medium min-w-[129px]"
                    >
                      Log In
                    </Button>
                    <Button
                      size="sm"
                      shape="round"
                      className="sm:px-5 !text-white-A700_01 font-medium min-w-[152px]"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </header>
              {/* <Navigation/> */}

              <div className="h-[596px] md:h-auto relative">
                <div className="flex sm:flex-col justify-center items-center w-[45%] h-max right-[0.00px] bottom-0 top-0 my-auto absolute sm:relative">
                  <div className="flex self-end justify-center w-[50%] sm:w-full mb-[13px] z-[1]">
                    <div className="flex justify-center items-start w-full gap-[10px] p-3.5 bg-deep_purple-600 rounded-[5px]">
                      <Button
                        color="deep_purple_50"
                        size="lg"
                        className="w-[64px] rounded-[5px]"
                      >
                        <Img src="images/img_search.svg" />
                      </Button>
                      <Heading
                        size="md"
                        as="h1"
                        className="w-[63%] mt-1.5 !text-deep_purple-50 !text-[24.94px] !font-semibold"
                      >
                        <span className="text-deep_purple-50 font-spacegrotesk font-bold ">
                          <>
                            +360
                            <br />
                          </>
                        </span>
                        <span className="text-deep_purple-50 font-garnettlight text-[12.31px] font-light">
                          Happy Companies
                        </span>
                      </Heading>
                    </div>
                  </div>
                  <Img
                    src="images/img_ellipse_6033.png"
                    alt="image"
                    className="sm:self-stretch sm:w-full ml-[-201px] sm:ml-0 relative flex-1 object-cover"
                  />
                </div>
                <div className="flex md:flex-col justify-center items-start w-full">
                  <Heading
                    size="4xl"
                    as="h2"
                    className="w-[48%] md:w-full mt-[85px] !font-montserrat z-[1] "
                  >
                    <span className="text-deep_purple-600 font-garnettsemibold text-[54px] font-semibold">
                      Power Up Your&nbsp;
                    </span>
                    <span className="text-deep_purple-600 font-garnettsemibold text-[54px] font-semibold">
                      <>
                        Hiring
                        <br />
                      </>
                    </span>
                    <span className="text-deep_purple-600 font-garnettregular text-5xl font-normal">
                      with Rework .
                    </span>
                  </Heading>
                  <Img
                    src="images/img_mask_group.png"
                    alt="image_one"
                    className="w-[52%] md:w-full ml-[-109px] md:ml-0 relative mt-44"
                  />
                </div>
                <Text
                  size="s"
                  as="p"
                  className="w-[52%] left-[0.00px] top-[40%] m-auto !text-gray-900 leading-[22px] absolute"
                >
                  Empower your business with cutting-edge A.I. technology,
                  simplified processes, and top-tier talent connections. Rework
                  is your strategic partner in redefining how you hire{" "}
                </Text>
                <div className="flex flex-col items-start w-[21%] bottom-[18%] left-[0.00px] m-auto absolute">
                  <Button
                    size="xl"
                    className="w-full sm:px-5 !text-gray-100 rounded-[20px]"
                  >
                    Book A Demo
                  </Button>
                  <div className="flex items-center mt-[27px] gap-2.5">
                    <Img
                      src="images/img_checkmark.svg"
                      alt="checkmark_one"
                      className="h-[20px] w-[20px]"
                    />
                    <Text
                      size="s"
                      as="p"
                      className="self-end mb-[5px] !text-deep_purple-600"
                    >
                      No credit Required
                    </Text>
                  </div>
                  <div className="flex items-center gap-2.5 py-[7px]">
                    <Img
                      src="images/img_checkmark.svg"
                      alt="checkmark_three"
                      className="h-[20px] w-[20px]"
                    />
                    <Text
                      size="s"
                      as="p"
                      className="self-start !text-deep_purple-600"
                    >
                      Streamlined Recruitment Process
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch py-[50px] md:py-5 bg-deep_purple-50 shadow-xs">
            <div className="flex flex-col items-center gap-7 overflow-auto">
              <Text
                size="xl"
                as="p"
                className="!text-deep_purple-200 text-center"
              >
                Hire for 1000+ Brands Including
              </Text>
              <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto md:p-5 px-12 max-w-[1714px]">
                {/* <Img src="images/img_microsoft_1.svg" alt="microsoftone" className="h-[26px] md:w-full" /> */}
                <Img
                  src="images/img_google_2015_1.svg"
                  alt="google2015one"
                  className="h-[31px] md:w-full"
                />
                <Img
                  src="images/img_kisspng_amazon.png"
                  alt="kisspngamazon"
                  className="w-[8%] md:w-[10%] object-cover"
                />
                <Img
                  src="images/img_kisspng_nokia_n.png"
                  alt="kisspngnokian"
                  className="w-[8%] md:w-[10%] object-cover"
                />
                <Img
                  src="images/img_vector.svg"
                  alt="vector_one"
                  className="h-[42px] md:w-full"
                />
                <Img
                  src="images/img_microsoft_1.svg"
                  alt="microsofttwo"
                  className="h-[26px] md:w-full"
                />
                <Img
                  src="images/img_google_2015_1.svg"
                  alt="google2015two"
                  className="h-[31px] md:w-full"
                />
                <Img
                  src="images/img_kisspng_amazon.png"
                  alt="kisspngamazon"
                  className="w-[8%] md:w-[10%] object-cover"
                />
              </div>
            </div>
          </div>
          <Heading as="h2" className="mt-[99px] capitalize text-center">
            <span className="text-deep_purple-600">
              Our Amazing Benefits&nbsp;
            </span>
            <span className="text-deep_purple-600 font-garnettregular font-normal">
              Helpful For Your Hiring
            </span>
          </Heading>
          <div className="w-full mt-[85px] mx-auto md:p-5 max-w-[1200px]">
            <div>
              <div className="justify-center gap-[84px] grid-cols-[repeat(auto-fill,_minmax(343px_,_1fr))] grid">
                <div className="flex flex-col w-full gap-[18px]">
                  <Img
                    src="images/img_eos_icons_ai.svg"
                    alt="image"
                    className="h-[50px] w-[50px]"
                  />
                  <div>
                    <Heading size="md" as="h2" className="!font-librefranklin">
                      <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                        <>
                          60%
                          <br />
                        </>
                      </span>
                      <span className="text-deep_purple-600 font-garnettregular font-normal">
                        Cost Reduce
                      </span>
                    </Heading>
                  </div>
                  <a href="#" className="leading-7">
                    <Text as="p" className="!text-gray-900_03">
                      Zero overhead in the hiring process - promise! Source top
                      quality candidates for some of the best companies
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-full gap-[17px]">
                  <Img
                    src="images/img_eos_icons_ai_deep_purple_600.svg"
                    alt="eosiconsai_one"
                    className="h-[50px] w-[50px]"
                  />
                  <div>
                    <Heading size="md" as="h3" className="!font-semibold">
                      <span className="text-deep_purple-600">
                        <>
                          50% Faster
                          <br />
                        </>
                      </span>
                      <span className="text-deep_purple-600 font-garnettregular font-normal">
                        Recruitment by TAT
                      </span>
                    </Heading>
                  </div>
                  <a href="#" className="leading-7">
                    <Text as="p" className="!text-gray-900_03">
                      Zero overhead in the hiring process - promise! Source top
                      quality candidates for some of the best companies
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-full gap-[18px]">
                  <Img
                    src="images/img_mdi_user_card_details_outline.svg"
                    alt="mdiusercard_one"
                    className="h-[50px] w-[50px]"
                  />
                  <div>
                    <Heading size="md" as="h4" className="!font-librefranklin">
                      <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                        <>
                          Highly Contextualized <br />
                        </>
                      </span>
                      <span className="text-deep_purple-600 font-garnettregular font-normal">
                        Interview
                      </span>
                    </Heading>
                  </div>
                  <a href="#" className="leading-7">
                    <Text as="p" className="!text-gray-900_03">
                      Al models generate highly contextualized interviews for
                      the candidates based on your Company profile, Job
                      description and Candidate&#39;s CV.
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-full gap-[18px]">
                  <Img
                    src="images/img_healthicons_i_s.svg"
                    alt="healthiconsis"
                    className="h-[48px] w-[48px]"
                  />
                  <div>
                    <Heading size="md" as="h5" className="!font-librefranklin">
                      <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                        <>
                          Automated <br />
                        </>
                      </span>
                      <span className="text-deep_purple-600 font-garnettregular font-normal">
                        Scheduling
                      </span>
                    </Heading>
                  </div>
                  <a href="#" className="leading-7">
                    <Text as="p" className="!text-gray-900_03">
                      Email & WhatsApp based communication for interview
                      scheduling with automated reminders.
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-full gap-[18px]">
                  <Img
                    src="images/img_eos_icons_ai_deep_purple_200.svg"
                    alt="eosiconsai_one"
                    className="h-[50px] w-[50px]"
                  />
                  <div>
                    <Heading size="md" as="h6" className="!font-librefranklin">
                      <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                        <>
                          AI generated Interviews
                          <br />
                        </>
                      </span>
                      <span className="text-deep_purple-600 font-garnettregular font-normal">
                        On what matters
                      </span>
                    </Heading>
                  </div>
                  <a href="#" className="leading-7">
                    <Text as="p" className="!text-gray-900_03">
                      0 manual interventions, completely seamless experience for
                      the candidates.
                    </Text>
                  </a>
                </div>
                <div className="flex flex-col w-full gap-[18px]">
                  <Img
                    src="images/img_fluent_tasks_app_20_regular.svg"
                    alt="fluenttasks_one"
                    className="h-[50px] w-[50px]"
                  />
                  <div>
                    <Heading size="md" as="h4" className="!font-librefranklin">
                      <span className="text-deep_purple-600 font-garnettsemibold font-semibold">
                        <>
                          in-built
                          <br />
                        </>
                      </span>
                      <span className="text-deep_purple-600 font-garnettregular font-normal">
                        ATS
                      </span>
                    </Heading>
                  </div>
                  <a href="#" className="leading-7">
                    <Text as="p" className="!text-gray-900_03">
                      To manage all of your candidates & Credo verified CVs.
                      Integrations with other ATS coming soon.
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[784px] md:h-auto mt-[155px] relative">
            <Img
              src="images/img_eye.svg"
              alt="eye_one"
              className="h-[25px] w-[25px] mt-[105px] ml-[505px] md:ml-0"
            />
            <div className="flex flex-col items-center justify-center w-full h-max gap-[99px] left-0 bottom-0 right-0 top-0 px-14 py-[95px] m-auto md:gap-[74px] md:p-5 sm:gap-[49px] bg-gray-100 absolute">
              <Heading size="xl" as="h2" className="capitalize text-center">
                <span className="text-deep_purple-600">
                  How Our System&nbsp;
                </span>
                <span className="text-deep_purple-600 font-garnettregular font-normal">
                  Operates
                </span>
              </Heading>
              <div className="flex md:flex-col w-full gap-px max-w-[1198px]">
                <div className="flex justify-end w-full bg-white-A700_01">
                  <div className="flex flex-col w-full mb-[59px] gap-[38px]">
                    <div className="flex justify-between items-center gap-5">
                      <Heading
                        size="s"
                        as="h3"
                        className="self-end mb-5 !text-black-900 px-6"
                      >
                        Upload Documents
                      </Heading>
                      <div className="w-[23%] p-[11px] rounded-bl-[10px] bg-deep_purple-600 shadow-4xl px-6">
                        <Img
                          src="images/img_twitter.svg"
                          alt="upload"
                          className="h-[60px] w-[60px]"
                        />
                      </div>
                    </div>
                    <div className="pb-[19px]">
                      <div>
                        <Text className="px-4" size="lg" as="p">
                          Shortlist the most qualified candidate and upload
                          their details for the top companies
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full pt-[29px] sm:pt-5 bg-deep_purple-50">
                  <div className="flex flex-col items-start w-full gap-[61px] sm:gap-[30px]">
                    <a href="#">
                      <Heading size="s" as="h4" className="!text-gray-900 px-6">
                        Sign Up
                      </Heading>
                    </a>
                    <div className="self-stretch h-[160px] relative">
                      <Text
                        size="lg"
                        as="p"
                        className="w-[92%] left-[0.00px] top-[0.00px] m-auto absolute px-6"
                      >
                        Follow the link below to sign up and get access of the
                        current job postings
                      </Text>
                      <div className="w-[23%] bottom-[0.00px] right-[0.33px] m-auto rounded-tl-[10px] bg-deep_purple-600 shadow-5xl absolute">
                        <Img
                          src="images/img_bag.svg"
                          alt="bag_one"
                          className="h-[60px] w-full md:h-[80px] rounded-tl-[10px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end w-full pb-[30px] sm:pb-5 bg-white-A700_01">
                  <div className="flex flex-col w-full mb-[30px] gap-[38px]">
                    <div className="flex justify-between items-center gap-5">
                      <Heading
                        size="s"
                        as="h5"
                        className="!text-black-900 px-6"
                      >
                        Get Rewards
                      </Heading>
                      <div className="w-[23%] p-[11px] rounded-bl-[10px] bg-deep_purple-600 shadow-4xl">
                        <Img
                          src="images/img_ticket.svg"
                          alt="ticket_one"
                          className="h-[61px] w-[61px] rounded-[1px] px-1"
                        />
                      </div>
                    </div>
                    <div className="pb-[46px] md:pb-5">
                      <div>
                        <Text className="px-6" size="lg" as="p">
                          As soon as the candidate gets selected you get your
                          benefits
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                color="gray_100"
                shape="round"
                className="sm:px-5 !text-deep_purple-600 font-medium border-deep_purple-600 border-2 border-solid !shadow-sm min-w-[164px] "
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex flex-col self-stretch items-center gap-[74px] p-14 md:gap-[55px] md:p-5 sm:gap-[37px] bg-white-A700 md:mt-[55%]">
            <Heading as="h2" className="mt-[9px] capitalize">
              <span className="text-deep_purple-600">
                Choose Your Simple,&nbsp;
              </span>
              <span className="text-deep_purple-600 font-garnettregular font-normal">
                Transparent Pricing
              </span>
            </Heading>
            <div className="flex md:flex-col w-full gap-[49px] mx-auto max-w-[1197px]">
              <div className="flex flex-col items-center justify-center w-full p-[30px] sm:p-5 bg-gray-100 shadow-lg rounded-[10px]">
                <div className="flex items-center mt-[3px] gap-1.5 flex-wrap">
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-deep_purple-600 !font-spacegrotesk text-center"
                  >
                    1
                  </Text>
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-deep_purple-600 !font-garnettmedium text-center"
                  >
                    Month
                  </Text>
                </div>
                <div className="flex items-center mt-[15px] flex-wrap">
                  <Text
                    size="5xl"
                    as="p"
                    className="!text-gray-900_02 !font-spacegrotesk text-center"
                  >
                    ₹
                  </Text>
                  <Text
                    size="5xl"
                    as="p"
                    className="!text-gray-900_02 !font-garnettmedium text-center"
                  >
                    199.00
                  </Text>
                  <Text
                    as="p"
                    className="self-end mb-[5px] !text-gray-900_02 !font-garnettmedium text-center !font-medium"
                  >
                    /month
                  </Text>
                </div>
                <div className="flex flex-col self-stretch mt-[46px] gap-5">
                  <Text
                    size="lg"
                    as="p"
                    className="!text-deep_purple-600 !font-garnettmedium text-center !font-medium leading-7"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <div className="flex flex-col gap-2">
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="image"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end">
                        10 interview-ready candidates
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="image_one"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end">
                        Unlimited job postings
                      </Text>
                    </div>
                    <div className="flex self-start items-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="image_two"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p" className="w-[92%]">
                        Receive pre-vetted profiles within 48 hours
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="image_three"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end">
                        Dedicated account manager
                      </Text>
                    </div>
                    <div className="flex self-start items-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="image_four"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p" className="w-[92%]">
                        Assistance with interview scheduling
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="custom_reports"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end">
                        Custom reports
                      </Text>
                    </div>
                  </div>
                </div>
                <Button shape="round" className="w-full mt-[62px] sm:px-5">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-col w-full p-[30px] sm:pb-5 sm:pl-5 bg-deep_purple-600 shadow-lg rounded-[10px]">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-end w-full mr-[-8%]">
                    <Text
                      size="2xl"
                      as="p"
                      className="!text-gray-100 !font-spacegrotesk text-center"
                    >
                      3
                    </Text>
                    <Text
                      size="2xl"
                      as="p"
                      className=" !text-gray-100 !font-garnettmedium text-center"
                    >
                      Months
                    </Text>
                    <Button
                      color="orange_300"
                      size="xs"
                      className="mb-[30px] rounded-bl-[5px] font-garnettmedium font-medium relative ml-[30%] min-w-[131px]"
                    >
                      Most Popular
                    </Button>
                  </div>
                  <div className="flex items-center mt-[15px] ml-[35px] md:ml-0 flex-wrap">
                    <Text
                      size="5xl"
                      as="p"
                      className="!text-gray-100 !font-spacegrotesk text-center"
                    >
                      ₹
                    </Text>
                    <Text
                      size="5xl"
                      as="p"
                      className="!text-gray-100 !font-garnettmedium text-center"
                    >
                      149.00
                    </Text>
                    <Text
                      as="p"
                      className="self-end mb-[5px] !text-gray-100 !font-garnettmedium text-center !font-medium"
                    >
                      /month
                    </Text>
                  </div>
                  <Text
                    size="lg"
                    as="p"
                    className="w-[89%] md:w-full mt-[46px] !text-gray-100 !font-garnettmedium text-center !font-medium leading-7"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <div className="flex flex-col w-[89%] md:w-full mt-5 gap-2">
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_one"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end !text-deep_purple-50">
                        10 interview-ready candidates
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_three"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end !text-deep_purple-50">
                        Unlimited job postings
                      </Text>
                    </div>
                    <div className="flex self-start items-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_five"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p" className="w-[92%] !text-deep_purple-50">
                        Receive pre-vetted profiles within 48 hours
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="icons_one"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end !text-deep_purple-50">
                        Dedicated account manager
                      </Text>
                    </div>
                    <div className="flex self-start items-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="icons_three"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p" className="w-[92%] !text-deep_purple-50">
                        Assistance with interview scheduling
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="icons_five"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end !text-deep_purple-50">
                        Custom reports
                      </Text>
                    </div>
                  </div>
                  <Button
                    color="gray_100"
                    shape="round"
                    className="mt-[62px] sm:px-5 !text-deep_purple-600 font-medium min-w-[296px]"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full p-[30px] sm:p-5 bg-gray-100 shadow-lg rounded-[10px]">
                <div className="flex items-center mt-[3px] gap-1.5 flex-wrap">
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-deep_purple-600 !font-spacegrotesk text-center"
                  >
                    6
                  </Text>
                  <Text
                    size="2xl"
                    as="p"
                    className="!text-deep_purple-600 !font-garnettmedium text-center"
                  >
                    Months
                  </Text>
                </div>
                <div className="flex items-center mt-[15px] flex-wrap">
                  <Text
                    size="5xl"
                    as="p"
                    className="!text-gray-900_02 !font-spacegrotesk text-center"
                  >
                    ₹
                  </Text>
                  <Text
                    size="5xl"
                    as="p"
                    className="!text-gray-900_02 !font-garnettmedium text-center"
                  >
                    169.00
                  </Text>
                  <Text
                    as="p"
                    className="self-end mb-[5px] !text-gray-900_02 !font-garnettmedium text-center !font-medium"
                  >
                    /month
                  </Text>
                </div>
                <div className="flex flex-col self-stretch mt-[46px] gap-5">
                  <Text
                    size="lg"
                    as="p"
                    className="!text-deep_purple-600 !font-garnettmedium text-center !font-medium leading-7"
                  >
                    Suitable for companies with 5-10 openings
                  </Text>
                  <div className="flex flex-col gap-2">
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_one"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end">
                        10 interview-ready candidates
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_three"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end">
                        Unlimited job postings
                      </Text>
                    </div>
                    <div className="flex self-start items-start gap-2.5">
                      <Img
                        src="images/img_checkmark_green_500.svg"
                        alt="checkmark_five"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p" className="w-[92%]">
                        Receive pre-vetted profiles within 48 hours
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="icons_one"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end">
                        Dedicated account manager
                      </Text>
                    </div>
                    <div className="flex self-start items-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="icons_three"
                        className="h-[24px] w-[24px]"
                      />
                      <Text as="p" className="w-[92%]">
                        Assistance with interview scheduling
                      </Text>
                    </div>
                    <div className="flex self-start gap-2.5">
                      <Img
                        src="images/img_icons.svg"
                        alt="icons_five"
                        className="self-start h-[24px] w-[24px]"
                      />
                      <Text as="p" className="self-end">
                        Custom reports
                      </Text>
                    </div>
                  </div>
                </div>
                <Button shape="round" className="w-full mt-[62px] sm:px-5">
                  Get Started
                </Button>
              </div>
            </div>
            <Button
              color="gray_100"
              shape="round"
              className="sm:px-5 !text-deep_purple-600 border-deep_purple-600 border-2 border-solid !shadow-sm min-w-[180px]"
            >
              Book a Demo
            </Button>
          </div>
          <div className="self-stretch px-14 py-[81px] md:p-5 bg-gray-100">
            <div className="flex md:flex-col justify-center items-center w-full mb-[29px] gap-10 mx-auto max-w-[1200px]">
              <div className="flex flex-col items-start md:self-stretch flex-1">
                <Heading as="h2">
                  <span className="text-deep_purple-600">
                    Discover the Future of&nbsp;
                  </span>
                  <span className="text-deep_purple-600 font-garnettregular font-normal">
                    Talent Assessment!
                  </span>
                </Heading>
                <Text size="lg" as="p" className="mt-[30px] !text-gray-900_02">
                  <>
                    Facing challenges in traditional hiring?
                    <br />
                    Uncover the costs, pitfalls, and the game-changing role of
                    Generative AI in recruitment.
                  </>
                </Text>
                <Text size="lg" as="p" className="mt-[30px] !text-gray-900_02">
                  <>
                    <span className="font-bold ">
                      🔍 Inside this Whitepaper:
                    </span>
                    <br />
                    Manual vs. Machine-based hiring: Costs & Challenges.
                    <br />
                    The truth about &quot;Interview as a Service.&quot;
                    <br />
                    Generative AI: The simple explanation. Optimize Your Hiring
                    Process Today!
                  </>
                </Text>
                <Button
                  size="xl"
                  className="mt-[94px] sm:px-5 font-medium min-w-[591px] rounded-[20px]"
                >
                  Download Now for Smarter Recruitment
                </Button>
              </div>
              <Img
                src="images/img_rectangle_39394.png"
                alt="image_two"
                className="w-[33%] md:w-full object-cover rounded-[12px]"
              />
            </div>
          </div>
          <div className="flex flex-col self-stretch items-start pl-[66px] pr-14 py-[66px] md:p-5 bg-white-A700">
            <Heading as="h2" className="ml-[53px] md:ml-0 px-14">
              <span className="text-deep_purple-600 ">Customer</span>
              <span className="text-deep_purple-600">&nbsp;</span>
              <span className="text-gray-900_01 font-garnettregular font-normal ">
                Testimonials
              </span>
            </Heading>
            <Text
              size="lg"
              as="p"
              className="mt-[5px] ml-[53px] md:ml-0 !text-gray-900_01 px-14"
            >
              What others has say About Us
            </Text>
            <div className="flex md:flex-col w-full mt-[83px] mb-[146px] gap-6 mx-auto max-w-[1198px]">
              <div className="flex flex-col w-full gap-[30px]">
                <div className="flex flex-col items-center gap-7 p-3.5 bg-deep_purple-50 shadow-2xl rounded-[16px]">
                  <Text
                    size="lg"
                    as="p"
                    className="w-[97%] md:w-full mt-[5px] !text-black-900 leading-[27px]"
                  >
                    “Rework has been a great way to make the hiring process
                    easier and faster. We&#39;ve been able to save money and
                    time, and the recruiters have been able to find the best
                    employers leads. Highly recommend! “
                  </Text>
                  <div className="flex self-stretch justify-center items-start gap-[19px]">
                    <Img
                      src="images/img_ellipse_2.png"
                      alt="circleimage"
                      className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                    />
                    <div className="flex flex-col items-center">
                      <Text
                        size="3xl"
                        as="p"
                        className="!text-deep_purple-600 !font-garnettregular"
                      >
                        Theresa Webb
                      </Text>
                      <Text as="p" className="!text-gray-700_01 !font-medium">
                        HR Manager, Amazon
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-7 p-[15px] bg-deep_purple-50 shadow-2xl rounded-[16px]">
                  <Text
                    size="lg"
                    as="p"
                    className="w-[97%] md:w-full mt-1 !text-black-900 leading-[27px]"
                  >
                    “ Rework has been a great way to make the hiring process
                    easier and faster. We&#39;ve been able to save money and
                    time, ““ Rework has been a great way to make the hiring
                    process easier and faster. Highly recommend! “
                  </Text>
                  <div className="flex self-stretch justify-center items-start gap-[19px]">
                    <Img
                      src="images/img_ellipse_1.png"
                      alt="circleimage_one"
                      className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                    />
                    <div className="flex flex-col items-start">
                      <Text
                        size="3xl"
                        as="p"
                        className="!text-deep_purple-600 !font-garnettregular"
                      >
                        Ronald Richards
                      </Text>
                      <Text as="p" className="!text-gray-700_01 !font-medium">
                        HR Manager, Google
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-[30px]">
                <div className="flex flex-col items-center justify-center gap-[30px] p-4 bg-deep_purple-50 shadow-2xl rounded-[16px]">
                  <Text
                    size="lg"
                    as="p"
                    className="w-[98%] md:w-full mt-[3px] !text-black-900 leading-[27px]"
                  >
                    “Rework has been a great way to make the hiring process
                    easier and faster. We&#39;ve been able to save money and
                    time, and the recruiters have been able to find the best
                    employers leads. Highly recommend! ““ Rework has been a
                    great way to make the hiring process easier and faster.
                    Highly recommend! “
                  </Text>
                  <div className="flex self-stretch justify-center items-start gap-[19px]">
                    <Img
                      src="images/img_ellipse_1_50x50.png"
                      alt="circleimage"
                      className="h-[50px] w-[50px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-start">
                      <Text
                        size="3xl"
                        as="p"
                        className="!text-deep_purple-600 !font-garnettregular"
                      >
                        Savannah Nguyen
                      </Text>
                      <Text as="p" className="!text-gray-700_01 !font-medium">
                        HR Manager, Microsoft
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-7 p-[15px] bg-deep_purple-50 shadow-2xl rounded-[16px]">
                  <Text
                    size="lg"
                    as="p"
                    className="w-[97%] md:w-full mt-1 !text-black-900 leading-[27px]"
                  >
                    “Rework has been a great way to make the hiring process
                    easier and faster. We&#39;ve been able to save money and
                    time, and the recruiters have been able to find the best
                    employers leads. Highly recommend! “
                  </Text>
                  <div className="flex self-stretch justify-center items-start gap-[19px]">
                    <Img
                      src="images/img_ellipse_1.png"
                      alt="circleimage_one"
                      className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                    />
                    <div className="flex flex-col items-start">
                      <Text
                        size="3xl"
                        as="p"
                        className="!text-deep_purple-600 !font-garnettregular"
                      >
                        Ronald Richards
                      </Text>
                      <Text as="p" className="!text-gray-700_01 !font-medium">
                        HR Manager, Google
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-[30px]">
                <div className="flex flex-col items-center gap-7 p-3.5 bg-deep_purple-50 shadow-2xl rounded-[16px]">
                  <Text
                    size="lg"
                    as="p"
                    className="w-[97%] md:w-full mt-[5px] !text-black-900 leading-[27px]"
                  >
                    “Rework has been a great way to make the hiring process
                    easier and faster. We&#39;ve been able to save money and
                    time, and the recruiters have been able to find the best
                    employers leads. Highly recommend! “
                  </Text>
                  <div className="flex self-stretch justify-center items-start gap-[19px]">
                    <Img
                      src="images/img_ellipse_2.png"
                      alt="circleimage"
                      className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                    />
                    <div className="flex flex-col items-center">
                      <Text
                        size="3xl"
                        as="p"
                        className="!text-deep_purple-600 !font-garnettregular"
                      >
                        Theresa Webb
                      </Text>
                      <Text as="p" className="!text-gray-700_01 !font-medium">
                        HR Manager, Amazon
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-7 p-[15px] bg-deep_purple-50 shadow-2xl rounded-[16px]">
                  <Text
                    size="lg"
                    as="p"
                    className="w-[97%] md:w-full mt-1 !text-black-900 leading-[27px]"
                  >
                    “ Rework has been a great way to make the hiring process
                    easier and faster. We&#39;ve been able to save money and
                    time, ““ Rework has been a great way to make the hiring
                    process easier and faster. Highly recommend! “
                  </Text>
                  <div className="flex self-stretch justify-center items-start gap-[19px]">
                    <Img
                      src="images/img_ellipse_1.png"
                      alt="circleimage_one"
                      className="h-[50px] w-[50px] mt-0.5 rounded-[50%]"
                    />
                    <div className="flex flex-col items-start">
                      <Text
                        size="3xl"
                        as="p"
                        className="!text-deep_purple-600 !font-garnettregular"
                      >
                        Ronald Richards
                      </Text>
                      <Text as="p" className="!text-gray-700_01 !font-medium">
                        HR Manager, Google
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col self-stretch justify-center items-center gap-[26px] px-5 py-[95px] md:p-5 bg-gray-100">
            <Text
              size="4xl"
              as="p"
              className="w-[30%] md:w-full !text-deep_purple-600 !font-sfprodisplay"
            >
              <span className="text-deep_purple-600 font-garnettmedium">
                How Rework AI has been a good&nbsp;
              </span>
              <span className="text-deep_purple-600 font-garnettregular font-normal">
                Hiring platform for Companies
              </span>
            </Text>
            <div className="flex md:flex-col self-end justify-center items-center w-[63%] md:w-full mb-2 gap-[18px] ">
              <div className="flex flex-col items-center md:self-stretch gap-2.5 flex-1 ">
                <Heading size="3xl" as="h2" className="!font-spacegrotesk">
                  80%
                </Heading>
                <Text size="lg" as="p" className="!text-gray-800 text-center">
                  Reduction in your recruitment TAT with the access to a wider
                  talent pool on the platform
                </Text>
              </div>
              <div className="h-full w-[2px] md:w-full md:h-[2px] bg-deep_purple-600" />
              <div className="flex flex-col self-start items-center md:self-stretch gap-2.5 flex-1 px-4 border-x-4 border-deep_purple-600">
                <Heading size="3xl" as="h3" className="!font-spacegrotesk">
                  50%
                </Heading>
                <Text size="lg" as="p" className="!text-gray-800 text-center">
                  Streamline your budgeting and save money while finding the top
                  candidates
                </Text>
              </div>
              <div className="h-full w-[2px] md:w-full md:h-[2px] bg-deep_purple-600" />
              <div className="flex flex-col self-start items-center md:self-stretch gap-2.5 flex-1">
                <Heading size="3xl" as="h4" className="!font-spacegrotesk">
                  10k
                </Heading>
                <Text size="lg" as="p" className="!text-gray-800 text-center">
                  Certified sourcing partners’ expertise
                </Text>
              </div>
            </div>
          </div>
          <div className="self-stretch">
            <div className="flex flex-col items-center justify-center gap-12 px-14 py-[75px] md:p-5 bg-white-A700">
              <Heading as="h2" className="capitalize">
                <span className="text-deep_purple-600">Success&nbsp;</span>
                <span className="text-deep_purple-600 font-garnettregular font-normal">
                  Stories
                </span>
              </Heading>
              <div className="w-full mx-auto">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 3 },
                  }}
                  renderDotsItem={(props) => {
                    return props?.isActive ? (
                      <div className="w-[10px] h-[10px] bg-black-900" />
                    ) : (
                      <div className="w-[10px] h-[10px] bg-white-A700_01" />
                    );
                  }}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="flex gap-5 max-w-[1192px]"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-col gap-2.5 mx-2.5 bg-gray-50_01 shadow-3xl rounded-[16px]">
                        <Img
                          src="images/img_unsplash_mpdlxiig0p0.png"
                          alt="unsplash_one"
                          className="h-[245px] rounded-tl-[16px] rounded-tr-[16px] object-cover"
                        />
                        <div className="flex flex-col gap-[30px] p-5">
                          <Text
                            size="2xl"
                            as="p"
                            className="!text-gray-900_04 !font-garnettmedium leading-[27px]"
                          >
                            Rework has been a great way to make the hiring
                            process easier and faster.
                          </Text>
                          <Text
                            size="lg"
                            as="p"
                            className="!text-gray-700_01 leading-[27px]"
                          >
                            “We&#39;ve been able to save money and time, and the
                            recruiters have been able to find the best employers
                            leads. Highly recommend! “
                          </Text>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="flex flex-col items-center px-14 py-[109px] md:p-5 bg-gray-100">
              <Heading as="h3" className="text-center">
                <span className="text-deep_purple-600">
                  Frequently asked&nbsp;
                </span>
                <span className="text-deep_purple-600 font-garnettregular font-normal">
                  Questions
                </span>
              </Heading>
              <a
                href="#"
                className="w-[62%] md:w-full mt-[19px] leading-[22px]"
              >
                <Text as="p" className="!text-gray-900 text-center">
                  We have Compiled the most commonly asked question about our
                  Platform for your information and to enhance your overall
                  experience.
                </Text>
              </a>
              <Accordion
                preExpanded={[0]}
                className="flex flex-col w-[64%] mt-[74px] mb-12 gap-4"
              >
                {[...Array(8)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelisth${i}`}>
                    <AccordionItemHeading className="w-full">
                      <AccordionItemButton>
                        <AccordionItemState>
                          {(props) => (
                            <>
                              <div className="flex justify-between items-start mt-4 gap-5 p-[17px] border-deep_purple-600 border-2 border-solid flex-1 rounded-[10px]">
                                <Text
                                  size="lg"
                                  as="p"
                                  className="mb-[3px] ml-[11px] md:ml-0 !text-gray-900 !font-medium"
                                >
                                  How can I Get started with Rework AI?
                                </Text>
                                <Img
                                  src="images/img_typcn_plus.svg"
                                  alt="typcnplus_three"
                                  className="h-[24px] w-[24px] mr-[11px] md:mr-0"
                                />
                              </div>
                            </>
                          )}
                        </AccordionItemState>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="flex flex-col self-stretch items-start justify-center pl-[113px] pr-14 gap-[60px] py-[113px] md:p-5 sm:gap-[30px] bg-white-A700">
            <div className="flex flex-col w-full gap-5 mx-auto max-w-[1175px] ">
              <Heading as="h1">
                Optimize Your Hiring Strategy with Rework&#39;s Exclusive Hiring
                Audit
              </Heading>
              <Text size="lg" as="p" className="!text-gray-900_02">
                Discover the strengths and opportunities in your current hiring
                process. Our comprehensive Hiring Audit evaluates your strategy,
                identifies areas for improvement, and tailors a roadmap for
                success. Elevate your recruitment game with data-driven insights
                – because the right talent deserves the right approach.
              </Text>
            </div>
            <div className="px-200">
              <Button
                size="xl"
                className="mb-3 ml-3 md:ml-0 sm:px-5 font-medium min-w-[476px] rounded-[20px]"
              >
                Request Your Free Hiring Audit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
