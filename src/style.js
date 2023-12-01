const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  title: "font-audiowide font-semibold text-[20px] uppercase mr-2",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "lg:px-36 sm:px-16 xxs:px-6 ",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  maxWidthBottomNav: "max-w-5px",

  colContainer: "flex flex-col p-10 w-[50%] h-full relative",

  btn: "bg-primary text-white p-4 px-8 rounded font-[600] hover:bg-white hover:bg-slate-300 hover:text-black text-[18px] font-poppins mt-12",
  // NAV
  navLinksTransition: "hover:border-b-2 border-primary ",
  navContainer: "w-8 h-8 p-0 m-0 items-center flex  justify-center",
  navIcon: "text-white w-4 h-4 ",
  // HERO
  hoverIcon:
    "[&>svg]:hover:text-black hover:bg-white  hover:translate-y-2 transition-transform duration-500 ease-in-out",
  heroContent:
    "absolute top-1/2 left-8 transform -translate-y-1/2 z-10 text-white ",
  heroServices:
    "xxs: text-[42px] sm:text-[100px] font-[600] mb-4 font-bebas max-w-4xl",
  heroParagraph: "text-lg md:text-base lg:text-base mb-6",
  heroSpan: "text-white border-t-2 border-l-2 pl-2",
  // STATS
  statsContainer: "flex flex-row ",
  statsBar:
    "border-t-2 border-l-2 h-5 w-20 absolute left-4 top-7  border-t-primary border-l-primary",
  statsHeader: "font",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  sectionTwoCols: "flex flex-row",
};

export default styles;
