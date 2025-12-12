// import { User } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useWallet } from "@/hooks/use-wallet";

// const navItems = ["Home", "About Us", "Ecosystem", "Lore", "Community"];

// export const Header = () => {
//   const { account, provider } = useWallet();

//   console.log("Header account:", provider?.getAvatar(account || ""));
//   return (
//     <header className="flex items-center justify-between px-6 py-4 border-b border-border">
//       {/* Logo */}
// <div className="flex items-center gap-1">
//   {[...Array(5)].map((_, i) => (
//     <div
//       key={i}
//       className="w-8 h-8 rounded-full border-2 border-foreground -ml-2 first:ml-0 bg-background"
//     />
//   ))}
// </div>

//       {/* Navigation */}
// <nav className="hidden md:flex items-center gap-8">
//   {navItems.map((item) => (
//     <a
//       key={item}
//       href="#"
//       className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
//     >
//       {item}
//     </a>
//   ))}
// </nav>

// {/* Profile Button */}
// <Button variant="outline" className="gap-2 rounded-full px-4">
//   <span className="text-sm">Profile</span>
//   <div className="w-6 h-6 rounded-full border border-foreground flex items-center justify-center">
//     <User className="w-3 h-3" />
//   </div>
// </Button>
// </header>
//   );
// };

import { User, Wallet, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/use-wallet";
import { useUserAuth } from "@/hooks/use-user-auth";
import { CreateProfileDialog } from "@/components/Auth/CreateProfileDialogue";

const navItems = ["Home", "About Us", "Ecosystem", "Lore", "Community"];

export const Header = () => {
  const { account, connectWallet, isConnected, disconnectWallet } = useWallet();
  const { userProfile, isNewUser, registerUser } = useUserAuth();

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 border-b border-border">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-2 border-foreground -ml-2 first:ml-0 bg-background"
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* --- DYNAMIC ACTION AREA --- */}
        <div className="flex items-center gap-4">
          {/* State 1: Wallet Not Connected */}
          {!isConnected && (
            <Button onClick={connectWallet} className="gap-2">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </Button>
          )}

          {/* State 2: Connected but New User (Show button just in case modal is closed) */}
          {isConnected && isNewUser && (
            <Button variant="secondary" className="animate-pulse">
              Complete Registration
            </Button>
          )}

          {/* State 3: Fully Logged In (Connected + Profile exists) */}
          {/* Profile Button design moved here */}
          {isConnected && userProfile && (
            <Button variant="outline" className="gap-2 rounded-full px-4">
              <span className="text-sm">
                {userProfile?.displayName || "User"}
              </span>

              {userProfile?.profileImage ? (
                <img
                  src={userProfile?.profileImage}
                  alt="avatar"
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6 rounded-full border border-foreground flex items-center justify-center bg-muted">
                  <User className="w-3 h-3" />
                </div>
              )}
            </Button>
          )}

          {/*  Disconnect Button */}
          {/* Only visible when connected.*/}
          {isConnected && (
            <Button
              variant="ghost"
              size="icon"
              onClick={disconnectWallet}
              title="Disconnect Wallet"
              className="hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          )}
        </div>
      </header>

      {/* The Registration Modal */}
      {/* Since isOpen is tied directly to isNewUser, this will force the modal open 
          as soon as the wallet connects and the backend returns 404. */}
      {isConnected && (
        <CreateProfileDialog
          isOpen={isNewUser}
          walletAddress={account || ""}
          onRegister={registerUser}
        />
      )}
    </>
  );
};
