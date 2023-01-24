import { SchoolOutlined, WorkOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import routes from "routes/routePaths";
import TabsBar from "../components/TabsBar/TabsBar";

const tabs = [
  {
    label: "Uczniowie",
    Icon: SchoolOutlined,
    to: routes.Classes,
    component: Link,
  },
  {
    label: "Nauczyciele",
    Icon: WorkOutlined,
  },
  {
    label: "Plan lekcji",
    Icon: SchoolOutlined,
  },
];

const Class = () => {
  const params = useParams<{ classId: string }>();
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const containerNode = containerRef.current;
    if (containerNode === null) return;
    const parentNode = containerNode.parentElement;
    if (!parentNode) return;
    const parentPadding = parentNode.style.padding;
    parentNode.style.padding = "0";

    return () => {
      parentNode.style.padding = parentPadding;
    };
  }, []);

  const changeTab = (newActiveTab: number) => setActiveTab(newActiveTab);
  return (
    <Box ref={containerRef}>
      <TabsBar
        activeTab={activeTab}
        ariaLabel="Class page tabs bar"
        handleChangeTab={changeTab}
        tabs={tabs}
      />
      <Box sx={{ p: 5 }}>
        <Typography variant="h3" component="h1">
          Klasa {params.classId}
        </Typography>
      </Box>
    </Box>
  );
};

export default Class;
