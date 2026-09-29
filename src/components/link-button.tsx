import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";

type ButtonVariants = VariantProps<typeof buttonVariants>;

type LinkButtonProps = ButtonVariants & {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

export function LinkButton({
  href,
  className,
  children,
  external,
  variant = "default",
  size = "default",
}: LinkButtonProps) {
  if (external) {
    return (
      <Button
        nativeButton={false}
        variant={variant}
        size={size}
        className={className}
        render={
          <a href={href} target="_blank" rel="noopener noreferrer" />
        }
      >
        {children}
      </Button>
    );
  }

  if (
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#") ||
    href.startsWith("http")
  ) {
    return (
      <Button
        nativeButton={false}
        variant={variant}
        size={size}
        className={className}
        render={<a href={href} />}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      nativeButton={false}
      variant={variant}
      size={size}
      className={className}
      render={<Link href={href} />}
    >
      {children}
    </Button>
  );
}
