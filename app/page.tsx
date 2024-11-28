import type { Metadata } from "next";
import HomePage from "@/app/components/HomePage";

export default function IndexPage() {
  return <HomePage/>;
}

export const metadata: Metadata = {
  title: "Myanmar Months",
};
