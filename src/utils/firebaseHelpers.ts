import {
  DocumentData,
  QuerySnapshot,
  DocumentSnapshot,
  getDoc,
} from "@firebase/firestore";

export const parseGetDocs = <T>(data: QuerySnapshot<DocumentData>): T => {
  return data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as T;
};

export const parseGetDoc = <T>(data: DocumentSnapshot<DocumentData>): T => {
  return {
    ...data.data(),
    id: data.id,
  } as T;
};

export const parseDocRef = async <T>(
  data: DocumentSnapshot<DocumentData>,
  keysWithRef: string[]
) => {
  const initialDataWithId = { ...data.data(), id: data.id };
  keysWithRef.forEach(async (key) => {
    // @ts-ignore
    const data = await getDoc(initialDataWithId[key]);
    // @ts-ignore
    initialDataWithId[key] = { ...data.data(), id: data.id };
  });
  return initialDataWithId as T;
};
