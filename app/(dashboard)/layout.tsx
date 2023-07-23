import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";
import "@/styles/global.css";

export default function DashboardRootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head />
      <body
        className="h-screen w-screen candy-mesh p-6"
        suppressHydrationWarning={true}
      >
        <GlassPane className="w-full h-full flex items-center p-6">
          <Sidebar />
          {children}
        </GlassPane>
        
        <div id="modal" />
      </body>
    </html>
  );
}
