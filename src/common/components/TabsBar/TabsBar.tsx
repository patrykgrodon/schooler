import { Tabs, Tab, Paper } from "@mui/material";
import { RouteValue } from "routes/routePaths";

export type TabsBarItem = {
  label: string;
  Icon?: React.ElementType;
  to?: RouteValue;
  component?: any;
};

type TabsBarProps = {
  activeTab: number;
  handleChangeTab: (newValue: number) => void;
  ariaLabel: string;
  tabs: TabsBarItem[];
};

const TabsBar = ({
  activeTab,
  handleChangeTab,
  tabs,
  ariaLabel,
}: TabsBarProps) => {
  const changeTab = (_: any, newValue: any) => handleChangeTab(newValue);

  return (
    <Paper square variant="outlined">
      <Tabs
        aria-label={ariaLabel}
        variant="scrollable"
        scrollButtons="auto"
        value={activeTab}
        onChange={changeTab}>
        {tabs.map(({ label, Icon, to, component }) => (
          <Tab
            key={label}
            component={component}
            to={to}
            label={label}
            icon={Icon && <Icon sx={{ mb: "0 !important" }} />}
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              height: "56px",
              minHeight: "56px",
              textTransform: "none",
            }}
          />
        ))}
      </Tabs>
    </Paper>
  );
};
export default TabsBar;
