import { DocRef, SchoolDoc } from "common/types";
import { getDoc } from "firebase/firestore";
import { parseGetDoc } from "utils/firebaseHelpers";

export const getSchoolFromRef = async (ref: DocRef) => {
  const doc = await getDoc(ref);
  return parseGetDoc<SchoolDoc>(doc);
};
