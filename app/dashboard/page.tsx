"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";
import useMultilingualValues from "../hooks/useMultilingualValues";
import esValues from "@/esValues.json";
import enValues from "@/enValues.json";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import { apiURL, routes } from "@/Constants";
import logo from "../../app/images/logos/logo.png";
import LateralNavbar from "../components/LateralNavbar/LateralNavbar";
import { lateralNavbarItems } from "@/Constants";
import RightBar from "../components/RightBar/RightBar";
import SearchPages from "../components/SearchPages/SearchPages";
import ChartComponent from "../components/ChartComponent/ChartComponent";
import AuthRoute from "../components/AuthComponent/AuthComponent";
import useLineChartData from "../hooks/useLineChartData";
import useBarChartData from "../hooks/useBarChartData";
export default function Home() {
  const { language, setLanguage, languageValues } = useMultilingualValues(
    "en",
    esValues,
    enValues
  );

  const { chartDataLine, chartLinesLabels } = useLineChartData(
    `${apiURL}/lineChartProjects/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token c8611ccb12550346b6c35a7b206fba75a43c20de",
      },
      body: JSON.stringify({
        id: 73,
        timezone: "America/Mexico_City",
        intervaltime: "yearly",
      }),
    }
  );

  const [userName, setUserName] = useState("");
  const [getProfileImg, setProfileImg] = useState("");
  useEffect(() => {
    const storedUserName = localStorage.getItem("first_name");
    const storedProfileImg = localStorage.getItem("profile_img");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    if (storedProfileImg) {
      setProfileImg(storedProfileImg);
    } else {
      setProfileImg(logo.src);
    }
  }, []);

  return (
    <>
      <LateralNavbar
        lateralNavbar={lateralNavbarItems}
        logo={logo.src}
        user={{ isAdmin: false }}
      />
      <RightBar
        profileName={userName}
        profileImageUrl={getProfileImg}
        logoutHeader={languageValues.rightBar.logoutHeader}
        logoutText={languageValues.rightBar.logoutText}
        logoutButton={languageValues.rightBar.logoutButton}
        profileButton={languageValues.rightBar.profileButton}
      />

      <SearchPages searchablePages={lateralNavbarItems} isAdmin={false} />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.topContainer}>
            <h1>
              {languageValues.dashboard.welcome}, {userName}
            </h1>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.topGraphsContainer}>
              <div className={styles.graphLeftContainer}>
                {chartDataLine.length > 0 && chartLinesLabels.length > 0 ? (
                  <ChartComponent
                    data={chartDataLine}
                    labels={chartLinesLabels}
                    chartType="line"
                    graphTitle="Line Chart"
                    isFilled={false}
                    borderColor={["#6200d1"]}
                  />
                ) : (
                  <p className={styles.loadingText}>Loading...</p>
                )}
              </div>
              <div className={styles.graphCenterContainer}>
                <ChartComponent
                  data={chartDataLine}
                  labels={[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                  ]}
                  chartType="pie"
                  graphTitle="Pie Chart"
                  isFilled={false}
                  borderColor={["#6200d1"]}
                  cName={styles.pieChartContainer}
                />
              </div>
              <div className={styles.graphRightContainer}>
                <ChartComponent
                  data={chartDataLine}
                  labels={[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                  ]}
                  chartType="bar"
                  graphTitle="Bar Chart"
                  isFilled={true}
                  borderColor={["#6200d1"]}
                />
              </div>
            </div>
            <div className={styles.bottomGraphsContainer}>
              {" "}
              <div className={styles.graphLeftContainer}>
                {chartDataLine.length > 0 && chartLinesLabels.length > 0 ? (
                  <ChartComponent
                    data={chartDataLine}
                    labels={chartLinesLabels}
                    chartType="line"
                    graphTitle="Line Chart"
                    isFilled={false}
                    borderColor={["#6200d1"]}
                  />
                ) : (
                  <p className={styles.loadingText}>Loading...</p>
                )}
              </div>
              <div className={styles.graphCenterContainer}>
                <ChartComponent
                  data={chartDataLine}
                  labels={[
                    "January",
                    "February",

                  ]}
                  chartType="pie"
                  graphTitle="Pie Chart"
                  isFilled={false}
                  borderColor={["#6200d1"]}
                  cName={styles.pieChartContainer}
                />
              </div>
              <div className={styles.graphRightContainer}>
                <ChartComponent
                  data={chartDataLine}
                  labels={[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                  ]}
                  chartType="bar"
                  graphTitle="Bar Chart"
                  isFilled={true}
                  borderColor={["#6200d1"]}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer updateLanguage={setLanguage} />
    </>
  );
}
