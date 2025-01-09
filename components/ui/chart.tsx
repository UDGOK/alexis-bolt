"use client"

import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

type Theme = keyof typeof THEMES

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: Theme
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ className, theme = "light", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full h-[300px]",
          THEMES[theme],
          className
        )}
        {...props}
      />
    )
  }
)
Chart.displayName = "Chart"

const ChartTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold text-center", className)}
    {...props}
  />
))
ChartTitle.displayName = "ChartTitle"

const ChartDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground text-center", className)}
    {...props}
  />
))
ChartDescription.displayName = "ChartDescription"

const ChartContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative w-full h-[300px]", className)}
    {...props}
  />
))
ChartContent.displayName = "ChartContent"

export {
  Chart,
  ChartTitle,
  ChartDescription,
  ChartContent,
  RechartsPrimitive as ChartPrimitive,
}
