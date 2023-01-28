import { TabsBarItem } from "common/components/TabsBar/TabsBar";
import { Link } from "react-router-dom";
import { RouteValue } from "routes/routePaths";

const getTabsBarItem = (
  label: string,
  Icon?: React.ElementType,
  to?: string
): TabsBarItem => {
  return {
    label,
    Icon,
    to: to as RouteValue,
    component: to ? Link : undefined,
  };
};

export default getTabsBarItem;
