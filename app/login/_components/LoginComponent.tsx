"use client";

import { useState } from "react";
import { EmailButtons } from "../../../components/SocialButtons/EmailButtons";
import Form from "./Form";

export default function LoginComponent() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? <EmailButtons /> : <Form setSubmitted={setSubmitted} />;
}