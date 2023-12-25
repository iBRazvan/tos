const styles = {
  containerWidth: "xxl:max-w-[1920px] w-full",
  boxWidth: "lg:max-w-[1280px] w-full",

  title:
    "font-audiowide font-semibold xxs:text-[16px] xs:text-[20px] uppercase mr-2",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexCol: "flex flex-col items-center",

  paddingX: "lg:px-56 md:px-36 sm:px-16 xxs:px-6 ",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  maxWidthBottomNav: "max-w-5px",

  colContainer: "flex flex-col xxs:p-0 md:p-10 xxs:w-[80%]  md:w-[50%] ",
  cellQuery:
    "flex xxs:flex-col xxs:items-center xxs:gap-5 700:flex-row xxs:justify-center 700:justify-between",

  btn: "bg-primary text-white xxs:py-3 xxs:px-6 ss:py-4 ss:px-8 rounded font-[600] hover:bg-gradient-to-r from-gradientLime_100 via-primary to-gradientLime_100 hover:text-black xxs:text-[16px] ss:text-[18px] font-poppins items-center",

  // NAV ----------------------------------->
  navContainer: "w-screen flex flex-col",
  navComponent: "w-full flex flex-row items-center",
  navQuery:
    "flex xxs:flex-col xxs:items-center xxs:gap-1 700:flex-row justify-between ",
  navContentQuery:
    "xxs:flex-col xxs:gap-0 xs:gap-2 ss:flex-row ss:gap-5 flex text-white items-center",
  navInfo: "flex flex-row items-center gap-2",
  navInfoText: "text-base font-normal",
  navLinks:
    "relative font-bebas text-[18px] font-medium leading-[1.2rem] uppercase after::content-[' '] after::bg-pink-500 after::h-[3px] aflter:w-[100%] after::absolute  ",
  navLinksContaier:
    "list-none xxs:hidden md:flex  justify-end items-center gap-5 py-5 ",
  navLinksTransition: "bg-primary w-[1%] h-[1px] asolute rounded-xl   ",
  navSocialContainer: "flex gap-5 relative",
  navSocial: "w-8 h-8 p-0 m-0 items-center flex  justify-center",
  navIcon: "text-white w-4 h-4 ",
  navHamburgerMenu: "sm:hidden flex flex-1 justify-end items-center",
  navHamburgerMenuIcon:
    "xxs:w-[22px] xxs:h-[22px] xs:w-[28px] xs:h-[28px] object-contain",

  // HERO ----------------------------------->
  opacity: "absolute top-0 left-0 w-full h-full bg-black opacity-50",
  heroHeader: "text-4xl md:text-4xl font-bold mb-4 text-primary font-bebas",
  hoverIcon:
    "[&>svg]:hover:text-black hover:bg-white  hover:translate-y-2 transition-transform duration-500 ease-in-out",
  heroContent:
    "absolute top-1/2 left-8 transform -translate-y-1/2 z-10 text-white ",
  heroContainer: "flex flex-col w-fit mr-10",
  heroServices:
    "xxs:text-[42px] xs:text-[50px] ss:text-[60px] sm:text-[90px] md:text-[100px] font-[600] mb-4 font-bebas max-w-4xl ",
  heroParagraphContainer: "flex mr-20 max-w-4xl",
  heroParagraph: "text-lg md:text-base lg:text-base font-normal  ",
  heroSpan: "text-white border-t-2 border-l-2 pl-2 ",

  // STATS ----------------------------------->
  statsSection: "xxs:items-center md:items-start pt-36",
  statsContainer: "flex xs:flex-col md:flex-row ",
  statsBar:
    "border-t-2 border-l-2 h-5 w-20 absolute left-4 top-7  border-t-primary border-l-primary",
  statsHeader3:
    "text-5xl font-bebas text-secondary font-semibold leading-[1.2em]",
  statsHeader4: "text-lg font-poppins text-primary font-semibold mb-4",
  statsParagraph: "font-[400px] text-text font-poppins",
  statsCellContainer: "flex flex-row justify-between py-10",
  statsCell: "flex xxs:flex-col sm:flex-row items-center min-w-[200px] gap-5",
  statsCellParagraph: "text-lg font-poppins text-text font-semibold",
  statsSpan: "text-5xl font-bebas text-secondary font-semibold leading-[1.2em]",
  statsImgContainer: "relative flex h-fit",
  statsAbsoluteImg:
    "absolute w-auto h-auto xxs:-right-[40px] xxs:-bottom-6 xs:-bottom-20 md:-right-[100px] sm:-right-10 sm:-bottom-24 1200:-right-[100px] 1200:top-40 -bottom-[100px] pr-10",
  statsImg:
    "w-auto max-h-[400px] border-white border-[15px] xxs:w-36  xxs:border-4 xs:w-48 xs:-bottom-10 ss:w-60 ss:-bottom-14 sm:w-64  1200:w-46",
  btnContainer: "flex  w-full pt-10 md:pt-10",

  // SERVICES BANNER ----------------------------------->

  servicesHeader:
    "left-8 text-white uppercase font-semibold text-5xl font-bebas uppercase  ",
  servicesParagraph:
    "text-white font-poppins font-semibold text-base pl-6 pt-2 uppercase",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  sectionTwoCols: "flex xxs:flex-col md:flex-row",

  sectionHero: "w-screen h-screen relative flex justify-center",
  sectionServicesBanner:
    "relative flex w-screen h-[348px] items-center justify-center",
};

export default styles;
