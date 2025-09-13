import { useState } from "react";
import { CampusHeader } from "@/components/CampusHeader";
import { ChatInterface } from "@/components/ChatInterface";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <CampusHeader />
      
      <main className="container mx-auto max-w-4xl h-[calc(100vh-88px)] flex flex-col">
        <div className="p-4 flex-1 flex flex-col">
          {/* Welcome Section - only show when no messages */}
          <div className="mb-4">
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Welcome to Campus AI Assistant
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get instant answers about class schedules, campus facilities, dining options, 
                library services, and administrative procedures. Ask me anything about campus life!
              </p>
            </div>
            
            <QuickActions onActionClick={(query) => {
              // This would normally integrate with the chat interface
              console.log("Quick action clicked:", query);
            }} />
          </div>
          
          {/* Chat Interface */}
          <div className="flex-1 bg-card rounded-xl border shadow-lg overflow-hidden">
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
