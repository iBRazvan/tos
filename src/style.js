const styles = {
  containerWidth: "xxl:max-w-[1920px] w-full",
  boxWidth: "lg:max-w-[1280px] w-full",
  title:
    "font-audiowide font-semibold xxs:text-[16px] xs:text-[20px] uppercase mr-2",

  heading2:
    "font-roboto font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "text-text font-roboto text-base font-normal font-roboto ",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexCol: "flex flex-col",

  paddingX: "lg:px-56 md:px-36 sm:px-16 xxs:px-6 ",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  maxWidthBottomNav: "max-w-5px",

  xyFull: "h-full w-full",
  gridCols: "grid  grid-cols-1 ss:grid-cols-2 md:grid-cols-3",

  colContainer: "flex flex-col xxs:px-6 md:p-6 xxs:w-[100%] md:w-[50%] ",
  cellQuery:
    "flex xxs:flex-col xxs:items-center xxs:gap-5 700:flex-row xxs:justify-center 700:justify-between",

  btn: "bg-primary text-white xxs:py-3 xxs:px-6 ss:py-4 ss:px-8 rounded font-[600] hover:bg-secondary xxs:text-[16px] ss:text-[18px] font-roboto items-center",

  // HERO ----------------------------------->
  opacity: "absolute top-0 left-0 w-full h-full opacity-50",
  hoverIcon:
    "[&>svg]:hover:text-black hover:bg-white  hover:translate-y-2 transition-transform duration-500 ease-in-out",

  // SERVICES CONST 
  servicesTitle: "text-black font-bebas font-semibold text-4xl mt-2 mb-4 ",
  servicesContent: "xxs:px-6 text-text text-lg md:text-base lg:text-base font-normal",
  serviceWidth:
    "max-w-[348px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-b-[3px]  border-primary text-center",
  //PROJECTS CONST ----------------------------------->
  projectTitle: "capitalize text-2xl font-normal font-roboto text-white",
  projectContent: "capitalize text-base font-normal text-primary",
  projectWidth: "max-w-[374px] text-start",

  // STATS ----------------------------------->
  statsSection: "xxs:items-center md:items-start pt-36",
  statsContainer: "flex xs:flex-col md:flex-row ",
};

export const layout = {
  sectionTwoCols: "flex xxs:flex-col md:flex-row",
};

export default styles;
