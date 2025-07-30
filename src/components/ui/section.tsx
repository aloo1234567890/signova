import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </section>
  )
}