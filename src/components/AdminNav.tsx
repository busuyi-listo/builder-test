"use client";
import Logo from "./../assets/Listo-logo.svg";
import { MenuItem } from "./MenuItem";
// import { ChatTrigger } from "./ChatTrigger";
import Chat from "./../assets/Trigger.svg";

const menuItems = [
  {
    icon: "<svg id=\"I11586:41744;7786:367382;7786:344482\" layer-name=\"heroicons-outline/home\" data-component-name=\"heroicons-outline/home\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M2.25 12.7498L11.2045 3.79533C11.6438 3.35599 12.3562 3.35599 12.7955 3.79532L21.75 12.7498M4.5 10.4998V20.6248C4.5 21.2461 5.00368 21.7498 5.625 21.7498H9.75V16.8748C9.75 16.2535 10.2537 15.7498 10.875 15.7498H13.125C13.7463 15.7498 14.25 16.2535 14.25 16.8748V21.7498H18.375C18.9963 21.7498 19.5 21.2462 19.5 20.6248V10.4998M8.25 21.7498H16.5\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Dashboard",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:374843;7786:367281\" layer-name=\"heroicons-outline/building-office\" data-component-name=\"heroicons-outline/building-office\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M3.75 21.75H20.25M4.5 3.75H19.5M5.25 3.75V21.75M18.75 3.75V21.75M9 7.5H10.5M9 10.5H10.5M9 13.5H10.5M13.5 7.5H15M13.5 10.5H15M13.5 13.5H15M9 21.75V18.375C9 17.7537 9.50368 17.25 10.125 17.25H13.875C14.4963 17.25 15 17.7537 15 18.375V21.75\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Clients",
    isActive: true
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375008;7786:344482\" layer-name=\"heroicons-outline/user-group\" data-component-name=\"heroicons-outline/user-group\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M17.9999 19.4691C18.2474 19.4896 18.4978 19.5 18.7506 19.5C19.7989 19.5 20.8054 19.3208 21.741 18.9913C21.7473 18.9117 21.7506 18.8312 21.7506 18.75C21.7506 17.0931 20.4074 15.75 18.7506 15.75C18.123 15.75 17.5403 15.9427 17.0587 16.2722M17.9999 19.4691C18 19.4794 18 19.4897 18 19.5C18 19.725 17.9876 19.9471 17.9635 20.1656C16.2067 21.1737 14.1707 21.75 12 21.75C9.82933 21.75 7.79327 21.1737 6.03651 20.1656C6.01238 19.9471 6 19.725 6 19.5C6 19.4897 6.00003 19.4795 6.00008 19.4692M17.9999 19.4691C17.994 18.2926 17.6494 17.1961 17.0587 16.2722M17.0587 16.2722C15.9928 14.6052 14.1255 13.5 12 13.5C9.87479 13.5 8.00765 14.6049 6.94169 16.2716M6.94169 16.2716C6.46023 15.9425 5.87796 15.75 5.25073 15.75C3.59388 15.75 2.25073 17.0931 2.25073 18.75C2.25073 18.8312 2.25396 18.9117 2.26029 18.9913C3.19593 19.3208 4.2024 19.5 5.25073 19.5C5.50307 19.5 5.75299 19.4896 6.00008 19.4692M6.94169 16.2716C6.35071 17.1957 6.00598 18.2924 6.00008 19.4692M15 7.5C15 9.15685 13.6569 10.5 12 10.5C10.3431 10.5 9 9.15685 9 7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM21 10.5C21 11.7426 19.9926 12.75 18.75 12.75C17.5074 12.75 16.5 11.7426 16.5 10.5C16.5 9.25736 17.5074 8.25 18.75 8.25C19.9926 8.25 21 9.25736 21 10.5ZM7.5 10.5C7.5 11.7426 6.49264 12.75 5.25 12.75C4.00736 12.75 3 11.7426 3 10.5C3 9.25736 4.00736 8.25 5.25 8.25C6.49264 8.25 7.5 9.25736 7.5 10.5Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Workers",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375016;7786:344482\" layer-name=\"heroicons-outline/document\" data-component-name=\"heroicons-outline/document\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M19.5 15V12.375C19.5 10.511 17.989 9 16.125 9H14.625C14.0037 9 13.5 8.49632 13.5 7.875V6.375C13.5 4.51104 11.989 3 10.125 3H8.25M10.5 3H5.625C5.00368 3 4.5 3.50368 4.5 4.125V21.375C4.5 21.9963 5.00368 22.5 5.625 22.5H18.375C18.9963 22.5 19.5 21.9963 19.5 21.375V12C19.5 7.02944 15.4706 3 10.5 3Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Invoices",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375026;7786:344482\" layer-name=\"heroicons-outline/calendar-days\" data-component-name=\"heroicons-outline/calendar-days\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M6.75 3.75V6M17.25 3.75V6M3 19.5V8.25C3 7.00736 4.00736 6 5.25 6H18.75C19.9926 6 21 7.00736 21 8.25V19.5M3 19.5C3 20.7426 4.00736 21.75 5.25 21.75H18.75C19.9926 21.75 21 20.7426 21 19.5M3 19.5V12C3 10.7574 4.00736 9.75 5.25 9.75H18.75C19.9926 9.75 21 10.7574 21 12V19.5M12 13.5H12.0075V13.5075H12V13.5ZM12 15.75H12.0075V15.7575H12V15.75ZM12 18H12.0075V18.0075H12V18ZM9.75 15.75H9.7575V15.7575H9.75V15.75ZM9.75 18H9.7575V18.0075H9.75V18ZM7.5 15.75H7.5075V15.7575H7.5V15.75ZM7.5 18H7.5075V18.0075H7.5V18ZM14.25 13.5H14.2575V13.5075H14.25V13.5ZM14.25 15.75H14.2575V15.7575H14.25V15.75ZM14.25 18H14.2575V18.0075H14.25V18ZM16.5 13.5H16.5075V13.5075H16.5V13.5ZM16.5 15.75H16.5075V15.7575H16.5V15.75Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Pay Periods",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375034;7786:344482\" layer-name=\"heroicons-outline/inbox-stack\" data-component-name=\"heroicons-outline/inbox-stack\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M7.875 15L9.08906 16.9425C9.50022 17.6004 10.2213 18 10.9971 18H13.0029C13.7787 18 14.4998 17.6004 14.9109 16.9425L16.125 15M2.40961 9.75H7.04584C7.79813 9.75 8.50065 10.126 8.91795 10.7519L9.08205 10.9981C9.49935 11.624 10.2019 12 10.9542 12H13.0458C13.7981 12 14.5007 11.624 14.9179 10.9981L15.0821 10.7519C15.4993 10.126 16.2019 9.75 16.9542 9.75H21.5904M2.40961 9.75C2.30498 10.0128 2.25 10.295 2.25 10.5823V12.75C2.25 13.9926 3.25736 15 4.5 15H19.5C20.7426 15 21.75 13.9926 21.75 12.75V10.5823C21.75 10.295 21.695 10.0128 21.5904 9.75M2.40961 9.75C2.50059 9.52151 2.62911 9.30771 2.79167 9.11805L6.07653 5.28572C6.50399 4.78702 7.12802 4.5 7.78485 4.5H16.2151C16.872 4.5 17.496 4.78702 17.9235 5.28572L21.2083 9.11805C21.3709 9.30771 21.4994 9.52151 21.5904 9.75M4.5 21H19.5C20.7426 21 21.75 19.9926 21.75 18.75V16.125C21.75 15.5037 21.2463 15 20.625 15H3.375C2.75368 15 2.25 15.5037 2.25 16.125V18.75C2.25 19.9926 3.25736 21 4.5 21Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Quotes",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375044;7786:344482\" layer-name=\"heroicons-outline/paper-airplane\" data-component-name=\"heroicons-outline/paper-airplane\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M5.99972 12.7505L3.2688 3.875C9.88393 5.79665 16.0276 8.82649 21.4855 12.7502C16.0276 16.674 9.884 19.7039 3.26889 21.6257L5.99972 12.7505ZM5.99972 12.7505L13.5 12.7505\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Distributions",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375054;7786:344482\" layer-name=\"heroicons-outline/shield-check\" data-component-name=\"heroicons-outline/shield-check\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M9 13.4996L11.25 15.7496L15 10.4996M12 3.46387C9.8495 5.50049 6.94563 6.74962 3.75 6.74962C3.69922 6.74962 3.64852 6.7493 3.59789 6.74867C3.2099 7.92878 3 9.18971 3 10.4997C3 16.0912 6.82432 20.7895 12 22.1216C17.1757 20.7895 21 16.0912 21 10.4997C21 9.18971 20.7901 7.92878 20.4021 6.74867C20.3515 6.7493 20.3008 6.74962 20.25 6.74962C17.0544 6.74962 14.1505 5.50049 12 3.46387Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Admins",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375064;7786:344482\" layer-name=\"heroicons-outline/document-duplicate\" data-component-name=\"heroicons-outline/document-duplicate\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M15.75 18V21.375C15.75 21.9963 15.2463 22.5 14.625 22.5H4.875C4.25368 22.5 3.75 21.9963 3.75 21.375V8.625C3.75 8.00368 4.25368 7.5 4.875 7.5H6.75C7.26107 7.5 7.76219 7.5426 8.25 7.62444M15.75 18H19.125C19.7463 18 20.25 17.4963 20.25 16.875V12C20.25 7.54051 17.0066 3.83855 12.75 3.12444C12.2622 3.0426 11.7611 3 11.25 3H9.375C8.75368 3 8.25 3.50368 8.25 4.125V7.62444M15.75 18H9.375C8.75368 18 8.25 17.4963 8.25 16.875V7.62444M20.25 14.25V12.375C20.25 10.511 18.739 9 16.875 9H15.375C14.7537 9 14.25 8.49632 14.25 7.875V6.375C14.25 4.51104 12.739 3 10.875 3H9.75\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Offer Letters",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375074;7786:344482\" layer-name=\"heroicons-outline/lock-closed\" data-component-name=\"heroicons-outline/lock-closed\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M16.5 11.25V7.5C16.5 5.01472 14.4853 3 12 3C9.51472 3 7.5 5.01472 7.5 7.5V11.25M6.75 22.5H17.25C18.4926 22.5 19.5 21.4926 19.5 20.25V13.5C19.5 12.2574 18.4926 11.25 17.25 11.25H6.75C5.50736 11.25 4.5 12.2574 4.5 13.5V20.25C4.5 21.4926 5.50736 22.5 6.75 22.5Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Credentials",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375084;7786:344482\" layer-name=\"heroicons-outline/pencil\" data-component-name=\"heroicons-outline/pencil\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M16.8617 5.23667L18.5492 3.54917C19.2814 2.81694 20.4686 2.81694 21.2008 3.54917C21.9331 4.28141 21.9331 5.46859 21.2008 6.20083L6.83218 20.5695C6.30351 21.0981 5.65144 21.4868 4.93489 21.7002L2.25 22.5L3.04978 19.8151C3.26323 19.0986 3.65185 18.4465 4.18052 17.9178L16.8617 5.23667ZM16.8617 5.23667L19.5 7.87499\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Sign Contracts",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375094;7786:344482\" layer-name=\"heroicons-outline/calculator\" data-component-name=\"heroicons-outline/calculator\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M15.75 16.5V18.75M8.25 12H8.2575V12.0075H8.25V12ZM8.25 14.25H8.2575V14.2575H8.25V14.25ZM8.25 16.5H8.2575V16.5075H8.25V16.5ZM8.25 18.75H8.2575V18.7575H8.25V18.75ZM10.7476 12H10.7551V12.0075H10.7476V12ZM10.7476 14.25H10.7551V14.2575H10.7476V14.25ZM10.7476 16.5H10.7551V16.5075H10.7476V16.5ZM10.7476 18.75H10.7551V18.7575H10.7476V18.75ZM13.2524 12H13.2599V12.0075H13.2524V12ZM13.2524 14.25H13.2599V14.2575H13.2524V14.25ZM13.2524 16.5H13.2599V16.5075H13.2524V16.5ZM13.2524 18.75H13.2599V18.7575H13.2524V18.75ZM15.75 12H15.7575V12.0075H15.75V12ZM15.75 14.25H15.7575V14.2575H15.75V14.25ZM8.25 6.75H15.75V9H8.25V6.75ZM12 3C10.108 3 8.24156 3.10947 6.40668 3.32241C5.30608 3.45014 4.5 4.399 4.5 5.50699V20.25C4.5 21.4926 5.50736 22.5 6.75 22.5H17.25C18.4926 22.5 19.5 21.4926 19.5 20.25V5.50699C19.5 4.399 18.6939 3.45014 17.5933 3.32241C15.7584 3.10947 13.892 3 12 3Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Compensation Calculator",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375102;7786:344482\" layer-name=\"heroicons-outline/map\" data-component-name=\"heroicons-outline/map\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M9 7.50002V15.75M15 9.75002V18M15.5031 21.4985L20.3781 19.061C20.7592 18.8704 21 18.4809 21 18.0547V5.57031C21 4.73401 20.1199 4.19007 19.3719 4.56408L15.5031 6.49847C15.1864 6.65683 14.8136 6.65683 14.4969 6.49847L9.50312 4.00158C9.1864 3.84322 8.8136 3.84322 8.49688 4.00158L3.62188 6.43908C3.24075 6.62965 3 7.01919 3 7.44531V19.9297C3 20.766 3.8801 21.31 4.62811 20.936L8.49688 19.0016C8.8136 18.8432 9.1864 18.8432 9.50312 19.0016L14.4969 21.4985C14.8136 21.6568 15.1864 21.6568 15.5031 21.4985Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Countries",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375112;7786:344482\" layer-name=\"heroicons-outline/chart-bar-square\" data-component-name=\"heroicons-outline/chart-bar-square\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M7.5 15V17.25M10.5 12.75V17.25M13.5 10.5V17.25M16.5 8.25V17.25M6 21H18C19.2426 21 20.25 19.9926 20.25 18.75V6.75C20.25 5.50736 19.2426 4.5 18 4.5H6C4.75736 4.5 3.75 5.50736 3.75 6.75V18.75C3.75 19.9926 4.75736 21 6 21Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Reports",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375120;7786:344482\" layer-name=\"heroicons-outline/calendar-days\" data-component-name=\"heroicons-outline/calendar-days\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M6.75 3.75V6M17.25 3.75V6M3 19.5V8.25C3 7.00736 4.00736 6 5.25 6H18.75C19.9926 6 21 7.00736 21 8.25V19.5M3 19.5C3 20.7426 4.00736 21.75 5.25 21.75H18.75C19.9926 21.75 21 20.7426 21 19.5M3 19.5V12C3 10.7574 4.00736 9.75 5.25 9.75H18.75C19.9926 9.75 21 10.7574 21 12V19.5M12 13.5H12.0075V13.5075H12V13.5ZM12 15.75H12.0075V15.7575H12V15.75ZM12 18H12.0075V18.0075H12V18ZM9.75 15.75H9.7575V15.7575H9.75V15.75ZM9.75 18H9.7575V18.0075H9.75V18ZM7.5 15.75H7.5075V15.7575H7.5V15.75ZM7.5 18H7.5075V18.0075H7.5V18ZM14.25 13.5H14.2575V13.5075H14.25V13.5ZM14.25 15.75H14.2575V15.7575H14.25V15.75ZM14.25 18H14.2575V18.0075H14.25V18ZM16.5 13.5H16.5075V13.5075H16.5V13.5ZM16.5 15.75H16.5075V15.7575H16.5V15.75Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "PayPeriod Templates",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375128;7786:344482\" layer-name=\"heroicons-outline/puzzle-piece\" data-component-name=\"heroicons-outline/puzzle-piece\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"menu-icon\" style=\"width: 24px; height: 24px\"> <path d=\"M14.25 6.83694C14.25 6.48178 14.4361 6.16076 14.6512 5.8782C14.8721 5.5881 15 5.244 15 4.875C15 3.83947 13.9926 3 12.75 3C11.5074 3 10.5 3.83947 10.5 4.875C10.5 5.244 10.6279 5.5881 10.8488 5.8782C11.064 6.16076 11.25 6.48178 11.25 6.83694V6.83694C11.25 7.19822 10.9542 7.48997 10.593 7.47957C9.18939 7.43914 7.80084 7.33845 6.42989 7.18C6.61626 8.79276 6.72269 10.4299 6.74511 12.0873C6.75007 12.4532 6.45293 12.75 6.08694 12.75V12.75C5.73178 12.75 5.41076 12.564 5.1282 12.3488C4.8381 12.1279 4.494 12 4.125 12C3.08947 12 2.25 13.0074 2.25 14.25C2.25 15.4926 3.08947 16.5 4.125 16.5C4.494 16.5 4.8381 16.3721 5.1282 16.1512C5.41076 15.936 5.73178 15.75 6.08694 15.75V15.75C6.39613 15.75 6.64157 16.0108 6.6189 16.3191C6.49306 18.0312 6.27742 19.7182 5.97668 21.3756C7.49458 21.5657 9.03451 21.6848 10.5931 21.7297C10.9542 21.7401 11.2501 21.4483 11.2501 21.087V21.087C11.2501 20.7318 11.0641 20.4108 10.8489 20.1282C10.628 19.8381 10.5001 19.494 10.5001 19.125C10.5001 18.0895 11.5075 17.25 12.7501 17.25C13.9928 17.25 15.0001 18.0895 15.0001 19.125C15.0001 19.494 14.8722 19.8381 14.6513 20.1282C14.4362 20.4108 14.2501 20.7318 14.2501 21.087V21.087C14.2501 21.4199 14.5281 21.6857 14.8605 21.6661C16.6992 21.5581 18.5102 21.3465 20.2876 21.0372C20.5571 19.4889 20.7523 17.9152 20.8696 16.3198C20.8923 16.0111 20.6466 15.75 20.3371 15.75V15.75C19.9819 15.75 19.6609 15.9361 19.3783 16.1513C19.0882 16.3721 18.7441 16.5 18.3751 16.5C17.3396 16.5 16.5001 15.4927 16.5001 14.25C16.5001 13.0074 17.3396 12 18.3751 12C18.7441 12 19.0882 12.128 19.3783 12.3488C19.6609 12.564 19.9819 12.75 20.3371 12.75V12.75C20.7034 12.75 21.0008 12.453 20.9959 12.0867C20.9713 10.2741 20.8463 8.48572 20.6261 6.72698C18.7403 7.06916 16.816 7.30115 14.8603 7.41605C14.528 7.43557 14.25 7.16979 14.25 6.83694V6.83694Z\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Features",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375138;7786:344482;1695:493\" layer-name=\"heroicons-outline/arrow-path\" data-component-name=\"heroicons-outline/arrow-path\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-path-svg\" style=\"width: 24px; height: 24px; flex-shrink: 0\"> <path d=\"M16.0228 10.0984H21.0154V10.0966M2.98413 20.3944V15.4017M2.98413 15.4017L7.97677 15.4017M2.98413 15.4017L6.16502 18.5847C7.15555 19.5771 8.41261 20.33 9.86436 20.719C14.2654 21.8983 18.7892 19.2864 19.9685 14.8853M4.03073 10.6148C5.21 6.21374 9.73377 3.60194 14.1349 4.78121C15.5866 5.1702 16.8437 5.92312 17.8342 6.9155L21.0154 10.0966M21.0154 5.1058V10.0966\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Cadana Conversion",
    isActive: false
  },
  {
    icon: "<svg id=\"I11586:41744;7786:375152;7786:344482;1695:528\" layer-name=\"heroicons-outline/arrow-right-start-on-rectangle\" data-component-name=\"heroicons-outline/arrow-right-start-on-rectangle\" width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"logout-svg\" style=\"width: 24px; height: 24px; flex-shrink: 0\"> <path d=\"M15.75 9.75V6C15.75 4.75736 14.7426 3.75 13.5 3.75L7.5 3.75C6.25736 3.75 5.25 4.75736 5.25 6L5.25 19.5C5.25 20.7426 6.25736 21.75 7.5 21.75H13.5C14.7426 21.75 15.75 20.7426 15.75 19.5V15.75M18.75 15.75L21.75 12.75M21.75 12.75L18.75 9.75M21.75 12.75L9 12.75\" stroke=\"#9CA3AF\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
    label: "Logout",
    isActive: false
  }
];

export function AdminNav() {
  const handleMenuItemClick = (label: string) => {
    console.log(`Clicked on ${label}`);
  };

  return (
    <nav
      className="flex flex-col items-start w-64 bg-white h-[100vh] max-md:w-[200px] max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:flex-row max-sm:p-0 max-sm:w-full max-sm:h-auto max-sm:z-[1000]"
      role="navigation"
      aria-label="Admin navigation"
    >
      <div className="flex flex-col gap-10 items-start self-stretch px-0 pt-8 pb-4 flex-[1_0_0] max-sm:overflow-x-auto max-sm:flex-row max-sm:gap-3 max-sm:p-3">
        <div className="flex flex-col self-center">
          <img src={Logo} width={140} height={34} />
        </div>

        <div className="flex flex-col gap-1 items-start self-stretch px-2 py-0 flex-[1_0_0] max-sm:overflow-x-auto max-sm:flex-row max-sm:gap-2 max-sm:p-0">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              label={item.label}
              isActive={item.isActive}
              onClick={() => handleMenuItemClick(item.label)}
            />
          ))}
        </div>
        <div className="flex flex-col self-stretch max-sm:hidden">
          <img src={Chat} width={100} height={100} />
        </div>
      </div>
    </nav>
  );
}

export default AdminNav;
