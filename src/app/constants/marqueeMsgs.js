import OUTRIGHT from "../../app/Cursors_WreathHover.png";
import STAR from "../../app/Cursors_Star.png";
import SNOWFLAKE from "../images/snow/snowflake-single.svg";
import LOGO from "../images/logo-ornament.svg";
import Image from "next/image";

export const MARQUEE_MSGS = [
  <Image src={STAR} alt="" key="star" />,
  <Image src={OUTRIGHT} alt="" key="outright" />,
  "Happy Birthday, Antoine!",
  <Image src={SNOWFLAKE} height={32} width={32} alt="" key="snowflake" />,
  <Image src={LOGO} height={32} width={32} alt="" key="logo" />,
];
