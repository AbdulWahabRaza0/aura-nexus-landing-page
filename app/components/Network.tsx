"use client";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const introHeaderVariants = {
  hide: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export default function NetworkComponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div id="network">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introHeaderVariants}
      >
        <Typography
          fontSize={isSmallScreen ? "30px" : "57px"}
          lineHeight={isSmallScreen ? "30px" : "57px"}
          color={"primary"}
          fontWeight={700}
          align="center"
        >
          JOIN THE NETWORK FROM ANY <br />
          DEVICE OF YOUR CHOICE
        </Typography>
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introHeaderVariants}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={"/device.svg"}
          alt="devices"
          width={600}
          height={600}
          className="img-responsive"
          style={{ width: "100%" }}
        />
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={introHeaderVariants}
      >
        <Typography
          fontSize={isSmallScreen ? "30px" : "57px"}
          lineHeight={isSmallScreen ? "30px" : "57px"}
          //   color={"primary"}
          fontWeight={700}
          align="center"
        >
          EXPERIENCE THE MAGIC <br />
          OF AURALNEXUS
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href={"https://open-book-frontend.vercel.app/Dashboard"}>
            <Button
              variant="outlined"
              style={{ padding: "20px 80px", marginTop: "50px" }}
            >
              Visit Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
