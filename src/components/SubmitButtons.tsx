import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const SubmitButtons = () => {
  const { pending } = useFormStatus();
  return (
    <Button className="" type="submit" disabled={pending}>
      {pending ? <Loader2 className="animate-spin" /> : "Generate"}
    </Button>
  );
};

export default SubmitButtons;
