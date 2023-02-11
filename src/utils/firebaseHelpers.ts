import {
  DocumentData,
  DocumentSnapshot,
  getDoc,
  QuerySnapshot,
} from "@firebase/firestore";

export const parseGetDocs = <T>(data: QuerySnapshot<DocumentData>): T =>
  data.docs.map((doc) => parseGetDoc<T>(doc)) as T;

export const parseGetDoc = <T>(data: DocumentSnapshot<DocumentData>): T =>
  ({
    ...data.data(),
    id: data.id,
  } as T);

export const parseDocRef = async <T extends Object>(
  data: DocumentSnapshot<DocumentData>,
  keysWithRef: (keyof T)[]
) => {
  const initialDataWithId = parseGetDoc(data);

  for await (const key of keysWithRef) {
    // @ts-ignore
    const data = await getDoc(initialDataWithId[key]);
    // @ts-ignore
    initialDataWithId[key] = parseGetDoc(data);
  }

  return initialDataWithId as T;
};
