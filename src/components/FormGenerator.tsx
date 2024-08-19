"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { generateForm } from "@/server/actions/generateForm";
import { Textarea } from "./ui/textarea";
import { useFormState } from "react-dom";
import { Plus } from "lucide-react";
import SubmitButtons from "./SubmitButtons";

const FormGenerator = () => {
  const initialState: {
    message: string;
    data?: any;
  } = {
    message: "",
  };

  const [open, setOpen] = useState(false);
  const [state, formAction] = useFormState(generateForm, initialState);
  const onFormCreate = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (state.message === "success") {
      setOpen(false);
    }
    console.log(state);
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger>
        <Button onClick={onFormCreate}>
          <div className="items-center gap-2 flex ">
            <Plus className="size-6" />
            Create Button
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Form</DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <Textarea
              name="description"
              placeholder="Input what the form is about, who it is for and what information you would like to collect!"
            />
          </div>
          <DialogFooter>
            <SubmitButtons />
            <Button variant="link">Create Manually</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormGenerator;
