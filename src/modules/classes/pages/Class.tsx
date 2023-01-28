import { SchoolOutlined, WorkOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { layoutMainPadding } from "common/components/Layout/Layout";
import { useState } from "react";
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

  const changeTab = (newActiveTab: number) => setActiveTab(newActiveTab);
  return (
    <Box>
      <TabsBar
        activeTab={activeTab}
        ariaLabel="Class page tabs bar"
        handleChangeTab={changeTab}
        tabs={tabs}
      />
      <Box sx={{ p: layoutMainPadding }}>
        <Typography variant="h3" component="h1">
          Klasa {params.classId}
        </Typography>
      </Box>
    </Box>
  );
};

export default Class;
