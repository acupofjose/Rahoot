import loader from "@/assets/loader.svg"
import Image from "next/image"

// eslint-disable-next-line no-unused-vars
export default function Loader({ ...otherProps }) {
  return <Image src={loader} alt="Loading..." />
}
