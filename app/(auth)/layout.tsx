import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";

export default function AuthRootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head />
      <body
        className="h-screen w-screen rainbow-mesh p-6"
        suppressHydrationWarning={true}
      >
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
