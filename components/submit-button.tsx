"use client";

import { Button } from "@/components/ui/button";
import { type ButtonProps } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

type FormAction = (formData: FormData) => Promise<any>;

interface SubmitButtonProps extends Omit<ButtonProps, 'formAction'> {
  formAction?: FormAction;
  children: React.ReactNode;
  pendingText?: string;
}

export function SubmitButton({ formAction, children, pendingText = "Submitting...", ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  const buttonProps = props as ButtonProps;
  
  return (
    <Button type="submit" {...buttonProps} disabled={pending}>
      {pending ? pendingText : children}
    </Button>
  );
}
