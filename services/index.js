import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "../firebase";

export const sendContactForm = async ({ name, email,phone,company, message }) => {
  try {
    const ref = collection(firestore, "contact");
    await addDoc(ref, {
      name,
      email,
      phone,
      company,
      message,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err)
    return -1;
  }
};